"use client";
import { FaWhatsapp } from "react-icons/fa"; // Or use Heroicons

export default function WhatsappButton() {
  const message = encodeURIComponent(
    "Hi Dt. Preeti, I'm interested in your personalized diet plans. Can you guide me on how to start?"
  );

  return (
    <a
      href={`https://wa.me/919625310091?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
