import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const images = [
  "/images/exterior.jpg",
  "/images/living-room.jpg",
  "/images/bedroom.jpg",
  "/images/kitchen.jpg",
  "/images/pool.jpg"
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-10">
            Gallery
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            {images.map((image) => (
              <img
                key={image}
                src={image}
                alt=""
                className="rounded-xl shadow-lg hover:scale-105 transition"
              />
            ))}

          </div>

        </div>

      </section>

      <WhatsAppFloat />
    </>
  );
}
