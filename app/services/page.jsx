import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services/ServicesSection";

export const metadata = {
  title: "Products & Services | Safety Links",
  description: "Automatic swing gates, sliding gates, barrier gates, roller shutters, high-speed PVC doors, road blockers and dock levelers — Safety Links, Karachi.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
