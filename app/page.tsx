import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import PersonalProject from "@/components/PersonalProject";
import AboutGrid from "@/components/AboutGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CaseStudies />
      <PersonalProject />
      <AboutGrid />
      <Footer />
    </main>
  );
}
