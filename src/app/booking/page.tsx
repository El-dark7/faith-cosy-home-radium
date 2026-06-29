"use client";

import { useState } from "react";

export default function BookingPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const whatsapp =
      `https://wa.me/254793667999?text=
      Booking Request

      Name:${form.name}

      Phone:${form.phone}

      CheckIn:${form.checkIn}

      CheckOut:${form.checkOut}
      `;

    window.open(whatsapp);
  };

  return (
    <section className="min-h-screen pt-32">

      <div className="max-w-xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          Book Your Stay
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            placeholder="Full Name"
            className="w-full border p-3"
            onChange={(e)=>
              setForm({
                ...form,
                name:e.target.value
              })
            }
          />

          <input
            placeholder="Phone"
            className="w-full border p-3"
            onChange={(e)=>
              setForm({
                ...form,
                phone:e.target.value
              })
            }
          />

          <input
            type="date"
            className="w-full border p-3"
            onChange={(e)=>
              setForm({
                ...form,
                checkIn:e.target.value
              })
            }
          />

          <input
            type="date"
            className="w-full border p-3"
            onChange={(e)=>
              setForm({
                ...form,
                checkOut:e.target.value
              })
            }
          />

          <button
            className="w-full bg-black text-white p-4"
          >
            Submit Booking
          </button>

        </form>

      </div>

    </section>
  );
}

