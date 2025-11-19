import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
const TransformationsSection = () => {
  const transformations = [
    {
      name: "Akanksha sontake, 29",
      goal: "weight loss",
      duration: "5 months",
      beforeImg: "/images/transform/pic5.jpeg",
      afterImg: "/images/transform/pic1.jpeg",
      highlight:
        "29-year-old IT professional Akanksha transformed her health with hostel-friendly meals — reduced cravings, improved immunity and routine, and gained confidence, proving healthy eating is possible even with shifts and living alone.",
    },
    {
      name: "Dhirendra Tiwari, 32",
      goal: "Overweight / Obesity",
      duration: "4 months",
      beforeImg: "/images/transform/pic4.jpeg",
      afterImg: "/images/results/rahul-after.jpg",
      highlight:
        "32-year-old sales manager Dhirendra went from 101 kg to 87 kg, relieved his back pain, reduced cravings, improved sleep and confidence, and even got his marriage fixed — all through Preeti’s simple, ghar-ka-khana based guided plan.",
    },
    {
      name: "Madhusmita, 30",
      goal: "Weight Loss",
      duration: "4 months",
      beforeImg: "/images/transform/pic2.jpeg",
      afterImg: "/images/results/neha-after.jpg",
      highlight:
        "30-year-old AIIMS nurse Anju reduced weight from 91 kg to 77 kg, improved energy, resolved leg pain, and controlled cravings — proving real progress is possible even with the toughest shifts.",
    },
  ];
  return (
    <section
      id="transformations"
      className="relative max-w-6xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-36"
    >
      {/* soft background glows */}
      <div className="pointer-events-none absolute -top-16 -left-20 w-72 h-72 bg-emerald-200/25 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 bg-teal-200/20 blur-3xl rounded-full" />

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Real people. Real transformations.
          </h2>
          <p className="mt-2 text-slate-600">
            With small, sustainable changes and home-cooked food, clients see
            visible inch loss, better energy and more confidence.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {transformations.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-md overflow-hidden flex flex-col"
            >
              {/* images */}
              <div className="grid grid-cols-1 gap-px bg-slate-100">
                <div className="relative">
                  <img
                    src={t.beforeImg}
                    alt={`${t.name} - before`}
                    className="h-full w-full object-fit"
                  />
                </div>
              </div>

              {/* content */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-emerald-600 font-medium">
                      {t.goal}
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-500 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">
                    {t.duration}
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-600">{t.highlight}</p>

                <div className="mt-4 text-xs text-slate-500">
                  *Individual results vary. All plans are personalized after
                  assessing medical history, lifestyle and preferences.
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA under transformations */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-5 py-2.5 text-sm font-semibold shadow-lg hover:scale-105 transition"
          >
            Book your free consult &nbsp;·&nbsp; Start your own before/after
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
