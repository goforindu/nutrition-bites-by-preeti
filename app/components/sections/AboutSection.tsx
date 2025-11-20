import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  function CountTo({ end, label }: { end: number; label: string }) {
    const [val, setVal] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          let frame: number;
          const start = performance.now();
          const animate = (t: number) => {
            const p = Math.min(1, (t - start) / 1200);
            setVal(Math.round(end * p));
            if (p < 1) frame = requestAnimationFrame(animate);
          };
          frame = requestAnimationFrame(animate);
        }
      });

      if (ref.current) io.observe(ref.current);
      return () => io.disconnect();
    }, [end]);

    return (
      <div
        ref={ref}
        className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 relative rounded-2xl p-2 text-center bg-white/10 backdrop-blur-xl border border-white/25 shadow-lg overflow-hidden transition-all duration-300 hover:bg-white/15 hover:shadow-2xl"
      >
        {/* glassy orange glow */}
        <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_top,white,transparent)] " />

        <p className="relative text-4xl font-extrabold bg-gradient-to-r from-orange-100 via-white to-orange-100 bg-clip-text text-transparent drop-shadow-md">
          {val}+
        </p>
        <p className="relative mt-1 text-xs font-medium text-orange-50/90">
          {label}
        </p>
      </div>
    );
  }

  return (
    <section
      id="about"
      className="scroll-mt-28 md:scroll-mt-36 bg-white/70 backdrop-blur"
    >
      {/* 🔥 ORANGE GLASS STRIP */}
      <div className="w-full ">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <CountTo end={10} label="Years Clinical Experience" />
          <CountTo end={500} label="Clients Helped" />
          <CountTo end={12} label="Conditions Covered" />
          <CountTo end={100} label="% Home-cooked Meals" />
        </div>
      </div>

      {/* 🥗 Dietitian About Section */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border p-8 bg-white/90 backdrop-blur shadow"
        >
          <h2 className="text-3xl font-bold text-green-800">
            About Nutrition Bites by Preeti
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            <strong>Dt. Preeti Chauhan</strong> is a{" "}
            <strong>Senior Dietitian and Clinical Nutrition Expert </strong>
            with over <strong>10 years of experience</strong> in renowned
            hospitals and wellness centres including Sir Ganga Ram Hospital,
            Fortis Hospital, VLCC, Aarogya Health Care, and Fitelo Weight
            Management. She specializes in{" "}
            <strong>
              weight management, PCOD nutrition, therapeutic diets, and
              lifestyle coaching
            </strong>
            .
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Her approach combines{" "}
            <strong>medical nutrition therapy (MNT)</strong> with
            <strong> behaviour and lifestyle coaching</strong> to help clients
            achieve lasting results — without crash diets or food deprivation.
            Every plan focuses on balanced, home-cooked, budget-friendly meals
            that fit individual routines and cultures.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            She holds an <strong> M.Sc. Nutritional Sciences</strong> from
            Allahabad University and has worked with hundreds of clients to
            reverse metabolic issues like diabetes, thyroid, and fatty liver.
            Fluent in English and Hindi, Dt. Preeti believes that nutrition is
            not about restriction — it’s about balance, awareness, and
            consistency.
          </p>

          <p className="mt-4 text-slate-700 italic">
            “Small, consistent choices create big health changes — one meal at a
            time.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
