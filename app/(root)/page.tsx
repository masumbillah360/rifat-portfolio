import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import ContactSection from "@/components/sections/Contact";

export default async function Home() {
  return (
    <>
      <Header />
      <About />
      <div className="mt-10">
        <ContactSection />
      </div>
    </>
  );
}
