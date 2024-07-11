import About from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto">
      <Header />
      <About />
      <ContactSection />
    </section>
  );
}
