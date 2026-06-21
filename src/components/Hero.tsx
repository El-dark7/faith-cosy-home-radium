"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('/images/radium-exterior.jpg')",
      }}
    >
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 max-w-4xl px-6 text-white">

        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="text-5xl md:text-7xl font-bold"
        >
          Luxury Living
          in Nyali
        </motion.h1>

        <p className="mt-6 text-xl">
          Premium 3 Bedroom Apartment
          with Swimming Pool,
          Elevator & Secure Parking.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="/booking"
            className="bg-gold text-black px-6 py-3 rounded-lg"
          >
            Book Now
          </a>

          <a
            href="https://wa.me/254793667999"
            className="border px-6 py-3 rounded-lg"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
