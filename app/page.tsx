"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Leaf,
  Star,
  Menu,
  X,
  HeartPulse,
  Activity,
  Apple,
  Flame,
  Droplet,
  Recycle,
  Bone,
  Weight,
  VenetianMask,
  CheckCircle,
  PhoneCall,
  Calendar,
  Repeat,
  UserCheck,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";

// NutritionBitesByPreeti — One‑Page Site (Enhanced UI)
// - Polished hero with layered gradients + subtle grid pattern
// - Gradient brand badge + pill buttons
// - Fancy gradient borders on cards (via before/after)
// - Glass morph sections & soft shadows
// - Animated counters, reveal animations, testimonials slider
// - Mobile sticky CTA bar, footer wave

// Util: smooth scroll
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.getElementById("site-header");
  const topbar = document.getElementById("topbar");
  const offset = (header?.offsetHeight || 0) + (topbar?.offsetHeight || 0) + 8;
  const targetY = Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - offset
  );
  window.scrollTo({ top: targetY, behavior: "smooth" });
}
// testimonialData.js
export const testimonials = [
  {
    name: "Ritika Sharma",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "I lost 6 kg in 7 weeks without starving. Preeti ma’am’s meal plans are realistic and easy to follow. My energy levels have doubled!",
    goal: "Weight Loss",
  },
  {
    name: "Neha Verma",
    photo:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "My PCOD symptoms reduced drastically in just 2 months. Periods became regular and bloating disappeared. I finally feel normal again.",
    goal: "PCOD Support",
  },
  {
    name: "Aditi Singh",
    photo:
      "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "I struggled with gut issues for years. Preeti’s guidance fixed my acidity, constipation and sleep cycle within weeks. Game changer.",
    goal: "Gut Health",
  },

  // ⭐ MALE CLIENTS
  {
    name: "Arun Mehta",
    photo:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "Being diabetic for years, I never imagined my sugar levels could improve this much. Her personalized diet completely changed my lifestyle.",
    goal: "Metabolic Health",
  },
  {
    name: "Sandeep Kumar",
    photo:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "I had severe knee pain and weight issues. After following her anti-inflammatory plan, my mobility improved and I lost 4 inches in 6 weeks.",
    goal: "Joint & Knee Pain",
  },
];

const CONDITIONS = [
  { name: "Diabetes (Type 2)", icon: Droplet },
  { name: "High Cholesterol", icon: Flame },
  { name: "Hypertension (BP)", icon: HeartPulse },
  { name: "PCOD / PCOS", icon: VenetianMask }, // UPDATED
  { name: "Fatty Liver", icon: Recycle },
  { name: "High Uric Acid", icon: Bone },
  { name: "Irregular Periods", icon: Activity },
  { name: "Gut Issues / IBS", icon: Apple },
  { name: "Overweight / Obesity", icon: Weight },
];
const faqs = [
  {
    q: "Do I need special foods?",
    a: "No. We use simple home-cooked meals and locally available ingredients tailored to your tastes and budget.",
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
    a: "Both options are available: remote via phone/WhatsApp and in-clinic consultations when needed.",
  },
];

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

function CountTo({ end, label }: { end: number; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
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
      className="rounded-2xl p-5 text-center shadow-sm bg-white/70 backdrop-blur border relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-60 [mask-image:radial-gradient(transparent,black)] bg-[radial-gradient(30rem_30rem_at_-10%_-10%,#a7f3d0,transparent),radial-gradient(20rem_20rem_at_120%_-10%,#bbf7d0,transparent)]" />
      <p className="relative text-3xl font-bold text-emerald-700">{val}+</p>
      <p className="relative text-xs text-slate-600">{label}</p>
    </div>
  );
}
function TestimonialSlider() {
  const items = [
    {
      q: "Lost 7 kg in 10 weeks without cutting my favourite foods.",
      a: "A., Delhi",
    },
    { q: "PCOD cycles became regular in 3 months.", a: "R., Gurgaon" },
    {
      q: "Acidity gone, sleep improved, and I feel energetic!",
      a: "S., Noida",
    },
  ];

  return (
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white border border-emerald-100 shadow p-6 hover:shadow-lg transition"
        >
          {/* ⭐ Rating Row */}
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} className="h-5 w-5 text-amber-400 fill-amber-400" />
            ))}
          </div>

          <p className="text-slate-800 leading-snug font-medium">“{t.q}”</p>

          <p className="mt-4 text-sm text-emerald-700 font-semibold">— {t.a}</p>
        </div>
      ))}
    </div>
  );
}

// function TestimonialSlider() {
//   const items = [
//     {
//       q: "Lost 7 kg in 10 weeks without cutting my favourite foods.",
//       a: "A., Delhi",
//     },
//     { q: "PCOD cycles became regular in 3 months.", a: "R., Gurgaon" },
//     {
//       q: "Acidity gone, sleep improved, and I feel energetic!",
//       a: "S., Noida",
//     },
//   ];
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => setI((p) => (p + 1) % items.length), 3500);
//     return () => clearInterval(id);
//   }, [items.length]);
//   return (
//     <div className="grid md:grid-cols-3 gap-6">
//       {items.map((it, idx) => (
//         <motion.div
//           key={idx}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: i === idx ? 1 : 0.5, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="rounded-2xl bg-white/80 backdrop-blur border p-6 shadow-md relative overflow-hidden"
//         >
//           <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-emerald-200/50 blur-2xl" />
//           <div className="flex items-center gap-2 text-emerald-600">
//             <Star size={16} /> <Star size={16} /> <Star size={16} />{" "}
//             <Star size={16} /> <Star size={16} />
//           </div>
//           <p className="mt-3 text-sm">“{it.q}”</p>
//           <p className="mt-3 text-xs text-slate-500">— {it.a}</p>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
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
  const faqs = [
    {
      q: "Do I need special foods?",
      a: "No. We use simple home-cooked meals and locally available ingredients tailored to your tastes and budget.",
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
      a: "Both options are available: remote via phone/WhatsApp and in-clinic consultations when needed.",
    },
  ];
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((cur) => (cur === i ? null : i));
  // Parallax hero
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Subtle background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:22px_22px]" />

      {/* Top Bar */}
      <div
        id="topbar"
        className="w-full bg-gradient-to-r from-emerald-700 to-teal-600 text-white text-sm"
      >
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="font-medium flex items-center gap-2">
            <Sparkles size={16} /> Free 15‑min consultation • Mon–Sat
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

      {/* Header */}
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

            <span className="font-semibold text-lg">
              NutritionBitesByPreeti
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {sections.slice(1).map((id) => (
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
              {sections.slice(1).map((id) => (
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

      {/* Hero */}
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
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(60rem_30rem_at_10%_-10%,#bbf7d0,transparent),radial-gradient(40rem_30rem_at_110%_-20%,#a7f3d0,transparent)]" />
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide bg-white/70 backdrop-blur shadow-sm">
              <Leaf size={14} className="text-emerald-700" /> Dt. Preeti Chauhan
              • Clinical Nutritionist
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Transforming health the simple way —
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
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
                  <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ✅ CTAs (clickable now) */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium shadow hover:opacity-95 relative z-10"
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
            {/* Soft glow accents (already safe because pointer-events-none is applied) */}
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-emerald-200/60 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-teal-200/60 blur-2xl" />

            <div className="relative w-full h-80 md:h-[28rem]">
              <Image
                src="/images/preeti_profile_pic.jpeg"
                alt="Dt. Preeti Chauhan - Clinical Nutritionist"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>

            <p className="mt-4 text-sm text-slate-500">(Dt. Preeti Chauhan)</p>
          </motion.div>
        </div>
      </section>

      {/* About + Counters */}
      <section
        id="about"
        className="scroll-mt-28 md:scroll-mt-36 border-y bg-white/70 backdrop-blur"
      >
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-4 text-center">
          <CountTo end={10} label="Years Clinical Experience" />
          <CountTo end={500} label="Clients Helped" />
          <CountTo end={12} label="Conditions Covered" />
          <CountTo end={100} label="% Home‑cooked Meals" />
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border p-8 bg-white/90 backdrop-blur shadow"
          >
            <h2 className="text-3xl font-bold text-emerald-800">
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
              She holds an <strong>M.Sc. in Food Science and Safety</strong>{" "}
              from Allahabad University and has worked with hundreds of clients
              to reverse metabolic issues like diabetes, thyroid, and fatty
              liver. Fluent in English and Hindi, Dt. Preeti believes that
              nutrition is not about restriction — it’s about balance,
              awareness, and consistency.
            </p>

            <p className="mt-4 text-slate-700 italic">
              “Small, consistent choices create big health changes — one meal at
              a time.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs with gradient borders */}
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

      {/* Conditions */}

      <section
        id="conditions"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white scroll-mt-28 md:scroll-mt-36"
      >
        {/* Decorative floating blobs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
          className="pointer-events-none absolute -top-10 -left-16 w-72 h-72 rounded-full bg-emerald-200/40 blur-3xl"
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
          className="pointer-events-none absolute -bottom-12 -right-24 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl"
        />

        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-600"
          >
            Conditions I Help Manage
          </motion.h2>

          <p className="mt-2 text-slate-600 max-w-xl">
            Nutrition-first strategies — no extreme diets, no expensive foods.
            Just balance, habit-building and long-term results.
          </p>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06 },
              },
            }}
            className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm"
          >
            {CONDITIONS.map(({ name, icon: Icon }, idx) => (
              <motion.div
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 16, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 240, damping: 20 },
                  },
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-xl bg-white/90 border border-slate-100 p-5 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 ring-1 ring-emerald-50">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{name}</h3>
                    <p className="mt-1 text-slate-500 text-xs">
                      Sustainable nutrition + lifestyle changes tailored for
                      you.
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-0.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: "25%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-slate-600">
              Want a personalised diet plan? I offer goal-based coaching with
              regular check-ins.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-5 py-2 font-medium shadow hover:scale-105 transition"
            >
              Book a Consult
            </a>
          </motion.div>
        </div>
      </section>

      {/* Approach */}

      <section
        id="approach"
        className="relative max-w-6xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-36"
      >
        {/* Subtle background gradient + decorative SVG */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-10 -left-20 w-80 h-80 rounded-full bg-emerald-200/20 blur-3xl transform -rotate-12" />
          <svg
            className="absolute right-0 bottom-0 -z-20"
            width="420"
            height="420"
            viewBox="0 0 420 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#10B981" stopOpacity="0.06" />
                <stop offset="1" stopColor="#06B6D4" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="0"
              width="420"
              height="420"
              rx="100"
              fill="url(#g1)"
            />
          </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT: Feature card - hero */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl bg-gradient-to-br from-white/80 to-emerald-50/60 p-8 shadow-lg border border-slate-100"
          >
            {/* top badge */}
            <div className="inline-flex items-center gap-3 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
              <UserCheck className="h-4 w-4" />
              Personalized Coaching
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Simple. Personal. Sustainable.
            </h2>

            <p className="mt-3 text-slate-600 max-w-lg">
              Plans built around your home-cooked meals, schedule and culture.
              Friendly follow-ups, habit coaching and practical tips that
              actually fit your life.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Detailed lifestyle assessment & personalised plan",
                "Budget-friendly, locally available ingredients",
                "Weekly call / WhatsApp check-ins",
                "Mindful eating & portion guidance",
              ].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </span>
                  <span className="text-sm text-slate-700">{t}</span>
                </motion.div>
              ))}
            </div>

            {/* trust row */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-emerald-50 p-2 ring-1 ring-emerald-100">
                  <Star className="h-4 w-4 text-amber-500" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-slate-800">4.9 / 5</div>
                  <div className="text-xs text-slate-500">
                    Client satisfaction
                  </div>
                </div>
              </div>

              <div className="h-10 w-px bg-slate-100" />

              <div className="text-sm text-slate-600">
                <div className="font-medium">Free 15-minute consult</div>
                <div className="text-xs">
                  Zero obligation · actionable step today
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Timeline + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl border p-6 bg-white shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">How the program works</h3>
                <div className="text-sm text-slate-500">
                  Simple 4-step journey
                </div>
              </div>

              {/* timeline */}
              <div className="mt-6 grid gap-6">
                {/* vertical line */}
                <div className="relative pl-8">
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-100" />
                  {/* Step 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.04 }}
                    className="relative"
                  >
                    <div className="absolute -left-7 top-0 bg-white rounded-full p-1 ring-1 ring-emerald-100">
                      <Calendar className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="bg-emerald-50/40 rounded-lg p-3">
                      <div className="font-medium text-slate-800">
                        1) Free Consult
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        Understand goals & health history — 15 mins
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative mt-4"
                  >
                    <div className="absolute -left-7 top-0 bg-white rounded-full p-1 ring-1 ring-emerald-100">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="rounded-lg bg-white p-3 shadow-sm border">
                      <div className="font-medium text-slate-800">
                        2) Starter Plan
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        A simple 7-day plan you can follow today
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.16 }}
                    className="relative mt-4"
                  >
                    <div className="absolute -left-7 top-0 bg-white rounded-full p-1 ring-1 ring-emerald-100">
                      <Repeat className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="rounded-lg bg-white p-3 shadow-sm border">
                      <div className="font-medium text-slate-800">
                        3) Adjust & Optimize
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        Weekly reviews, tweak habits for lasting change
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 4 */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.22 }}
                    className="relative mt-4"
                  >
                    <div className="absolute -left-7 top-0 bg-white rounded-full p-1 ring-1 ring-emerald-100">
                      <PhoneCall className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="rounded-lg bg-emerald-50 p-3 border border-emerald-100">
                      <div className="font-medium text-slate-800">
                        4) Sustain
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        Maintenance plan & monthly check-ins
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* CTA area */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-700 font-medium">
                    Ready to get started?
                  </div>
                  <div className="text-xs text-slate-500">
                    Free 15-minute consult — actionable next step.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#contact"
                    className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r 
               from-emerald-600 to-teal-500 text-white px-3 py-1.5 
               text-sm font-medium shadow-md transition hover:scale-105"
                    aria-label="Book free consult"
                  >
                    {/* subtle pulsing ring */}
                    <motion.span
                      aria-hidden
                      className="absolute -inset-0.5 rounded-full"
                      animate={{
                        boxShadow: [
                          "0 0 0 4px rgba(16,185,129,0.12)",
                          "0 0 0 8px rgba(16,185,129,0.03)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                      style={{ zIndex: 0 }}
                    />

                    <PhoneCall className="h-3.5 w-3.5 z-10" />
                    <span className="z-10">Book Free Call</span>
                  </a>

                  <a
                    href="#testimonials"
                    className="text-sm text-emerald-600 underline underline-offset-2"
                  >
                    See success stories
                  </a>
                </div>
              </div>
            </div>

            {/* small footer trust */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 flex items-center gap-3 text-xs text-slate-500"
            >
              <span className="px-2 py-1 rounded-md bg-emerald-50 ring-1 ring-emerald-100">
                Verified Coach
              </span>
              <span>•</span>
              <span>1000+ hours coaching</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section
        id="results"
        className="relative bg-gradient-to-b from-emerald-50/80 to-white border-y py-16 scroll-mt-28 md:scroll-mt-36"
      >
        {/* Soft floating background glow */}
        <div className="pointer-events-none absolute -top-12 left-0 w-72 h-72 bg-emerald-200/30 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 bg-teal-200/20 blur-3xl rounded-full" />

        {/* AUTO SCROLL WRAPPER */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 py-6 animate-[scrollX_25s_linear_infinite]"
            style={{ width: "200%" }} // because we duplicate items
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[260px] md:min-w-[330px] snap-center rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-400/40"
                  />

                  <div>
                    <h4 className="font-semibold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-emerald-600 font-medium">
                      {t.goal}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  “{t.comment}”
                </p>

                <div className="mt-4 flex items-center gap-1 text-amber-400">
                  ★★★★★
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section
        id="faq"
        className="relative max-w-6xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-36"
      >
        <div className="pointer-events-none absolute -top-16 -left-20 w-72 h-72 bg-emerald-200/25 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 bg-teal-200/20 blur-3xl rounded-full" />

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            FAQs
          </h2>
          <p className="mt-2 text-slate-600">
            Still unsure? These quick answers help you understand the approach.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
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
                {/* HEADER (no separate bg) */}
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-emerald-600" />
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

                {/* CONTENT (same card, subtle divider) */}
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
                            className="inline-block rounded-full bg-emerald-600 text-white text-xs font-medium px-4 py-1.5 shadow hover:scale-[1.03] transition"
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
      {/* Contact */}

      <section
        id="contact"
        className="relative bg-gradient-to-b from-slate-50 to-white border-t scroll-mt-28 md:scroll-mt-36"
      >
        {/* decorative background glows */}
        <div className="pointer-events-none absolute -top-20 left-0 w-80 h-80 bg-emerald-300/20 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute -bottom-20 right-0 w-80 h-80 bg-teal-300/20 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start relative z-10">
          {/* LEFT SECTION */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Book your free 15-minute call
            </h2>

            <p className="mt-3 text-slate-600 max-w-md">
              Let’s rebuild your confidence, health & happiness — one meal at a
              time. Quick chat. No pressure. Real guidance.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                  <Phone className="text-emerald-600" size={18} />
                </div>
                <a
                  href="tel:+919625310091"
                  className="underline decoration-emerald-400 group-hover:text-emerald-700 transition font-medium"
                >
                  +91 96253 10091
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                  <Mail className="text-emerald-600" size={18} />
                </div>
                <a
                  href="mailto:support@nutrition-bites-by-preeti.com"
                  className="underline decoration-emerald-400 group-hover:text-emerald-700 transition font-medium"
                >
                  support@nutrition-bites-by-preeti.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                  <MessageCircle className="text-emerald-600" size={18} />
                </div>
                <a
                  href="https://wa.me/919625310091?text=Hi%20I%20want%20a%20consultation"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-emerald-400 group-hover:text-emerald-700 transition font-medium"
                >
                  WhatsApp chat
                </a>
              </div>
            </div>

            {/* reassurance text */}
            <div className="mt-8 text-xs text-slate-500 flex items-center gap-2">
              <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
              100% private & secure consultation
            </div>
          </div>

          {/* RIGHT SECTION — BEAUTIFIED FORM */}
          <form className="rounded-3xl border bg-white/80 backdrop-blur-xl p-8 grid gap-5 shadow-xl">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
      focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
        focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                  placeholder="Mobile number"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
        focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                  placeholder="Email (optional)"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Goal</label>
              <select
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
      focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
              >
                <option>Weight loss</option>
                <option>PCOD support</option>
                <option>Pre-conception</option>
                <option>Diabetes/BP</option>
                <option>Gut issues</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 
      focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                rows={4}
                placeholder="Tell us about your goals..."
              />
            </div>

            <button
              type="button"
              className="relative rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 
    text-white px-4 py-3 font-semibold shadow-lg hover:shadow-xl 
    hover:scale-[1.02] transition-transform"
            >
              Send Request
              <span className="absolute inset-0 rounded-xl ring-2 ring-emerald-600/20 animate-pulse"></span>
            </button>

            <p className="text-xs text-slate-500 text-center">
              By submitting, you agree to be contacted via WhatsApp/call.
            </p>
          </form>
        </div>

        {/* decorative wave */}
        <svg
          className="absolute -bottom-1 left-0 w-full"
          viewBox="0 0 1440 40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path fill="#ffffff" d="M0,32L1440,0L1440,40L0,40Z" />
        </svg>
      </section>

      {/* Footer */}

      <footer className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-16 grid md:grid-cols-4 gap-10 text-sm">
          {/* Brand / Intro */}
          <div className="space-y-3">
            <p className="font-bold text-lg text-emerald-300">
              NutritionBitesByPreeti
            </p>
            <p className="text-slate-100 leading-relaxed">
              NutritionBitesByPreeti is a trusted clinical nutrition consultancy
              offering personalized diet guidance for weight management,
              hormonal balance, PCOD care, and holistic wellness — helping you
              achieve real results with simple nutrition.
            </p>
            <p className="text-emerald-200 font-semibold mt-3">
              Dt. Preeti Chauhan – Certified Dietitian & Wellness Coach
            </p>
          </div>

          {/* Programs / Quick Links */}
          <div>
            <p className="font-semibold text-emerald-300">Quick Links</p>
            <ul className="mt-2 space-y-1">
              {[
                ["about", "About"],
                ["programs", "Programs"],
                ["conditions", "Conditions"],
                ["approach", "Approach"],
                ["results", "Results"],
                ["faq", "FAQs"],

                ["contact", "Book Free Call"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToId(id)}
                    className="hover:text-emerald-300 text-slate-100 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <p className="font-semibold text-emerald-300">Get in Touch</p>
            <div className="mt-3 space-y-3 text-slate-100">
              <div>
                <p className="font-medium text-emerald-200">Email</p>
                <p>support@nutrition-bites-by-preeti.com</p>
              </div>
              <div>
                <p className="font-medium text-emerald-200">Phone</p>
                <p>+91 96253 10091</p>
              </div>
              <div>
                <p className="font-medium text-emerald-200">Address</p>
                <p>
                  RZ-13/14, Flat No. 304,
                  <br />
                  Matiala Extn, Uttam Nagar,
                  <br />
                  New Delhi – 110059
                </p>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold text-emerald-300">Legal</p>
            <ul className="mt-2 space-y-1 text-slate-100">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700/40 text-center text-xs text-slate-100 py-6 space-y-1">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-emerald-300 font-medium">
              NutritionBitesByPreeti
            </span>
            . All Rights Reserved.
          </p>
          <p className="text-emerald-200">
            Designed & Developed by{" "}
            <a
              href="https://www.nexinora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              NEXinora Technologies
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
