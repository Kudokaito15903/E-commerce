"use client";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {


  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/assets/images/Logo.png"
        alt="logo"
        width={30}
        height="30"
      />
      <h4 className= {cn('text-black')}>
        Orion
      </h4>
    </Link>
  );
}