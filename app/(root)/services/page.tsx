import React from "react";
import { cn } from "@/lib/utils";
import { whatWeDo } from "@/constatns";
import LottieClient from "@/components/lottie/client";

const ServicePage = () => {
  return (
    <section className="min-h-screen mt-8 space-y-5">
      {whatWeDo.map((service, i) => (
        <div
          key={service.title + "Service"}
          className={cn(
            `w-full flex sm:flex-row flex-col-reverse justify-center sm:justify-normal border rounded-xl shadow-md`,
            {
              "sm:flex-row-reverse": (i + 1) % 2 === 0,
            }
          )}
        >
          <div className="w-full p-4 text-center sm:text-start">
            <div className="font-bold text-4xl text-black/90 dark:text-white/90">
              {service.title}
            </div>
            <p className="text-lg mt-5 md:max-w-lg font-light text-black/80 dark:text-white/80">
              {service.description}
            </p>
          </div>
          <div className="w-full">
            <div className="sm:size-96 sm:mx-auto flex justify-center items-center">
              <LottieClient
                className=""
                animationPath={"/lottie/color-animation.json"}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicePage;
