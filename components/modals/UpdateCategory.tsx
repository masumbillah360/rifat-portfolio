"use client";

import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useCategoryModal from "@/hooks/category/useCategoryModal";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "./Modal";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";

const formSchema = z.object({
  category: z
    .string()
    .min(1, { message: "Minimum value will be 1" })
    .max(50, { message: "Maximum value will be 50" }),
  description: z.string().max(150, { message: "Maximum length will be 150" }),
});

const UpdateCategoryModal = () => {
  const router = useRouter();
  const { data, closeModal, modals } = useCategoryModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: data.category,
      description: data.description,
    },
  });

  useEffect(() => {
    form.reset({
      category: data.category,
      description: data.description,
    });
  }, [data, form]);

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      await axios.patch(`/api/category/${data.id}`, formData);
      toast.success("Updated Category");
      closeModal("updateCategory");
      form.reset();
      router.refresh();
    } catch (error: any) {
      console.log(error);
      toast.error(error.message as string);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-slate-900"
                    placeholder="Category Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Short Description"
                    {...field}
                    className="dark:bg-slate-900"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="dark:bg-slate-900 dark:text-white"
            disabled={isLoading}
            type="submit"
          >
            Update Category
          </Button>
        </form>
      </Form>
    </div>
  );

  return (
    <Modal
      isOpen={modals.updateCategory}
      title="Update category"
      onClose={() => closeModal("updateCategory")}
      body={bodyContent}
    />
  );
};

export default UpdateCategoryModal;
