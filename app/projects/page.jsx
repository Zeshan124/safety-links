
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectsPage from "@/components/Projects/ProjectsSection";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
       <ProjectsPage />
        {/* <FeaturedEpisode />
        <IndustriesSection />
        <BlogArticlesSection />
        <OurProgrammes />  */}
      </main>
      <Footer />
    </div>
  );
}
