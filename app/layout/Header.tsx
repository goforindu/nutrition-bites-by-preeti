// components/layout/Header.tsx
"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { scrollToId } from "../lib/scroll";

interface HeaderProps {
  sections: string[];
  active: string;
}

export function Header({ sections, active }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navSections = sections.slice(1); // skip "home"

  return (
    <header
      id="site-header"
      className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b"
    >
      <div className="max-w-6xl mx-auto px-4  flex items-center justify-between">
        <button
          onClick={() => {
            scrollToId("home");
            setMenuOpen(false);
          }}
          className="flex items-center gap-3"
        >
          <span className="inline-flex items-center justify-center">
            <img
              src="images/logo-preeti.png"
              alt="NBP Logo"
              className="h-16 w-16 object-contain"
            />
          </span>

          <span className="font-semibold text-lg">NutritionBitesByPreeti</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navSections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className={`relative transition-colors ${
                active === id ? "text-emerald-700" : "hover:text-emerald-700"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              {active === id && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-emerald-600 rounded-full" />
              )}
            </button>
          ))}
          <button
            onClick={() => scrollToId("contact")}
            className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow"
          >
            Book Free Call
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-2">
            {navSections.map((id) => (
              <button
                key={id}
                className="w-full text-left px-2 py-2 rounded-lg hover:bg-slate-50"
                onClick={() => {
                  scrollToId(id);
                  setMenuOpen(false);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToId("contact");
                setMenuOpen(false);
              }}
              className="mt-2 px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow"
            >
              Book Free Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
