import gsap from "gsap";
import { twMerge } from "tailwind-merge";
import { ScrollTrigger } from "gsap/all";
import { type ClassValue, clsx } from "clsx";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: string,
  animationProps: gsap.TweenVars,
  scrollProps: ScrollTrigger.Vars
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
