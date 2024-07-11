"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// form spree
import { useForm as spreeForm } from "@formspree/react";

import { Button } from "@/components/ui/button";

import AnimationLottieClient from "@/components/lottie/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import toast from "react-hot-toast";
import SectionHeading from "../ui/sectionHeading";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Minimum value should be 3" })
    .max(20, { message: "Maximum value should be 20" }),
  email: z
    .string()
    .email({ message: "It should be a valid email" })
    .min(9, { message: "Minimum value should be 9" })
    .max(50, { message: "Maximum value should be 50" }),
  subject: z
    .string()
    .min(9, { message: "Minimum value should be 9" })
    .max(50, { message: "Maximum value should be 50" }),
  message: z
    .string()
    .min(20, { message: "Minimum value should be 20" })
    .max(500, { message: "Maximum value should be 500" }),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Form Spree state and submit function
  const [state, handleSubmit] = spreeForm("xpznvovg");
  console.log(["FORM SUBMITTING STATUS ", state.succeeded]);

  let isSubmitting = false;
  function onSubmit(values: z.infer<typeof formSchema>) {
    isSubmitting = true;
    try {
      handleSubmit(values);
    } catch (error: any) {
      console.log(["Submission Error", error.message]);
    }
    form.reset();
    toast.success("Email sended Successfully");
    isSubmitting = false;
  }

  return (
    <div className="relative my-10 md:my-14 lg:my-20">
      <div>
        <SectionHeading
          title="Contact Us"
          subTitle="If you have any query feel free to ask us"
          center
        />
      </div>
      <div className="flex justify-between items-center my-10 md:my-14 lg:my-20">
        <div className="hidden md:block w-full h-3/4">
          <AnimationLottieClient animationPath={"/lottie/contact.json"} />
        </div>
        <Form {...form}>
          <form
            className="my-8 w-full bg-slate-200 dark:bg-slate-900 p-3 rounded-lg opacity-80 backdrop-blur-2xl space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your name"
                      type="text"
                      {...field}
                      className="dark:bg-slate-950"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your email"
                      type="email"
                      {...field}
                      className="dark:bg-slate-950"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase">Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type subject"
                      type="text"
                      {...field}
                      className="dark:bg-slate-950"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type Message"
                      {...field}
                      className="dark:bg-slate-950 h-full resize-none"
                      rows={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isSubmitting}
              className="mt-7 w-full font-semibold"
              type="submit"
              variant="outline"
            >
              Submit
              <BottomGradient />
            </Button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4  h-[1px] w-full" />
          </form>
        </Form>
      </div>
    </div>
  );
};
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
export default ContactSection;
