export default function GoogleMap() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          Location
        </h2>

        <iframe
          src="https://maps.app.goo.gl/Pa7KvPott7yCQr5c6/maps/embed"
          width="100%"
          height="500"
          loading="lazy"
          className="rounded-3xl shadow-xl"
        />

      </div>

    </section>
  );
}
