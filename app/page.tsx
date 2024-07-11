import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import ContactSection from "@/components/sections/Contact";

export default async function Home() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto">
      <Header />
      <About />
      <ContactSection />
    </section>
  );
}
