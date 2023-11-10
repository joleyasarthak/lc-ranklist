"use client";
import React from "react";
import Image from "next/image";
import LogoImage from "@/assets/logo.svg";

function Logo() {
  return (
    <Image
      priority
      src={LogoImage}
      className="dark:filter dark:invert"
      alt="LeetCode"
      width={50}
      height={50}
    />
  );
}

export default Logo;
