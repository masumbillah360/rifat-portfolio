'use client'
import React from "react";
interface LogoProps {
  src: string;
}
const Logo = ({ src }: LogoProps) => {
  return (
    <div>
      {/* <Image src={src} alt="Logo" height={80} width={1000}  className="h-20 w-80"/> */}
      <div className="font-extrabold text-4xl tracking-tighter text-gray-800 dark:text-gray-300">RI<span className="text-green-400 text-5xl">F</span>AT</div>
    </div>
  );
};

export default Logo;
