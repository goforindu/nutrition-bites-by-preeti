// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import WhatsappButton from "./components/WhatsappButton";

export const metadata = {
  title: "Nutrition Bites by Preeti | Clinical Dietitian & Nutrition Expert",
  description:
    "Personalized nutrition plans for weight loss, post-pregnancy care, diabetes, PCOD, thyroid & metabolic health — led by Clinical Dietitian Preeti.",
  metadataBase: new URL("https://www.nutrition-bites-by-preeti.com"),
  openGraph: {
    title:
      "Nutrition Bites by Preeti | Transform Your Health with Expert Diet Plans",
    description:
      "Holistic nutrition designed for real results — healthy weight loss, lifestyle disorder management & sustainable eating habits.",
    url: "https://www.nutrition-bites-by-preeti.com",
    type: "website",
    images: [
      {
        url: "https://www.nutrition-bites-by-preeti.com/og-image.jpg", // 🔄 UPDATE THIS IMAGE PATH
        width: 1200,
        height: 630,
        alt: "Dietitian Preeti - Healthy Nutrition & Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrition Bites by Preeti | Dietitian for Weight Loss & Health",
    description:
      "Achieve your goals with customized diet plans & expert guidance from Clinical Dietitian Preeti.",
    images: ["https://www.nutrition-bites-by-preeti.com/og-image.jpg"], // 🔄 UPDATE THIS IMAGE PATH
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="flex-grow">{children}</main>
        <WhatsappButton />
      </body>
    </html>
  );
}
