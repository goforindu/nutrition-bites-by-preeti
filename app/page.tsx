"use client";

import { useEffect, useState } from "react";

import { SiteFooter } from "./components/sections/SiteFooter";

import FAQSection from "./components/sections/FAQSection";
import { ResultsSection } from "./components/sections/ResultsSection";
import TransformationsSection from "./components/sections/TransformationsSection";
import ApproachSection from "./components/sections/ApproachSection";
import ConditionsSection from "./components/sections/ConditionsSection";
import ProgramsSection from "./components/sections/ProgramsSection";
import { HeroSection } from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import { Header } from "./layout/Header";
import { Topbar } from "./layout/Topbar";
import { ContactSection } from "./components/sections/ ContactSection";

// Active section hook (still used here)
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: 0.01 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Page() {
  const sections = [
    "home",
    "about",
    "programs",
    "conditions",
    "approach",
    "results",
    "faq",
    "contact",
  ];

  const active = useActiveSection(sections);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Subtle background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:22px_22px]" />

      {/* Top Bar */}
      <Topbar />

      {/* Header */}
      <Header sections={sections} active={active} />

      {/* Hero */}
      <HeroSection />

      {/* About + Counters */}
      <AboutSection />

      {/* Programs with gradient borders */}
      <ProgramsSection />

      {/* Conditions */}
      <ConditionsSection />

      {/* Approach */}
      <ApproachSection />

      {/* Before / After Transformations */}
      <TransformationsSection />

      {/* Results */}
      <ResultsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
