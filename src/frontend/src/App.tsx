import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/CoursesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProcessSection from "./components/LibrarySection";
import WorkSection from "./components/MockTestSection";
import PhilosophySection from "./components/WhyChooseSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PhilosophySection />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
