"use client";

import { useRef } from "react";
import { Category } from "@/types";
import toast from "react-hot-toast";
import { routes, socialLinks } from "@/constatns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
interface Props {
  categories: Category[];
}
export const Footer = ({ categories }: Props) => {
  const ref = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for join with us!");
    if (ref.current) {
      ref.current.reset();
    }
  };
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-gray-300">Link</p>
              <div className="mt-2 space-y-2">
                {routes.map((route) => (
                  <div key={route.name + "Footer"}>
                    <a
                      href={route.path}
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      {route.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Category
              </p>
              <div className="mt-2 space-y-2">
                {categories.map((category) => (
                  <div className="" key={category.category_id + "footer"}>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      {category.category}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium tracking-wide text-gray-300">Social</p>
              <div className="mt-2 space-y-2">
                {
                  socialLinks.map((li, i) => (
                    <div key={li.href +i }>
                      <a
                        href={li.href}
                        target="_blank"
                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                      >
                        {li.label}
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">Contact</p>
              <div className="mt-2 space-y-2">
                <div>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Contact
                  </a>
                </div>
                <div>
                  <a
                    href="https://wa.link/a2iykv"
                    target="_blank"
                    rel="noopener"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide text-gray-300">
              Subscribe for updates
            </span>
            <form
              ref={ref}
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 md:flex-row gap-4"
            >
              <Input
                placeholder="Email"
                required
                type="text"
              />
              <Button variant="outline" type="submit" className="md:ml-2" >Subscribe</Button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              To get our latest works and events update please subscribe us, Thank you.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright 2024 SR GRAPHIC STUDIO. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            {socialLinks.map((li) => (
              <a key={li.label + li.href}
                href={li.href}
                target="_blank"
                title={li.label}
                className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              >
                <Image src={li.icon} alt="Social Image" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
