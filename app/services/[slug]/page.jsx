import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/Services/ServiceDetail";
import { getServiceBySlug, getAllServices } from "@/lib/services";

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(/** @type {{ params: { slug: string } }} */ { params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Safety Links`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: service.heroImage || service.image }],
    },
  };
}

export default function ServicePage(/** @type {{ params: { slug: string } }} */ { params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </div>
  );
}
