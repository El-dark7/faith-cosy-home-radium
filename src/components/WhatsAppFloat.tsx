"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254793667999"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-xl"
    >
      <FaWhatsapp
        size={30}
        color="white"
      />
    </a>
  );
}
