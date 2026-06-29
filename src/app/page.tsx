export default function Home() {
  return (
    <main>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold gold-text">
            Radium Residence
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about">About</a>
            <a href="#amenities">Amenities</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">

          <p className="uppercase tracking-[8px] text-gray-300 mb-4">
            Luxury Apartments • Nyali
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Experience
            <span className="gradient-text"> Luxury Living </span>
            in Mombasa
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Premium apartments featuring swimming pool,
            elevator access, secure parking, high-speed WiFi
            and modern finishes.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/254797623102"
              className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Book via WhatsApp
            </a>

            <a
              href="#gallery"
              className="glass px-8 py-4 rounded-full hover:scale-105 transition"
            >
              View Gallery
            </a>
          </div>

        </div>
      </section>

      {/* Amenities */}
      <section
        id="amenities"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl text-center mb-16">
          Premium Amenities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Swimming Pool",
            "Elevator Access",
            "Secure Parking",
            "High-Speed WiFi",
            "Smart TV",
            "24/7 Security",
          ].map((item) => (
            <div
              key={item}
              className="glass p-8 rounded-3xl text-center"
            >
              <h3 className="text-xl gold-text mb-4">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 text-center text-gray-400">
        © 2026 Radium Residence • Nyali • Mombasa • Kenya
      </footer>

    </main>
  );
}