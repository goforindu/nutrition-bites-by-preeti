export default function TermsPage() {
  return (
    <section className=" py-20 px-6 bg-white scroll-mt-28 md:scroll-mt-36">
      {/* Soft floating gradient accents */}
      <div className="pointer-events-none absolute -top-24 left-0 w-80 h-80 rounded-full bg-emerald-200/25 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-teal-200/25 blur-3xl"></div>

      <div className="relative max-w-3xl mx-auto text-center text-gray-800 bg-white/90 backdrop-blur p-10 rounded-2xl shadow-xl border border-emerald-50">
        <h1 className="text-4xl font-bold text-emerald-900 mb-6">
          Terms &amp; Conditions
        </h1>

        <p className="mb-4">
          Welcome to{" "}
          <strong>Nutrition Bites by Preeti (NutritionBitesByPreeti)</strong>.
          By accessing or using this website (the “Site”) or our services, you
          agree to follow these Terms &amp; Conditions. Please read them
          carefully before continuing to use our services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-emerald-800">
          1. Service Overview
        </h2>
        <p className="mb-4">
          We provide personalised diet and nutrition guidance, general health
          education, lifestyle suggestions, and wellness consultations based on
          the information voluntarily shared by you.
        </p>
        <p className="mb-4 text-sm text-gray-600">
          <strong>
            These services do not replace medical diagnosis, prescription, or
            emergency care provided by registered medical professionals.
          </strong>
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-emerald-800">
          2. User Responsibility
        </h2>
        <p className="mb-4">
          You agree to provide accurate, complete, and updated information
          including medical conditions, allergies, medications, dietary
          restrictions, and symptoms when requested.
        </p>
        <p className="mb-4">
          Any changes in your health should be informed to us promptly for safe
          continuation of diet services.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-emerald-800">
          3. Health Disclaimer
        </h2>
        <p className="mb-4">
          Results vary for every individual depending on multiple health and
          lifestyle factors. We do not guarantee specific medical outcomes or
          weight results within a particular period.
        </p>
        <p className="mb-4">
          Always consult your doctor for medical concerns or if you experience
          health issues during a program.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-emerald-800">
          4. Intellectual Property
        </h2>
        <p className="mb-4">
          All original text, diet plans, written material, design, layout, and
          branding on this website are the intellectual property of{" "}
          <strong>Nutrition Bites by Preeti</strong> and are protected under
          applicable copyright laws.
        </p>
        <p className="mb-4">
          Images and media used on this Site include a combination of original
          visuals provided by Nutrition Bites by Preeti and royalty-free images
          sourced from trusted platforms such as{" "}
          <span className="whitespace-nowrap">Pexels</span>, in accordance with
          their respective free usage licences. Such images remain the property
          of their original creators.
        </p>
        <p className="mb-4">
          You may not reproduce, modify, publish, or redistribute any part of
          this website’s content, layout, or written material without prior
          written permission from <strong>Nutrition Bites by Preeti</strong>.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-emerald-800">
          5. Payment, Refunds & Program Validity
        </h2>
        <ul className="text-center ml-6 mb-4  space-y-2">
          <li>
            1.All payments must be completed before diet plans are shared.
          </li>
          <li>
            2.Payments once made are generally <strong>non-refundable</strong>.
          </li>
          <li>
            3.Program validity timelines must be followed and cannot be extended
            without prior confirmation.
          </li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-emerald-800">
          6. Website Use
        </h2>
        <p className="mb-4">
          You may not misuse the Site or engage in unauthorized access,
          distribution of harmful content, or infringement of intellectual
          property.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-emerald-800">
          7. Changes to Terms
        </h2>
        <p className="mb-4">
          We may update these Terms &amp; Conditions anytime to reflect changes
          in services or regulatory requirements. The updated version will be
          posted on this page with a revised “Last Updated” date.
        </p>

        {/* Last Updated + Developer */}
        <p className="mt-10 text-sm text-gray-600">
          Last Updated: November 2025
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Website designed and developed by{" "}
          <a
            href="https://nexinora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-semibold hover:underline"
          >
            NEXinora Technologies
          </a>
          .
        </p>
      </div>
    </section>
  );
}
