"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
// import Link from "next/link"  (already removed)

import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  // Removed Link and Auth related code

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <div className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Genius
        </h1>
      </div>
      {/* Removed Auth-related logic */}
      <div className="flex items-center gap-x-2">
        <Button variant="outline" className="rounded-full">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

// Note: Removing Link removes navigation functionality. Consider replacing
// destination URLs with placeholders (e.g., "#") for a basic structure.
