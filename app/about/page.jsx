import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About/AboutSection";

export const metadata = {
  title: "About Us | Safety Links",
  description: "Learn about Safety Links — Karachi's trusted gate automation specialists since 2014.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
