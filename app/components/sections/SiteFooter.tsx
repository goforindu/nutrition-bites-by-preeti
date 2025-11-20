"use client";

import { scrollToId } from "../../lib/scroll";

export function SiteFooter() {
  const links: [string, string][] = [
    ["about", "About"],
    ["programs", "Programs"],
    ["conditions", "Conditions"],
    ["approach", "Approach"],
    ["results", "Results"],
    ["faq", "FAQs"],
    ["contact", "Book Free Call"],
  ];

  return (
    <footer className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-16 grid md:grid-cols-4 gap-10 text-sm">
        {/* Brand / Intro */}
        <div className="space-y-3">
          <p className="font-bold text-lg text-green-300">
            NutritionBitesByPreeti
          </p>
          <p className="text-slate-100 leading-relaxed">
            NutritionBitesByPreeti is a trusted clinical nutrition consultancy
            offering personalized diet guidance for weight management, hormonal
            balance, PCOD care, and holistic wellness — helping you achieve real
            results with simple nutrition.
          </p>
          <p className="text-green-200 font-semibold mt-3">
            Dt. Preeti Chauhan – Certified Dietitian & Wellness Coach
          </p>
        </div>

        {/* Programs / Quick Links */}
        <div>
          <p className="font-semibold text-green-300">Quick Links</p>
          <ul className="mt-2 space-y-1">
            {links.map(([id, label]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToId(id)}
                  className="hover:text-green-300 text-slate-100 transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <p className="font-semibold text-green-300">Get in Touch</p>
          <div className="mt-3 space-y-3 text-slate-100">
            <div>
              <p className="font-medium text-green-200">Email</p>
              <p>support@nutrition-bites-by-preeti.com</p>
            </div>
            <div>
              <p className="font-medium text-green-200">Phone</p>
              <p>+91 96253 10091</p>
            </div>
            <div>
              <p className="font-medium text-green-200">Address</p>
              <p>
                Matiala Extn, Uttam Nagar,
                <br />
                New Delhi – 110059
              </p>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p className="font-semibold text-green-300">Legal</p>
          <ul className="mt-2 space-y-1 text-slate-100">
            <li>
              <a
                href="/privacy"
                className="hover:text-green-300 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-green-300 transition-colors"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700/40 text-center text-xs text-slate-100 py-6 space-y-1">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-green-300 font-medium">
            NutritionBitesByPreeti
          </span>
          . All Rights Reserved.
        </p>
        <p className="text-green-200">
          Designed & Developed by{" "}
          <a
            href="https://www.nexinora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-300 hover:text-green-200 transition-colors"
          >
            NEXinora Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
