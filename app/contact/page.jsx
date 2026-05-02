import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact/ContactSection";

export const metadata = {
  title: "Contact Us | Safety Links",
  description: "Get in touch with Safety Links for a free quote, site survey, or any gate automation enquiry. Call 021-35244550 or WhatsApp 0321-2508451.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
