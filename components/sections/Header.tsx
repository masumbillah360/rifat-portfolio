"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/lib/utils";
import { socialLinks } from "@/constatns";

const Header = () => {
  useGSAP(() => {
    animateWithGsap(
      ".gText",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      {}
    );
    animateWithGsap(
      ".gSubText",
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power3.inOut" },
      {}
    );
    animateWithGsap(
      ".gDiv",
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power1.in",
        scale: 1,
        rotate: 360,
      },
      {}
    );
    animateWithGsap(".socialLink", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.in",
      scale: 1,
      rotate: 360,
      delay: 1,
      stagger: 0.5,
    }, {})
  }, []);
  return (
    <div className="flex flex-col-reverse md:flex-row md:gap-3 justify-center md:justify-between items-center min-h-screen">
      <div className="size-full flex justify-center items-center">
        <div className="size-full text-center flex flex-col gap-4">
          <div className="headingText gText">
            SR <span className="text-green-500">GRAPHIC</span> STUDIO
          </div>
          <div className="underline underline-offset-8 opacity-0 transform translate-y-20 gSubText">
            Graphic Design & Branding
          </div>
          <div className="flex flex-row justify-center items-center gap-3 mt-8">
            {socialLinks.map((li) => (
              <a
                key={li.href}
                href={li.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200 scale-0 opacity-0 transform translate-y-20 socialLink"
              >
                <Image src={li.icon} alt={li.label} height={40} width={40} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 md:h-full flex justify-center items-center mt-8 md:mt-0">
        <div className="flex justify-center items-center">
          <div className="size-96 p-2 gDiv opacity-0 transform -translate-y-20 scale-0">
            <Image
              src="/assets/images/sr-logo.png"
              alt="Test Image"
              height={1000}
              width={1000}
              className="size-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
