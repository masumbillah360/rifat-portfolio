"use client";

import { toggleContentStatus } from "@/actions/content.action";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/sectionHeading";
import StatusToggleButton from "@/components/ui/status-toggle-button";
import useContentModal from "@/hooks/content/useContentModal";
import { Delete, Edit } from "lucide-react";
import { User } from "next-auth";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
interface Props {
  content: any;
  user: User | null;
}
const ContentDetails = ({ content, user }: Props) => {
  const router = useRouter();
  const { openModal } = useContentModal();
  if (!user || !user?.email || !content) {
    toast.error("Something went wrong!");
    redirect("/");
  }
  const handleStatusToggle = async (e: any) => {
    e.preventDefault();
    await toggleContentStatus(content.content_id);
    router.refresh();
  };
  const markup = { __html: content?.description };
  return (
    <div>
      <SectionHeading title={content?.title} subTitle={content?.subTitle} />
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <Button variant="ghost" className="cursor-default">
            Category
          </Button>
          <Button variant="outline" className="">
            {content?.category?.category}
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <StatusToggleButton
            status={content?.contentStatus}
            handleStatus={handleStatusToggle}
          />
          <Button variant="outline" size="icon">
            <Edit
              onClick={() =>
                router.push(
                  `/admin/content/edit-content/${content?.content_id}`
                )
              }
              className="text-sky-500"
            />
          </Button>
          <Button
            onClick={() =>
              openModal("deleteContent", { id: content?.content_id })
            }
            variant="outline"
            size="icon"
          >
            <Delete className="text-rose-500" />
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={content?.thumbnail[0]}
          alt="Content Thumb"
          width={1000}
          height={800}
          className="h-[600px] w-full object-cover rounded"
        />
      </div>
      <div className="mt-4 border rounded mb-3 p-3">
        <div dangerouslySetInnerHTML={markup} />
      </div>
    </div>
  );
};

export default ContentDetails;
