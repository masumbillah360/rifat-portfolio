"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@/types";
import { ScrollArea } from "./scroll-area";
import { UploadDropzone } from "@/lib/utils";
import { Button } from "./button";
import Tiptap from "../rich-editor/RichEditor";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = z.object({
  title: z.string().min(5).max(100),
  subTitle: z.string().min(10).max(200),
  description: z.string().min(10).max(500),
  category: z.string(),
  thumbnail: z.string().url().array(),
});

interface Props {
  categories: Category[] | [];
}
const AddContentForm = ({ categories }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      subTitle: "",
      description: "",
      category: "",
      thumbnail: [],
    },
  });
  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      setIsLoading(true);
      await axios.post("/api/content", data);
      form.reset();
      toast.success("Successfully added content!");
      router.push("/admin/content");
    } catch (error) {
      console.log(["ERROR TO ADD Content", error]);
      toast.error("Failed to add content");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input className="" placeholder="Describe title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subtitle</FormLabel>
                <FormControl>
                  <Input
                    className=""
                    placeholder="Describe subtitle"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <ScrollArea className="h-32">
                      {categories.map((cat) => (
                        <SelectItem
                          key={cat.category_id}
                          value={cat?.category!}
                        >
                          {cat?.category}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Thumbnail</FormLabel>
                <FormControl>
                  <UploadDropzone
                    className="cursor-pointer border dark:border-slate-500 border-slate-700"
                    endpoint="imageUploader"
                    onDrop={(acceptedFiles) => {
                      const urls = acceptedFiles.map((file) =>
                        URL.createObjectURL(file)
                      );
                      field.onChange(urls);
                    }}
                    onClientUploadComplete={(res) => {
                      const urls = res.map((file) => file.url);
                      field.onChange(urls);
                      toast.success("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      toast.error(`ERROR! ${error.message}`);
                    }}
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
                  <Tiptap
                    content={field.value}
                    onChange={(newContent: string) =>
                      field.onChange(newContent)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full items-center justify-center md:justify-end">
            <Button
              disabled={isLoading}
              type="submit"
              variant="outline"
              className="disabled:cursor-not-allowed"
            >
              Add Content
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddContentForm;
