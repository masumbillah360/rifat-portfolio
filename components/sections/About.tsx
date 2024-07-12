"use client";
import React from "react";
import { Team } from "./Team";
import Image from "next/image";
import { ArrowDown, Check } from "lucide-react";
import SectionHeading from "../ui/sectionHeading";
import AnimationLottieClient from "@/components/lottie/client";
import { features, processSteps, whatWeDo } from "@/constatns";



const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading title="About Us" center />
      <div className="flex flex-col gap-4 md:gap-20 md:flex-row items-center md:items-stretch justify-center mt-8">
        <div className="">
          <div className="size-48 p-2">
            <AnimationLottieClient animationPath={"/lottie/color-animation.json"} />
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
