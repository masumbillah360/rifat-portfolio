"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster position="top-right" reverseOrder={false} />;
};

export default ToasterProvider;
