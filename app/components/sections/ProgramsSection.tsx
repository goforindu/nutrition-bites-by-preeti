import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const ProgramsSection = () => {
  const programs = [
    {
      title: "Weight Loss & Inch Loss",
      img: "images/weight-loss.jpg",
      points: [
        "Custom meal plans",
        "Weekly reviews",
        "Plate-planning & eating out tips",
      ],
    },
    {
      title: "PCOD / Hormonal Balance",
      img: "https://images.pexels.com/photos/4056536/pexels-photo-4056536.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200",
      points: [
        "Cycle-friendly nutrition",
        "Anti-inflammatory meals",
        "Stress & sleep coaching",
      ],
    },
    {
      title: "Pre-Conception Nutrition",
      img: "images/pre-conception.jpg",
      points: [
        "Fertility-supportive diet",
        "Micronutrient focus",
        "Couple guidance available",
      ],
    },
    {
      title: "Metabolic Health",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200",
      points: ["Diabetes & BP", "Cholesterol control", "Fatty liver reversal"],
    },
    {
      title: "Gut & Immunity",
      img: "images/gut-health.jpg",
      points: [
        "IBS / bloating support",
        "Probiotic foods",
        "Immunity routines",
      ],
    },
    {
      title: "Joint & Knee Pain",
      img: "images/knee-pain.jpg",
      points: [
        "Anti-inflammatory diet",
        "Weight support",
        "Daily movement goals",
      ],
    },
  ];
  return (
    <section
      id="programs"
      className="max-w-6xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl font-bold">Personalized Programs</h2>
        <p className="mt-2 text-slate-600">
          Designed around your routine, tastes and budget — with visible,
          sustainable results.
        </p>
      </motion.div>

      {/* cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {programs.map((card, idx) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: idx * 0.05, duration: 0.35 }}
            className="relative rounded-2xl p-0.5 bg-gradient-to-br from-emerald-300 to-teal-200"
            aria-labelledby={`program-title-${idx}`}
          >
            {/* Image (big) */}
            <div className="rounded-t-2xl overflow-hidden bg-gray-100">
              <div className="relative w-full aspect-[16/10]">
                <img
                  src={card.img}
                  alt={`${card.title} thumbnail`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* small overlay gradient for legible text if you later add text on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Content */}
            <div className="rounded-b-2xl p-6 bg-white">
              <div className="flex items-start justify-between gap-4">
                <h3
                  id={`program-title-${idx}`}
                  className="text-lg font-semibold text-slate-900"
                >
                  {card.title}
                </h3>

                <button
                  className="text-xs font-medium px-3 py-1 rounded-full border border-emerald-100 hover:bg-emerald-50 transition"
                  aria-label={`Learn more about ${card.title}`}
                >
                  Learn more
                </button>
              </div>

              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {card.points.map((p) => (
                  <li key={p} className="flex gap-2 items-start">
                    <CheckCircle2
                      className="text-emerald-600 mt-0.5"
                      size={16}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Personalized | 1:1 Support
                </span>
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-emerald-600 text-white text-xs font-medium px-4 py-1.5 shadow hover:scale-[1.03] transition"
                >
                  Book a call
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
