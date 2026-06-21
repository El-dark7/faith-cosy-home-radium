"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold text-xl">
          Radium Residence
        </h1>

        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
