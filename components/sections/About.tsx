"use client";
import React from "react";
import Image from "next/image";
import SectionHeading from "../ui/sectionHeading";
import { ArrowBigDown, ArrowDown, Check } from "lucide-react";
import { Team } from "./Team";

const whatWeDo = [
  {
    title: "Graphic Design",
    description:
      "Our team of skilled designers will create eye-catching visuals that not only enhance your brand's reputation but also help you stand out in the market",
  },
  {
    title: "Brand Identity",
    description:
      "Logo design, brand guidelines, and complete visual identity packages",
  },
  {
    title: "Print Design",
    description: "Brochures, business cards, posters, and packaging design",
  },
  {
    title: "Digital Design",
    description:
      "Website graphics, social media visuals, and digital marketing materials",
  },
  {
    title: "Illustration",
    description: "Custom illustrations and artwork tailored to your needs",
  },
  {
    title: "Motion Graphics",
    description:
      "Engaging animations and video graphics for dynamic storytelling",
  },
];

const features = [
  {
    title: "Creative Expertise",
    description:
      "Our team is composed of talented designers with diverse skills and a keen eye for detail.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' needs and work closely with them to bring their vision to life.",
  },
  {
    title: "Innovative Solutions",
    description:
      "We stay up-to-date with the latest design trends and technologies to provide cutting-edge solutions.",
  },
  {
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and ensure that our projects are delivered on time, every time.",
  },
];
const processSteps = [
  {
    title: "Consultation",
    description:
      "We start by understanding your goals, target audience, and brand personality",
  },
  {
    title: "Concept Development",
    description:
      "Our designers brainstorm and create initial concepts based on your input",
  },
  {
    title: "Design & Refinement",
    description:
      "We refine the chosen concept, incorporating your feedback to perfect the design",
  },
  {
    title: "Final Delivery",
    description:
      "The final design is delivered in all required formats, ready for use across various platforms",
  },
];

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading title="About Us" center />
      <div className="flex flex-col gap-4 md:gap-20 md:flex-row items-center md:items-stretch justify-center mt-8">
        <div className="">
          <div className="size-48 p-2 rounded-full border border-rose-500">
            <Image
              src="/assets/images/test-image.jpg"
              alt="Test Image"
              height={1000}
              width={1000}
              className="size-full rounded-full border"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-2xl font-semibold text-slate-600 dark:text-slate-300">
            Welcome to 👋
            <div className="font-bold text-black dark:text-white">
              SR GRAPHIC STUDIO
            </div>
          </div>
          <div className="text-lg font-light leading-6 text-slate-600 dark:text-slate-300">
            where creativity meets innovation. We are a passionate team of
            graphic designers dedicated to transforming ideas into visual
            masterpieces. With years of experience in the industry, we
            specialize in creating unique and compelling designs that capture
            the essence of your brand.
          </div>
        </div>
      </div>
      <div>
        <SectionHeading title="Our Mission" center />
        <div className="flex flex-col-reverse gap-4 md:gap-20 md:flex-row items-center md:items-center justify-center mt-8">
          <div className="flex flex-col gap-8">
            <div className="text-lg font-light leading-6 text-slate-600 dark:text-slate-300">
              Our mission is to deliver high-quality graphic design solutions
              that not only meet but exceed our client&apos;s expectations. We
              believe in the power of visual storytelling and strive to create
              designs that are both aesthetically pleasing and strategically
              effective.
            </div>
          </div>
          <div className="hidden md:block">
            <div className="size-48 p-2 rounded-full border border-rose-500">
              <Image
                src="/assets/images/test-image.jpg"
                alt="Test Image"
                height={1000}
                width={1000}
                className="size-full rounded-full border"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="w-full">
          <SectionHeading
            title="What We Do"
            subTitle="Our working area"
            center
          />
          <div className="flex flex-col gap-2">
            {whatWeDo.map((f) => (
              <div key={f.title} className="border rounded p-2">
                <div className="text-xl font-semibold flex gap-2 flex-row items-start">
                  <div className="bg-green-500 rounded mt-1">
                    <Check className="text-white" />
                  </div>
                  <div>
                    <div className="text-slate-600 dark:text-slate-300">
                      {f.title}
                    </div>
                    <div className="text-lg font-light text-slate-600 dark:text-slate-300 ml-4">
                      {f.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <SectionHeading
            title="Why Choose Us?"
            subTitle="Get best services from us"
            center
          />
          <div className="flex flex-col gap-2">
            {features.map((f) => (
              <div key={f.title} className="border rounded p-2">
                <div className="text-xl font-semibold flex gap-2 flex-row items-start">
                  <div className="bg-green-500 rounded mt-1">
                    <Check className="text-white" />
                  </div>
                  <div>
                    <div className="text-slate-600 dark:text-slate-300">
                      {f.title}
                    </div>
                    <div className="text-lg font-light text-slate-600 dark:text-slate-300 ml-4">
                      {f.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <SectionHeading
          title="Our Process"
          subTitle="Described our working process below"
          center
        />
        <div className="flex flex-col gap-2">
          {processSteps.map((f, i) => (
            <div key={f.title}>
              <div className="border rounded p-2 text-center">
                <div>
                  <div className="flex justify-center mb-2">
                    <div className="rounded-full mt-1 border size-10 flex justify-center items-center font-extrabold">
                      {i + 1}
                    </div>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 text-xl font-semibold">
                    {f.title}
                  </div>
                  <div className="text-lg font-light text-slate-600 dark:text-slate-300">
                    {f.description}
                  </div>
                </div>
              </div>
              {i < processSteps.length - 1 && (
                <div className="w-full flex justify-center my-2">
                  <ArrowDown />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <SectionHeading
          title="Our Team"
          subTitle="To give best services to our valuable client we have best team ever"
          center
        />
        <div>
          <Team />
        </div>
      </div>
    </div>
  );
};

export default About;
