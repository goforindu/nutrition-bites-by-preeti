// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutritionBitesByPreeti — Clinical Nutritionist, Dt. Preeti Chauhan",
  description:
    "Transforming health the simple way — no fancy diets, just real results. Weight loss, PCOD, fertility nutrition, diabetes, gut health. Free 15-min consult.",
  metadataBase: new URL("https://nutritionbitesbypreeti.com"),
  openGraph: {
    title: "NutritionBitesByPreeti — Clinical Nutritionist",
    description:
      "Transforming health the simple way — no fancy diets, just real results.",
    url: "https://nutritionbitesbypreeti.com",
    siteName: "NutritionBitesByPreeti",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
