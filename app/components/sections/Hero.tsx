// // components/sections/Hero.tsx
// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { CheckCircle2, Leaf } from "lucide-react";
// import { scrollToId } from "../../lib/scroll";
// import Image from "next/image";

// export function HeroSection() {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden scroll-mt-28 md:scroll-mt-36"
//       ref={heroRef}
//     >
//       {/* Layers: gradient + leaf accent */}
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 pointer-events-none"
//       >
//         <div className="absolute inset-0 opacity-70 bg-[radial-gradient(60rem_30rem_at_10%_-10%,#bbf7d0,transparent),radial-gradient(40rem_30rem_at_110%_-20%,#a7f3d0,transparent)]" />
//       </motion.div>

//       <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide bg-white/70 backdrop-blur shadow-sm">
//             <Leaf size={14} className="text-emerald-700" /> Dt. Preeti Chauhan •
//             Clinical Nutritionist
//           </p>

//           <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
//             Transforming health the simple way —
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
//               {" "}
//               no fancy diets
//             </span>
//             , just real results.
//           </h1>

//           <p className="mt-4 text-slate-600 max-w-prose">
//             10+ yrs exp • Sir Ganga Ram • Fortis • VLCC • Fitelo
//           </p>

//           <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
//             {[
//               "Healthy weight & inch loss",
//               "Knee pain relief & immunity boost",
//               "Hormonal balance & PCOD care",
//               "Increase chances of conceiving",
//               "Gut health • Diabetes • Cholesterol • BP",
//             ].map((item) => (
//               <li key={item} className="flex items-start gap-2">
//                 <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           {/* ✅ CTAs (clickable now) */}
//           <div className="mt-8 flex flex-col sm:flex-row gap-3">
//             <button
//               type="button"
//               onClick={() => scrollToId("contact")}
//               className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium shadow hover:opacity-95 relative z-10"
//             >
//               Book Free Consultation
//             </button>

//             <button
//               type="button"
//               onClick={() => scrollToId("programs")}
//               className="px-5 py-3 rounded-xl border font-medium hover:bg-slate-50 relative z-10"
//             >
//               Explore Programs
//             </button>
//           </div>

//           <p className="mt-3 text-xs text-slate-500">
//             Refer friends & earn cash rewards.
//           </p>
//         </motion.div>

//         {/* Doctor image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.97 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative grid w-full place-items-center rounded-3xl border bg-white/70 p-4 shadow-lg backdrop-blur"
//           style={{ minHeight: "400px" }}
//         >
//           {/* Soft glow accents (already safe because pointer-events-none is applied) */}
//           <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-emerald-200/60 blur-2xl" />
//           <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-teal-200/60 blur-2xl" />

//           <div className="relative w-full h-80 md:h-[28rem]">
//             <Image
//               src="/images/profile2.jpeg"
//               alt="Dt. Preeti Chauhan - Clinical Nutritionist"
//               fill
//               className="object-fit rounded-3xl"
//               priority
//             />
//           </div>

//           <p className="mt-4 text-sm text-slate-500">(Dt. Preeti Chauhan)</p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// components/sections/Hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Leaf } from "lucide-react";
import { scrollToId } from "../../lib/scroll";
import Image from "next/image";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-28 md:scroll-mt-36"
      ref={heroRef}
    >
      {/* Layers: gradient + leaf accent */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(60rem_30rem_at_10%_-10%,#dcfce7,transparent),radial-gradient(40rem_30rem_at_110%_-20%,#bbf7d0,transparent)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide bg-white/70 backdrop-blur shadow-sm">
            <Leaf size={14} className="text-green-700" /> Dt. Preeti Chauhan •
            Clinical Nutritionist
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Transforming health the simple way —
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600">
              {" "}
              no fancy diets
            </span>
            , just real results.
          </h1>

          <p className="mt-4 text-slate-600 max-w-prose">
            10+ yrs exp • Sir Ganga Ram • Fortis • VLCC • Fitelo
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              "Healthy weight & inch loss",
              "Knee pain relief & immunity boost",
              "Hormonal balance & PCOD care",
              "Increase chances of conceiving",
              "Gut health • Diabetes • Cholesterol • BP",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="text-green-600 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-green-700 to-green-600 text-white font-medium shadow hover:opacity-95 relative z-10"
            >
              Book Free Consultation
            </button>

            <button
              type="button"
              onClick={() => scrollToId("programs")}
              className="px-5 py-3 rounded-xl border font-medium hover:bg-slate-50 relative z-10"
            >
              Explore Programs
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Refer friends & earn cash rewards.
          </p>
        </motion.div>

        {/* Doctor image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative grid w-full place-items-center rounded-3xl border bg-white/70 p-4 shadow-lg backdrop-blur"
          style={{ minHeight: "400px" }}
        >
          {/* Soft glow accents */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-green-200/60 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-100/60 blur-2xl" />

          <div className="relative w-full h-80 md:h-[28rem]">
            <Image
              src="/images/profile2.jpeg"
              alt="Dt. Preeti Chauhan - Clinical Nutritionist"
              fill
              className="object-fit rounded-3xl"
              priority
            />
          </div>

          <p className="mt-4 text-sm text-slate-500">(Dt. Preeti Chauhan)</p>
        </motion.div>
      </div>
    </section>
  );
}
