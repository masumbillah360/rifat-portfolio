"use client";

import axios from "axios";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useCategoryModal from "@/hooks/category/useCategoryModal";

import Modal from "./Modal";
import { Button } from "../ui/button";
import SectionHeading from "../ui/sectionHeading";

const DeleteCategoryModal = () => {
  const router = useRouter();
  const { data, closeModal, modals } = useCategoryModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onDelete = async () => {
    setIsLoading(true);

    try {
      await axios.delete(`/api/category/${data.id}`);
      toast.success("Deleted Category");
      closeModal("deleteCategory");
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
      <div className="my-4 p-3 text-center">
        <div className="text-2xl font-semibold">{data.category}</div>
      </div>
      <SectionHeading
        title="Are you sure to delete category"
        subTitle="This category will be permanently deleted *"
        center
      />
      <div className="flex justify-center items-center gap-4">
        <Button
          onClick={() => closeModal("deleteCategory")}
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
          Delete Category
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={modals.deleteCategory}
      title="Delete category"
      onClose={() => closeModal("deleteCategory")}
      body={bodyContent}
    />
  );
};

export default DeleteCategoryModal;
