import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import ContactSection from "@/components/sections/Contact";
import { Footer } from "@/components/shared/footer/Footer";
import { getAllCategory } from "@/actions/category.action";

export default async function Home() {
  const categories = await getAllCategory(4);
  return (
    <div className="overflow-hidden">
      <section className="min-h-screen max-w-7xl mx-auto">
        <Header />
        <About />
        <ContactSection />
      </section>
      <Footer categories={categories} />
    </div>
  );
}
