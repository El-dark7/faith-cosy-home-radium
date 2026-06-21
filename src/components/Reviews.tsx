const reviews = [
  {
    name: "Sarah",
    review:
      "Amazing apartment and very clean."
  },
  {
    name: "David",
    review:
      "Excellent location and beautiful pool."
  },
  {
    name: "James",
    review:
      "Perfect for family vacations."
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Guest Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <p className="text-yellow-500 text-xl">
                ★★★★★
              </p>

              <p className="mt-4">
                {review.review}
              </p>

              <h4 className="font-bold mt-4">
                {review.name}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
