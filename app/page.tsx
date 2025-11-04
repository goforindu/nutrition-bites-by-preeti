"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 3500);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((it, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: i === idx ? 1 : 0.5, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white/80 backdrop-blur border p-6 shadow-md relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-emerald-200/50 blur-2xl" />
          <div className="flex items-center gap-2 text-emerald-600">
            <Star size={16} /> <Star size={16} /> <Star size={16} />{" "}
            <Star size={16} /> <Star size={16} />
          </div>
          <p className="mt-3 text-sm">“{it.q}”</p>
          <p className="mt-3 text-xs text-slate-500">— {it.a}</p>
        </motion.div>
      ))}
    </div>
  );
}

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
              <Mail size={14} /> pcnutritionbites@gmail.com
            </a>
            <a
              className="hover:underline inline-flex items-center gap-1"
              href="https://wa.me/919625310091"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </p>
        </div>
      </div>

      {/* Header */}
      <header
        id="site-header"
        className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => {
              scrollToId("home");
              setMenuOpen(false);
            }}
            className="flex items-center gap-3"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white font-bold shadow">
              N
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
        <motion.div style={{ y }} className="absolute inset-0">
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
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToId("contact")}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium shadow hover:opacity-95"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => scrollToId("programs")}
                className="px-5 py-3 rounded-xl border font-medium hover:bg-slate-50"
              >
                Explore Programs
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Refer friends & earn cash rewards.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative grid w-full place-items-center rounded-3xl border bg-white/70 p-4 shadow-lg backdrop-blur"
            style={{ minHeight: "400px" }} // ensures no cropping even on mobile
          >
            {/* Soft glow accents */}
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-emerald-200/60 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-teal-200/60 blur-2xl" />

            {/* Doctor image */}
            <div className="relative w-full h-80 md:h-[28rem]">
              <Image
                src="/images/preeti_profile_pic.jpeg" // 🩺 place your image in public/doctor-preeti.png
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
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border p-8 bg-white/90 backdrop-blur shadow"
          >
            <h2 className="text-3xl font-bold">About NutritionBitesByPreeti</h2>
            <p className="mt-3 text-slate-600">
              Dt. Preeti Chauhan is a Clinical Nutritionist with over 10 years
              of experience (Sir Ganga Ram, Fortis, VLCC, Fitelo). She helps you
              achieve sustainable results with simple, budget‑friendly,
              home‑cooked meals — no fads, no extreme diets.
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
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Weight Loss & Inch Loss",
              points: [
                "Custom meal plans",
                "Weekly reviews",
                "Plate‑planning & eating out tips",
              ],
            },
            {
              title: "PCOD / Hormonal Balance",
              points: [
                "Cycle‑friendly nutrition",
                "Anti‑inflammatory meals",
                "Stress & sleep coaching",
              ],
            },
            {
              title: "Pre‑Conception Nutrition",
              points: [
                "Fertility‑supportive diet",
                "Micronutrient focus",
                "Couple guidance available",
              ],
            },
            {
              title: "Metabolic Health",
              points: [
                "Diabetes & BP",
                "Cholesterol control",
                "Fatty liver reversal",
              ],
            },
            {
              title: "Gut & Immunity",
              points: [
                "IBS / bloating support",
                "Probiotic foods",
                "Immunity routines",
              ],
            },
            {
              title: "Joint & Knee Pain",
              points: [
                "Anti‑inflammatory diet",
                "Weight support",
                "Daily movement goals",
              ],
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: idx * 0.05 }}
              className="relative rounded-2xl p-0.5 bg-gradient-to-br from-emerald-300 to-teal-200"
            >
              <div className="rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircle2 className="text-emerald-600" size={16} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conditions */}
      <section
        id="conditions"
        className="bg-gradient-to-b from-slate-50 to-white scroll-mt-28 md:scroll-mt-36"
      >
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            Conditions I Help Manage
          </motion.h2>
          <p className="mt-2 text-slate-600">
            Nutrition‑first strategies — no extreme diets, no expensive foods.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              "Diabetes (Type 2)",
              "High Cholesterol",
              "Hypertension (BP)",
              "PCOD / PCOS",
              "Fatty Liver",
              "High Uric Acid",
              "Irregular Periods",
              "Gut Issues / IBS",
              "Overweight / Obesity",
            ].map((c, idx) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="rounded-xl bg-white border p-4 shadow-sm"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="max-w-6xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-36"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              Simple. Personal. Sustainable.
            </h2>
            <p className="mt-3 text-slate-600">
              We build your plan around home‑cooked meals, your schedule and
              your culture. You’ll get friendly follow‑ups, habit coaching and
              practical tips that fit your life.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Personalized plan after a detailed lifestyle assessment",
                "Budget‑friendly ingredients easily available nearby",
                "Weekly check‑ins over call/WhatsApp",
                "Mindful eating & portion guidance",
                "Clear do’s and don’ts for eating out & travel",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <CheckCircle2 className="text-emerald-600" size={16} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border p-6 bg-white shadow"
          >
            <h3 className="text-lg font-semibold">How the program works</h3>
            <ol className="mt-4 space-y-3 text-sm">
              <li>
                <span className="font-medium">1) Free Consult:</span> understand
                your goals & health history.
              </li>
              <li>
                <span className="font-medium">2) Starter Plan:</span> simple
                7‑day plan to kickstart progress.
              </li>
              <li>
                <span className="font-medium">3) Adjust & Optimize:</span>{" "}
                weekly reviews, habit tweaks.
              </li>
              <li>
                <span className="font-medium">4) Sustain:</span> maintenance
                plan for long‑term results.
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section
        id="results"
        className="bg-emerald-50/60 border-y scroll-mt-28 md:scroll-mt-36"
      >
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold">Real People. Real Results.</h2>
          <p className="mt-2 text-slate-700">
            Add real client stories and before/after once available.
          </p>
          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="max-w-6xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-36"
      >
        <h2 className="text-3xl font-bold">FAQs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            [
              "Do I need special foods?",
              "No. We use simple home‑cooked meals and locally available ingredients.",
            ],
            [
              "Is this a strict diet?",
              "No crash dieting or extreme restrictions. We focus on portioning and habits.",
            ],
            [
              "How often are follow‑ups?",
              "Typically weekly check‑ins; we adjust based on your progress.",
            ],
            [
              "Is this online or in‑person?",
              "Both options are available via phone/WhatsApp and clinic visits.",
            ],
          ].map(([q, a], idx) => (
            <motion.div
              key={q as string}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border p-6 bg-white/90 backdrop-blur shadow"
            >
              <p className="font-medium">{q}</p>
              <p className="mt-2 text-sm text-slate-600">{a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative bg-gradient-to-b from-slate-50 to-white border-t scroll-mt-28 md:scroll-mt-36"
      >
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Book your free 15‑min call</h2>
            <p className="mt-2 text-slate-600">
              Let’s rebuild your confidence, health & happiness — one meal at a
              time!
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />{" "}
                <a className="underline" href="tel:+919625310091">
                  +91 96253 10091
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />{" "}
                <a
                  className="underline"
                  href="mailto:pcnutritionbites@gmail.com"
                >
                  pcnutritionbites@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} />{" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/919625310091?text=Hi%20I%20want%20a%20consultation"
                >
                  WhatsApp chat
                </a>
              </li>
            </ul>
          </div>
          {/* Static form (integrate later) */}
          <form className="rounded-3xl border bg-white p-6 grid gap-4 shadow-lg">
            <div>
              <label className="text-sm">Name</label>
              <input
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="Your name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Phone</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="Mobile number"
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="Email (optional)"
                />
              </div>
            </div>
            <div>
              <label className="text-sm">Goal</label>
              <select className="mt-1 w-full rounded-xl border px-3 py-2">
                <option>Weight loss</option>
                <option>PCOD support</option>
                <option>Pre‑conception</option>
                <option>Diabetes/BP</option>
                <option>Gut issues</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                className="mt-1 w-full rounded-xl border px-3 py-2"
                rows={4}
                placeholder="Tell us about your goals..."
              />
            </div>
            <button
              className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 font-medium hover:opacity-95"
              type="button"
            >
              Send Request
            </button>
            <p className="text-xs text-slate-500">
              By submitting, you agree to be contacted via WhatsApp/call.
            </p>
          </form>
        </div>
        {/* Decorative footer wave top */}
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
      <footer className="relative">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-semibold">NutritionBitesByPreeti</p>
            <p className="mt-2 text-slate-600">
              Simple nutrition for real results.
            </p>
          </div>
          <div>
            <p className="font-semibold">Quick Links</p>
            <ul className="mt-2 space-y-1">
              <li>
                <button
                  onClick={() => scrollToId("programs")}
                  className="hover:underline"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("conditions")}
                  className="hover:underline"
                >
                  Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("faq")}
                  className="hover:underline"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-2 space-y-1">
              <li>📞 +91 96253 10091</li>
              <li>✉️ pcnutritionbites@gmail.com</li>
              <li>Delhi, India</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-8">
          © {new Date().getFullYear()} NutritionBitesByPreeti. All rights
          reserved.
        </div>
      </footer>

      {/* Mobile sticky CTA bar */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 grid grid-cols-2 gap-3">
        <a
          href="https://wa.me/919625310091?text=Hi%20I%20want%20a%20consultation"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 text-center shadow"
        >
          WhatsApp
        </a>
        <button
          onClick={() => scrollToId("contact")}
          className="rounded-full bg-white border py-3 text-center shadow"
        >
          Book Call
        </button>
      </div>
    </main>
  );
}
