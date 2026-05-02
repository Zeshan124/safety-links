import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/Clients/ClientsSection";

export const metadata = {
  title: "Our Clients | Safety Links",
  description: "Trusted by 300+ residential, commercial and industrial clients across Karachi.",
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}
