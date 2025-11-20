import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, phone, goal, message } = await req.json();

    const from = process.env.EMAIL_FROM;
    const to = process.env.EMAIL_TO;

    if (!from || !to) {
      console.error("Missing EMAIL_FROM or EMAIL_TO env variable");
      return new Response(
        JSON.stringify({ success: false, message: "Server misconfigured." }),
        { status: 500 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 20px;">
          <h2 style="color: #059669;">🍏 New Consultation Request — NutritionBitesByPreeti</h2>
          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Goal:</strong> ${goal || "Not selected"}</p>
          <p><strong>Message:</strong><br/>${
            message || "No message provided"
          }</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from,
      to,
      // ✅ reply_to tabhi add hoga jab email truthy hai
      ...(email ? { reply_to: email } : {}),
      subject: "🍏 New Consultation Request — NutritionBitesByPreeti",
      html: emailHtml,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
