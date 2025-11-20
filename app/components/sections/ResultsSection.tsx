"use client";

import { useState } from "react";

export const testimonials = [
  {
    name: "Shweta Kargwal",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "I started my journey from 87 kgs and I am 76 kgs now in just one month… I get into my old clothes… It was my post pregnancy weight and my dietician #dt preety chauhan customised my diet according to my comfort… She gave me simple and tasty food options. I am very happy to work with such a nice dietician and I am excited to see myself in my fantasy look…Thank you dietician Preeti Chauhan 🙏 ",
    goal: "Haryana",
  },
  {
    name: "Charu Mathur",
    photo:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "I am thrilled with the guidance provided by Preeti Mam. Her expertise has been instrumental in helping me achieve my health goals. She listens carefully to my needs and tailors her recommendations specifically for me, making the whole process feel personalized and effective. Her clear explanations and practical advice have made it easy to follow through with the plan. Preeti’s supportive and encouraging approach has greatly motivated me to stay on track. I truly appreciate her dedication and the positive impact she has made on my well-being. Thank you for your help and support Preeti Mam.",
    goal: "Ahmedabad, Gujrat",
  },
  {
    name: "Nisha V",
    photo:
      "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "I had a great experience with dietician Preeti, she has done regular follow-up with me. She is very polite and humble. She is very supportive and helped me to stick to my diet and I have seen changes in myself. I lost 8 kgs. She always motivated and I am really thankful for her guidance for my healthy journey. Thank you again Dietician Preeti. “Phir mileage chalte chalte”.",
    goal: "Panchkula, Haryana",
  },
  {
    name: "Gurdeep Kaur",
    photo:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "I recently had the pleasure of working with Dt. Preeti Chauhan, and I couldn't be more thrilled with the results! In just 4 months, I've lost an impressive 12 kg, going from 81 kg to 68 kg, with noticeable inch loss. Dt. Preeti Chauhan's guidance and expertise were instrumental in my weight loss journey. Her personalized diet plan, focusing on simple and wholesome home-cooked foods, made it easy for me to stick to and achieve my goals. I'm absolutely delighted with the progress I've made, and I'm grateful for Dt. Preeti Chauhan's support and guidance throughout my journey. If you're looking for a knowledgeable and supportive dietitian, I highly recommend Dt. Preeti Chauhan!",
    goal: "Sitarganj,Uttrakhand",
  },
  {
    name: "Dhirendra Kumar Tiwari",
    photo:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    comment:
      "I started my journey at 106 kg and now my weight is 100 kg in just 22 days. I want to give full credit to Dt. Preeti Chauhan Mam. She is very humble, a good listener, and helped me understand what foods I should like or avoid.When I joined, my trouser size was 36 and now it is size 32.Thank you, Dt. Preeti Chauhan Mam. I am lucky to have you in my corner.",
    goal: "Gorakhpur,Uttar Pradesh",
  },
];

const avatarColors = [
  "bg-green-700",
  "bg-rose-600",
  "bg-indigo-600",
  "bg-lime-600",
  "bg-blue-600",
  "bg-purple-600",
  "bg-amber-600",
  "bg-cyan-600",
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

export function ResultsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="results"
      className="relative bg-gradient-to-b from-green-50/80 to-white border-y py-16 scroll-mt-28 md:scroll-mt-36"
    >
      {/* Soft floating background glow */}
      <div className="pointer-events-none absolute -top-12 left-0 w-72 h-72 bg-green-200/30 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 bg-green-200/20 blur-3xl rounded-full" />

      {/* AUTO SCROLL WRAPPER */}
      <div className="overflow-hidden">
        <div
          className={
            `flex gap-6 py-6 animate-[scrollX_25s_linear_infinite] select-none ` +
            (isPaused
              ? "[animation-play-state:paused]"
              : "[animation-play-state:running]")
          }
          style={{ width: "200%" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[260px] md:min-w-[330px] snap-center rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-semibold text-lg ring-2 ring-green-200/60 shadow-sm ${getAvatarColor(
                    t.name
                  )}`}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-green-700 font-medium">{t.goal}</p>
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
  );
}
