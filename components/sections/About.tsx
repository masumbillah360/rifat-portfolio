"use client";
import gsap from "gsap";
import React from "react";
import { Team } from "./Team";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/lib/utils";
import { ArrowDown, Check } from "lucide-react";
import SectionHeading from "../ui/sectionHeading";
import AnimationLottieClient from "@/components/lottie/client";
import { features, processSteps, whatWeDo } from "@/constatns";
import Stats from "../ui/stats";
import ClientReview from "../ui/review";

const About = () => {
  useGSAP(() => {
    animateWithGsap(
      ".gHeading",
      {
        duration: 1,
        y: 0,
        x: 0,
        ease: "back.inOut",
        scale: 1,
        opacity: 1,
      },
      {}
    );
    animateWithGsap(
      ".gHeading3",
      {
        duration: 1,
        y: 0,
        x: 0,
        ease: "back.inOut",
        scale: 1,
        opacity: 1,
      },
      {}
    );
    animateWithGsap(
      ".gHeading2",
      {
        duration: 1,
        y: 0,
        x: 0,
        ease: "power2.inOut",
        scale: 1,
        opacity: 1,
      },
      {}
    );

    gsap.to(".gDesc", {
      duration: 1,
      y: 0,
      x: 0,
      ease: "power1.inOut",
      scale: 1,
      opacity: 1,
      stagger: 0.5,
    });
    gsap.to(".gDesc2", {
      duration: 1,
      y: 0,
      x: 0,
      ease: "power1.inOut",
      scale: 1,
      opacity: 1,
      stagger: 0.5,
    });
    gsap.to(".gDesc3", {
      duration: 1,
      y: 0,
      x: 0,
      ease: "back.inOut",
      scale: 1,
      opacity: 1,
      stagger: 0.5,
    });
  }, []);
  return (
    <div className="flex flex-col gap-8 mt-20 md:mt-8">
      <SectionHeading title="About Us" center />
      <div className="flex flex-col gap-4 md:gap-20 md:flex-row items-center md:items-stretch justify-center mt-8">
        <div className="">
          <div className="size-48 p-2 flex justify-center items-center">
            <AnimationLottieClient
              animationPath={"/lottie/color-animation.json"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-2xl font-semibold text-slate-600 dark:text-slate-300 text-center md:text-start">
            Welcome to 👋
            <div className="font-bold text-black dark:text-white">
              SR GRAPHIC STUDIO
            </div>
          </div>
          <div className="text-lg font-light leading-6 text-slate-600 dark:text-slate-300 text-center md:text-start">
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
            <div className="text-lg font-light leading-6 text-slate-600 dark:text-slate-300 text-center md:text-start">
              Our mission is to deliver high-quality graphic design solutions
              that not only meet but exceed our client&apos;s expectations. We
              believe in the power of visual storytelling and strive to create
              designs that are both aesthetically pleasing and strategically
              effective.
            </div>
          </div>
          <div className="hidden md:block">
            <div className="size-48 flex flex-col justify-center items-center">
              <AnimationLottieClient animationPath="/lottie/ai-design.json" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="w-full">
          <div id="" className="transform opacity-0 scale-0 gHeading">
            <SectionHeading
              title="What We Do"
              subTitle="Our working area"
              center
            />
          </div>
          <div className="flex flex-col gap-2">
            {whatWeDo.map((f) => (
              <div
                key={f.title}
                className="border rounded p-2 gDesc opacity-0 scale-0 -translate-y-20"
              >
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
          <div id="" className="transform opacity-0 scale-0 gHeading3">
            <SectionHeading
              title="Why Choose Us?"
              subTitle="Get best services from us"
              center
            />
          </div>
          <div className="flex flex-col gap-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="border rounded p-2 gDesc2 opacity-0 scale-0 translate-y-20"
              >
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
      <div className="mt-10 md:mt-20">
        <div id="" className="transform opacity-0 scale-0 gHeading2">
          <SectionHeading
            title="Our Process"
            subTitle="Described our working process below"
            center
          />
        </div>
        <div className="flex flex-col gap-2">
          {processSteps.map((f, i) => (
            <div
              key={f.title}
              className="gDesc3 opacity-0 scale-0 -translate-y-20"
            >
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
      <div className="mt-10 md:mt-20">
      <div className="mt-10 md:mt-20">
        <SectionHeading
          title="Our Team"
          subTitle="To give best services to our valuable client we have best team ever"
          center
        />
        <div>
          <Team />
        </div>
      </div>
        <SectionHeading
          title="Success Fully Delivered"
          subTitle="We turn imagination into reality. Partner with us."
          center
        />
        <div>
          <Stats />
        </div>
      <div className="mt-10 md:mt-20">
        <SectionHeading
          title="Our Client Review"
          subTitle="Always we try to serve best quality to our clients every time."
          center
        />
        <div>
          <ClientReview />
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
