// lib/scroll.ts
export function scrollToId(id: string) {
  if (typeof window === "undefined") return;
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
