// import React from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import { ChevronDown, HelpCircle } from "lucide-react";
// const FAQSection = () => {
//   const faqs = [
//     {
//       q: "Do I need special foods?",
//       a: "Not at all! Your plan will be based on simple home-cooked meals using locally available, affordable ingredients — customized to your taste, lifestyle, and nutritional needs.",
//     },
//     {
//       q: "Is this a strict diet?",
//       a: "No crash dieting or extreme restrictions. We focus on portioning, habits and gradual, sustainable change.",
//     },
//     {
//       q: "How often are follow-ups?",
//       a: "Typically weekly check-ins (call/WhatsApp). Frequency is customized to your needs and progress.",
//     },
//     {
//       q: "Is this online or in-person?",
//       a: "Online consultations available via phone and WhatsApp. In-clinic consultations will be available soon.",
//     },
//   ];
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const toggle = (i: number) => setOpenIndex((cur) => (cur === i ? null : i));
//   return (
//     <section
//       id="faq"
//       className="relative max-w-6xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-36"
//     >
//       <div className="pointer-events-none absolute -top-16 -left-20 w-72 h-72 bg-emerald-200/25 blur-3xl rounded-full" />
//       <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 bg-teal-200/20 blur-3xl rounded-full" />

//       <div className="text-center max-w-2xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
//           FAQs
//         </h2>
//         <p className="mt-2 text-slate-600">
//           Still unsure? These quick answers help you understand the approach.
//         </p>
//       </div>

//       <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
//         {faqs.map((item, idx) => {
//           const isOpen = openIndex === idx;

//           return (
//             <motion.div
//               key={item.q}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.06 }}
//               className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm self-start overflow-hidden"
//             >
//               {/* HEADER (no separate bg) */}
//               <div
//                 role="button"
//                 tabIndex={0}
//                 aria-expanded={isOpen}
//                 onClick={() => toggle(idx)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     e.preventDefault();
//                     toggle(idx);
//                   }
//                 }}
//                 className="flex items-center gap-4 p-5 cursor-pointer hover:shadow-md transition"
//               >
//                 <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
//                   <HelpCircle className="h-5 w-5 text-emerald-600" />
//                 </div>

//                 <div className="flex-1">
//                   <div className="flex items-start justify-between gap-4">
//                     <p className="font-medium text-slate-900">{item.q}</p>

//                     <motion.span
//                       animate={{ rotate: isOpen ? 180 : 0 }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 400,
//                         damping: 30,
//                       }}
//                       className="text-slate-400 pt-1"
//                     >
//                       <ChevronDown className="h-5 w-5" />
//                     </motion.span>
//                   </div>
//                 </div>
//               </div>

//               {/* CONTENT (same card, subtle divider) */}
//               <AnimatePresence initial={false}>
//                 {isOpen && (
//                   <motion.div
//                     key={`content-${idx}`}
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{
//                       opacity: { duration: 0.15 },
//                       height: { duration: 0.28 },
//                     }}
//                     className="overflow-hidden border-t border-slate-100"
//                   >
//                     <div className="px-5 pb-5 pt-4">
//                       <p className="text-sm text-slate-600">{item.a}</p>

//                       <div className="mt-4">
//                         <a
//                           href="#contact"
//                           className="inline-block rounded-full bg-emerald-600 text-white text-xs font-medium px-4 py-1.5 shadow hover:scale-[1.03] transition"
//                         >
//                           Book a quick call
//                         </a>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      q: "Do I need special foods?",
      a: "Not at all! Your plan will be based on simple home-cooked meals using locally available, affordable ingredients — customized to your taste, lifestyle, and nutritional needs.",
    },
    {
      q: "Is this a strict diet?",
      a: "No crash dieting or extreme restrictions. We focus on portioning, habits and gradual, sustainable change.",
    },
    {
      q: "How often are follow-ups?",
      a: "Typically weekly check-ins (call/WhatsApp). Frequency is customized to your needs and progress.",
    },
    {
      q: "Is this online or in-person?",
      a: "Online consultations available via phone and WhatsApp. In-clinic consultations will be available soon.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section
      id="faq"
      className="relative max-w-6xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-36"
    >
      {/* background glows in green theme */}
      <div className="pointer-events-none absolute -top-16 -left-20 w-72 h-72 bg-green-200/25 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 bg-green-200/20 blur-3xl rounded-full" />

      <div className="text-center max-w-2xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          FAQs
        </h2>
        <p className="mt-2 text-slate-600">
          Still unsure? These quick answers help you understand the approach.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6 items-start relative z-10">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm self-start overflow-hidden"
            >
              {/* HEADER */}
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(idx);
                  }
                }}
                className="flex items-center gap-4 p-5 cursor-pointer hover:shadow-md transition"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 ring-1 ring-green-100 flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-green-600" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-medium text-slate-900">{item.q}</p>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="text-slate-400 pt-1"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`content-${idx}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      opacity: { duration: 0.15 },
                      height: { duration: 0.28 },
                    }}
                    className="overflow-hidden border-t border-slate-100"
                  >
                    <div className="px-5 pb-5 pt-4">
                      <p className="text-sm text-slate-600">{item.a}</p>

                      <div className="mt-4">
                        <a
                          href="#contact"
                          className="inline-block rounded-full bg-green-700 text-white text-xs font-medium px-4 py-1.5 shadow hover:bg-green-800 hover:scale-[1.03] transition"
                        >
                          Book a quick call
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
