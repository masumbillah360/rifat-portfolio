"use client";

import React from "react";
import { Check, ShieldBanIcon } from "lucide-react";

interface Props {
  status: boolean;
  handleStatus: (e:any) => void;
}

const StatusToggleButton = ({ status, handleStatus }: Props) => {
  return (
    <span
      onClick={handleStatus}
      className={`py-1 px-2 font-semibold tracking-tight rounded-full size-7 text-xs border text-slate-100 flex justify-center items-center cursor-pointer ${
        status ? "bg-green-700" : "bg-rose-700"
      }`}
    >
      {status? <Check size={24} /> : <ShieldBanIcon />}
    </span>
  );
};

export default StatusToggleButton;
