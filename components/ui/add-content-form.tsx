"use client";

import React from "react";
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
import { UploadButton, UploadDropzone } from "@/lib/utils";
import { Button } from "./button";

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
  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
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
                  <Input
                    className="dark:bg-slate-900"
                    placeholder="Describe title"
                    {...field}
                  />
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
                    className="dark:bg-slate-900"
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
                          value={cat?.category_id!}
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
                    className="cursor-pointer"
                    endpoint="imageUploader"
                    onDrop={(acceptedFiles) => {
                      const urls = acceptedFiles.map((file) =>
                        URL.createObjectURL(file)
                      );
                      field.onChange(urls);
                      console.log("Files: ", acceptedFiles);
                    }}
                    onClientUploadComplete={(res) => {
                      const urls = res.map((file) => file.url);
                      field.onChange(urls);
                      console.log("Upload response: ", res);
                      alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      alert(`ERROR! ${error.message}`);
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
                  <Input
                    className="dark:bg-slate-900"
                    placeholder="Describe title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full items-center justify-center md:justify-end">
            <Button type="submit" variant="outline">
              Add Content
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddContentForm;
