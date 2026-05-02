import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/Blog/BlogSection";

export const metadata = {
  title: "Blog | Safety Links",
  description: "Expert guides, maintenance tips, product comparisons, and case studies from Safety Links — Karachi's gate automation specialists.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
