import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurWorkSection from "@/components/OurWork/OurWorkSection";

export const metadata = {
  title: "Our Work | Safety Links",
  description: "Gallery of completed gate automation installations across Karachi — swing gates, sliding gates, roller shutters and more.",
};

export default function OurWorkPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <OurWorkSection />
      </main>
      <Footer />
    </div>
  );
}
