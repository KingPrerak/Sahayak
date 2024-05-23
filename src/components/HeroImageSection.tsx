"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";
import SignUp from "@/app/SignUp/page";


export function HeroImageSection() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1543747255-94b72995ac74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682378138473-363dfb2e964f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.0,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold sm:text-6xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        On-Demand Services <br></br>At Your Fingertips
        </motion.p>
        <p className="p-4 mt-4 font-normal text-center text-base sm:text-xl md:text-log text-neutral-400 max-w-lg mx-auto decoration-1 text-inherit">Get quick access to a variety of services with just a few taps. We make convenience our top priority.Connect with professional service providers in your area. From home cleaning to plumbing, we've got you covered</p>
        <Link href="/SignUp">
        <button className="px-4 py-2 backdrop-blur-sm border bg-black text-white mx-auto text-center rounded-full relative mt-4" onClick={()=> SignUp}>
          <span>Get Started →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </Link>
        <Link href={"/Learn More"} className="text-inherit p-4">
                Learn More
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}


export default HeroImageSection