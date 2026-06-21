export default function PropertyShowcase() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Experience Luxury
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/living-room.jpg"
            alt="Living Room"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Modern Interior Design
            </h3>

            <p className="text-lg text-gray-600">
              Spacious living spaces, premium furniture,
              smart entertainment, elegant finishes and
              exceptional comfort designed for business
              travelers, families and holiday guests.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
