import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Calendar,
  CheckCircle,
  PhoneCall,
  Repeat,
  Star,
  UserCheck,
} from "lucide-react";

const ApproachSection = () => {
  return (
    <section
      id="approach"
      className="relative max-w-6xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-36"
    >
      {/* Subtle background gradient + decorative SVG */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -left-20 w-80 h-80 rounded-full bg-green-200/20 blur-3xl transform -rotate-12" />
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
              <stop offset="0" stopColor="#15803D" stopOpacity="0.06" />
              <stop offset="1" stopColor="#16A34A" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="420" height="420" rx="100" fill="url(#g1)" />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT: Feature card - hero */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-gradient-to-br from-white/80 to-green-50/60 p-8 shadow-lg border border-slate-100"
        >
          {/* top badge */}
          <div className="inline-flex items-center gap-3 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-green-100">
            <UserCheck className="h-4 w-4" />
            Personalized Coaching
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Simple. Personal. Sustainable.
          </h2>

          <p className="mt-3 text-slate-600 max-w-lg">
            Plans built around your home-cooked meals, schedule and culture.
            Friendly follow-ups, habit coaching and practical tips that actually
            fit your life.
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
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </span>
                <span className="text-sm text-slate-700">{t}</span>
              </motion.div>
            ))}
          </div>

          {/* trust row */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-green-50 p-2 ring-1 ring-green-100">
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
                  <div className="absolute -left-7 top-0 bg-white rounded-full p-1 ring-1 ring-green-100">
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="bg-green-50/40 rounded-lg p-3">
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
                  <div className="absolute -left-7 top-0 bg-white rounded-full p-1 ring-1 ring-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600" />
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
                  <div className="absolute -left-7 top-0 bg-white rounded-full p-1 ring-1 ring-green-100">
                    <Repeat className="h-5 w-5 text-green-600" />
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
                  <div className="absolute -left-7 top-0 bg-white rounded-full p-1 ring-1 ring-green-100">
                    <PhoneCall className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="rounded-lg bg-green-50 p-3 border border-green-100">
                    <div className="font-medium text-slate-800">4) Sustain</div>
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
               from-green-700 to-green-600 text-white px-3 py-1.5 
               text-sm font-medium shadow-md transition hover:scale-105"
                  aria-label="Book free consult"
                >
                  {/* subtle pulsing ring */}
                  <motion.span
                    aria-hidden
                    className="absolute -inset-0.5 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 4px rgba(22,163,74,0.12)",
                        "0 0 0 8px rgba(22,163,74,0.03)",
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
                  href="#results"
                  className="text-sm text-green-700 underline underline-offset-2"
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
            <span className="px-2 py-1 rounded-md bg-green-50 ring-1 ring-green-100">
              Verified Coach
            </span>
            <span>•</span>
            <span>1000+ hours coaching</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
