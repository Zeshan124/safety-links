import Footer from "@/components/Footer";
import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <AboutSection />
        <Projects />
        {/* <FeaturedEpisode />
        <IndustriesSection />
        <BlogArticlesSection />
        <OurProgrammes />  */}
      </main>
      <Footer />
    </div>
  );
}
