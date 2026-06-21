import {
  Wifi,
  Car,
  Tv,
  Shield,
  Building2
} from "lucide-react";

export default function Amenities() {

  const items = [
    "Swimming Pool",
    "Elevator",
    "Secure Parking",
    "WiFi",
    "Smart TV",
    "24/7 Security"
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Amenities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item)=>(
            <div
              key={item}
              className="border rounded-xl p-6 shadow"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
