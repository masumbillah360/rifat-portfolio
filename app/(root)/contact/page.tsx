import ContactSection from "@/components/sections/Contact";
import { Footer } from "@/components/shared/footer/Footer";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <section className="min-h-screen max-w-7xl mx-auto p-2">
        <div>
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
