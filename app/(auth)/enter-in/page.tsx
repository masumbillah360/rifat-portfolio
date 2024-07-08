"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { doLogin } from "@/actions/auth.action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SectionHeading from "@/components/ui/sectionHeading";
import { LogIn } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Must be at least 8 characters long" }),
});

const AdminLogin = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      const response = await doLogin(formData);
      console.log(response);
      if (!!response.error) {
        toast.error(response.error);
        return;
      } else {
        toast.success("Login Successful!");
        router.push("/admin");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
    <div className="w-full md:w-[80%] lg:max-w-3xl border rounded px-4 py-2">
      <SectionHeading
        title="Welcome back Rifat  👋"
        subTitle="Do not share with anyone your top secret route and credentials!"
        center
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@doe.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="text-xl"
                    placeholder="*********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-center items-center">
            <Button
              className="bg-slate-200 text-slate-800 hover:bg-white dark:hover:bg-black hover:border dark:bg-slate-800 dark:text-slate-200 font-bold"
              type="submit"
            >
              Login <LogIn className="ml-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AdminLogin;
