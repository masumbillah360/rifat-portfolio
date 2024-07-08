"use client";

import { X } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

// modal props interface
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
}

// modal component
const Modal = ({ isOpen, onClose, title, body }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowModal(isOpen!);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isOpen) return null;

  const handleRefClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === ref.current) {
      setShowModal(false);
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleRefClose}
      className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
    >
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto">
        <div
          className={`translate duration-300 h-full 
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg relative flex flex-col w-full bg-white dark:bg-slate-800 outline-none focus:outline-none">
            {/* HEADER */}
            <div className="flex items-center justify-center p-6 rounded-t relative border-b-[1px]">
              <button
                type="button"
                onClick={handleClose}
                className="p-1 hover:bg-white hover:text-rose-500 transition duration-500 absolute right-3 top-3 rounded-full border-2 hover:border-rose-500 text-white bg-rose-500 h-8 w-8 flex justify-center items-center"
              >
                <X className="size-full" />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </div>
            {/* BODY */}
            <div className="relative p-6 flex-auto">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
