import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/CoursesSection";
import PhilosophySection from "./components/WhyChooseSection";
import WorkSection from "./components/MockTestSection";
import ProcessSection from "./components/LibrarySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
