"use client";
import Login from "@/app/Login/page";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";

export function SignUpEffect() {
  const words = [
    {
      text: "Sign",
    },
    {
      text: "up",
    },
    {
      text: "for",
    },
    {
      text: "free",
    },
    {
      text: "Sahayak.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="bg-violet-100">
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-black dark:text-black text-base  mb-10 font-medium ">
      Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link href="/Login">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-balck border-transparent text-white text-sm" onClick={()=>Login}>
          Get Started
        </button>
        </Link>
        <Link href="/AboutUs">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Learn more
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
}


export default SignUpEffect