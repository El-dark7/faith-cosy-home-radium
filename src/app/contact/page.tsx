import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20">

        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-8">
            Contact Us
          </h1>

          <div className="space-y-4 text-xl">

            <p>
              Phone 1:
              0793667999
            </p>

            <p>
              Phone 2:
              0797623102
            </p>

            <p>
              Email:
              Matufaith135@gmail.com
            </p>

            <p>
              Location:
              Nyali, Mombasa
            </p>

          </div>

        </div>

      </section>
    </>
  );
}
