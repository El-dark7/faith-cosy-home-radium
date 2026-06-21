import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import PropertyShowcase from "@/components/PropertyShowcase";
import Reviews from "@/components/Reviews";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Amenities />

      <PropertyShowcase />

      <Reviews />

      <GoogleMap />

      <Footer />

      <WhatsAppFloat />
    </>
  );
}
