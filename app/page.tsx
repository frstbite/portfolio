import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import AboutGrid from "@/components/AboutGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <Work />
      <AboutGrid />
      <Footer />
    </main>
  );
}
