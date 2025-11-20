// components/layout/Topbar.tsx
"use client";

import { Mail, Phone, Sparkles } from "lucide-react";

export function Topbar() {
  return (
    <div
      id="topbar"
      className="w-full bg-gradient-to-r from-green-800 to-green-600 text-white text-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p className="font-medium flex items-center gap-2">
          <Sparkles size={16} /> Free 15-min Consultation • Mon–Sat
        </p>
        <p className="flex flex-wrap gap-4">
          <a
            className="hover:underline inline-flex items-center gap-1"
            href="tel:+919625310091"
          >
            <Phone size={14} /> 9625310091
          </a>
          <a
            className="hover:underline inline-flex items-center gap-1"
            href="mailto:pcnutritionbites@gmail.com"
          >
            <Mail size={14} /> support@nutrition-bites-by-preeti.com
          </a>
        </p>
      </div>
    </div>
  );
}
