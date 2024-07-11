"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/lib/utils";

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
  }, []);
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-3 justify-end md:justify-between items-center min-h-screen">
      <div className="size-full flex justify-center items-center">
        <div className="size-full text-center flex flex-col gap-4">
          <div className="headingText gText">SR GRAPHIC STUDIO</div>
          <div className="underline underline-offset-8 opacity-0 transform translate-y-20 gSubText">
            Graphic Design & Branding
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 md:h-full flex justify-center items-center mt-8 md:mt-0">
        <div className="flex justify-center items-center">
          <div className="size-72 p-2 rounded-full border border-rose-500 gDiv opacity-0 transform -translate-y-20 scale-0">
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
  );
};

export default Header;
