"use client";

import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("Weight loss");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const links: [string, string][] = [
    ["about", "About"],
    ["programs", "Programs"],
    ["conditions", "Conditions"],
    ["approach", "Approach"],
    ["results", "Results"],
    ["faq", "FAQs"],
    ["contact", "Book Free Call"],
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, goal, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        // clear form
        setName("");
        setPhone("");
        setEmail("");
        setGoal("Weight loss");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-50 to-white border-t scroll-mt-28 md:scroll-mt-36"
    >
      {/* decorative background glows */}
      <div className="pointer-events-none absolute -top-20 left-0 w-80 h-80 bg-emerald-300/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-20 right-0 w-80 h-80 bg-teal-300/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start relative z-10">
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Book your free 15-minute call
          </h2>

          <p className="mt-3 text-slate-600 max-w-md">
            Let’s rebuild your confidence, health & happiness — one meal at a
            time. Quick chat. No pressure. Real guidance.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                <Phone className="text-emerald-600" size={18} />
              </div>
              <a
                href="tel:+919625310091"
                className="underline decoration-emerald-400 group-hover:text-emerald-700 transition font-medium"
              >
                +91 96253 10091
              </a>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                <Mail className="text-emerald-600" size={18} />
              </div>
              <a
                href="mailto:support@nutrition-bites-by-preeti.com"
                className="underline decoration-emerald-400 group-hover:text-emerald-700 transition font-medium"
              >
                support@nutrition-bites-by-preeti.com
              </a>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                <MessageCircle className="text-emerald-600" size={18} />
              </div>
              <a
                href="https://wa.me/919625310091?text=Hi%20I%20want%20a%20consultation"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-emerald-400 group-hover:text-emerald-700 transition font-medium"
              >
                WhatsApp chat
              </a>
            </div>
          </div>

          <div className="mt-8 text-xs text-slate-500 flex items-center gap-2">
            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
            100% private & secure consultation
          </div>
        </div>

        {/* RIGHT SECTION — FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border bg-white/80 backdrop-blur-xl p-8 grid gap-5 shadow-xl"
        >
          <div>
            <label className="text-sm font-medium text-slate-700">Name</label>
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
              focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
                focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                placeholder="Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
                focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Goal</label>
            <select
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
              focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option>Weight loss</option>
              <option>PCOD support</option>
              <option>Pre-conception</option>
              <option>Diabetes/BP</option>
              <option>Gut issues</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
              focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              rows={4}
              placeholder="Tell us about your goals..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="relative rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 
              text-white px-4 py-3 font-semibold shadow-lg hover:shadow-xl 
              hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Request"}
            <span className="absolute inset-0 rounded-xl ring-2 ring-emerald-600/20 animate-pulse"></span>
          </button>

          {status === "success" && (
            <p className="text-xs text-emerald-600 text-center">
              ✅ Thank you! Your request has been sent. Preeti will contact you
              soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-red-500 text-center">
              ❌ Something went wrong. Please try again or WhatsApp us directly.
            </p>
          )}

          <p className="text-xs text-slate-500 text-center">
            By submitting, you agree to be contacted via WhatsApp/call.
          </p>
        </form>
      </div>

      <svg
        className="absolute -bottom-1 left-0 w-full"
        viewBox="0 0 1440 40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path fill="#ffffff" d="M0,32L1440,0L1440,40L0,40Z" />
      </svg>
    </section>
  );
}
