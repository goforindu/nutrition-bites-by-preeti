import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Apple,
  Flame,
  Droplet,
  Recycle,
  Bone,
  Weight,
  VenetianMask,
} from "lucide-react";

const ConditionsSection = () => {
  const CONDITIONS = [
    {
      name: "Diabetes (Type 2)",
      icon: Droplet,
      image: "images/conditions/diabetes.jpg",
      description:
        "Balanced meal plans to stabilise blood sugar without extreme restrictions or separate ‘diabetic’ food.",
      focus: [
        "Control sugar spikes & crashes",
        "Plate method for daily meals",
        "Reducing cravings & late-night snacking",
      ],
    },
    {
      name: "High Cholesterol",
      icon: Flame,
      image: "images/conditions/cholesterol.jpg",
      description:
        "Heart-friendly nutrition that improves lipid profile using smart fat choices, fibre and lifestyle tweaks.",
      focus: [
        "Improve HDL, lower LDL & triglycerides",
        "Smart oil, ghee & fat choices",
        "Support for long-term heart health",
      ],
    },
    {
      name: "Hypertension (BP)",
      icon: HeartPulse,
      image: "images/conditions/bp.jpg",
      description:
        "Salt-conscious, potassium-rich diets designed to support healthy blood pressure – without bland food.",
      focus: [
        "Reduce excess salt & hidden sodium",
        "Support vascular & heart health",
        "Stress, sleep & lifestyle alignment",
      ],
    },
    {
      name: "PCOD / PCOS & Hormonal Balance",
      icon: VenetianMask,
      image: "images/conditions/pcod.jpg",
      description:
        "Hormone-supportive nutrition to improve periods, energy, skin, weight and mood, step by step.",
      focus: [
        "Cycle-friendly eating patterns",
        "Thyroid & insulin support through diet",
        "Reducing bloating, acne & fatigue",
      ],
    },
    {
      name: "Fatty Liver",
      icon: Recycle,
      image: "images/conditions/fatty_liver.jpg",
      description:
        "Liver-friendly diet that supports gradual fat reduction in the liver with realistic food choices.",
      focus: [
        "Reduce sugar & refined carbs safely",
        "Balanced protein for liver repair",
        "Support for metabolic health & weight",
      ],
    },
    {
      name: "High Uric Acid",
      icon: Bone,
      image: "images/conditions/uric_acid.jpg",
      description:
        "Joint-friendly, uric-acid conscious plans that reduce flare-ups without making food very boring.",
      focus: [
        "Limit high-purine foods sensibly",
        "Hydration & kidney-supportive habits",
        "Reduce pain, swelling & stiffness risk",
      ],
    },
    {
      name: "Irregular Periods",
      icon: Activity,
      image: "images/conditions/period.jpg",
      description:
        "Nutrition plus lifestyle guidance to help regulate cycles, manage mood swings and period discomfort.",
      focus: [
        "Cycle-supportive nutrients & timing",
        "Iron, B12 & vitamin D focus",
        "Cramp, mood & bloating management",
      ],
    },
    {
      name: "Gut Issues / IBS",
      icon: Apple,
      image: "images/conditions/gut.jpg",
      description:
        "Gut-calming plans that reduce bloating, acidity and irregular motions with simple food swaps.",
      focus: [
        "Identify personal trigger foods",
        "Gradual fibre & probiotic support",
        "Acidity, gas & bloating relief",
      ],
    },
    {
      name: "Overweight / Obesity",
      icon: Weight,
      image: "images/conditions/overweight.jpg",
      description:
        "Sustainable weight loss through realistic Indian meals – no crash diets or starvation plans.",
      focus: [
        "Fat loss, not just weight loss",
        "Portion control that fits your life",
        "Consistency over perfection",
      ],
    },
  ];

  return (
    <section
      id="conditions"
      className="relative overflow-hidden bg-gradient-to-b from-green-50/40 via-slate-50 to-white scroll-mt-28 md:scroll-mt-36"
    >
      {/* Soft pattern overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(circle_at_top,_white,_transparent)]">
        <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute top-32 right-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-green-100/40 blur-3xl" />
      </div>

      {/* Floating blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
        className="pointer-events-none absolute -top-10 -left-16 w-64 h-64 rounded-full bg-green-300/25 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 0.2,
        }}
        className="pointer-events-none absolute -bottom-16 -right-20 w-72 h-72 rounded-full bg-green-200/20 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white/70 px-3 py-1 text-xs font-medium text-green-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Conditions I commonly work with
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-700 to-green-500">
            Conditions I Help Manage
          </h2>

          <p className="mt-2 text-slate-600 text-sm md:text-base">
            Evidence-based, nutrition-first guidance — no crash diets, no
            extreme restrictions. Just balanced plans, habit-building and
            long-term results.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06 },
            },
          }}
          className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm"
        >
          {CONDITIONS.map(({ name, icon: Icon, image, description, focus }) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.97 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 22 },
                },
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-2xl bg-white/80 backdrop-blur border border-green-50/80 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Soft glow bottom highlight */}
              <div
                className="absolute bottom-0 left-0 right-0 h-3 rounded-b-2xl
            bg-gradient-to-r from-green-200/40 via-green-100/40 to-green-200/40 blur-md"
              />

              {/* BIG Image */}
              <div className="relative z-0 h-40 sm:h-44 md:h-48 w-full">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 via-green-100 to-green-50 ring-1 ring-green-100 shadow-sm">
                      <Icon className="h-5 w-5 text-green-600" />
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 leading-snug">
                      {name}
                    </h3>
                    <p className="mt-1 text-slate-500 text-xs leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                <ul className="mt-2 space-y-1.5 text-[11px] text-slate-500">
                  {focus.map((item) => (
                    <li key={item} className="flex gap-1.5">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col gap-4 rounded-2xl border border-green-100 bg-green-50/60 px-5 py-4 md:px-6 md:py-5 shadow-sm md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-sm md:text-base font-medium text-green-900">
              Not sure which condition you fall under?
            </p>
            <p className="text-xs md:text-sm text-green-800/90 mt-0.5">
              Share your reports and lifestyle, and I’ll suggest the right
              nutrition approach for you.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition"
          >
            Book an Online Consult
            <span aria-hidden>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ConditionsSection;
