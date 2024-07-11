"use client";

import axios from "axios";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import { Button } from "../ui/button";
import SectionHeading from "../ui/sectionHeading";
import useContentModal from "@/hooks/content/useContentModal";

const DeleteContentModal = () => {
  const router = useRouter();
  const { data, closeModal, modals } = useContentModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onDelete = async () => {
    setIsLoading(true);

    try {
      await axios.delete(`/api/content/${data.id}`);
      toast.success("Deleted Content");
      closeModal("deleteContent");
      router.push("/admin/content");
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
      <SectionHeading
        title="Are you sure to delete content"
        subTitle="This content will be permanently deleted *"
        center
      />
      <div className="flex justify-center items-center gap-4">
        <Button
          onClick={() => closeModal("deleteContent")}
          className="dark:bg-slate-900 dark:text-white"
          disabled={isLoading}
          variant="outline"
        >
          Cancel
        </Button>
        <Button
          onClick={onDelete}
          className="dark:bg-slate-900 dark:text-white"
          disabled={isLoading}
          variant="outline"
        >
          Delete Content
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={modals.deleteContent}
      title="Delete category"
      onClose={() => closeModal("deleteContent")}
      body={bodyContent}
    />
  );
};

export default DeleteContentModal;
