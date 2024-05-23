
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import Login from "../Login/page";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-violet-100 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex max-w-4xl w-full">
        <div className="w-3/5 p-8">
          <div className="flex items-center space-x-2 mb-6">
            <FlagIcon className="text-[#6b7280] w-8 h-8" />
            <span className="font-bold text-black sm:text-xs md:text-xl lg:text-2xl">
              Sign Up
            </span>
          </div>
          <h1 className="font-bold mb-4 text-black sm:text-sm md:text-2xl lg:text-5xl">
            Create an account
          </h1>
          <p className="text-black mb-8 sm:text-sm md:text-xl lg:text-2xl">
            Sign up now and unlock exclusive access!
          </p>
          <form className="space-y-6">
            <Input
              placeholder="First Last"
              type="text"
              className="dark:bg-white"
            />
            <Input
              placeholder="you@email.com"
              type="email"
              className="dark:bg-white"
            />
            <Input
              placeholder="********"
              type="password"
              className="dark:bg-white"
            />
            <Button className="w-full dark:bg-blue-700 dark:text-white hover:text-black">
              Create Account
            </Button>
          </form>
          <div className="mt-4">
            <p className="text-black text-center py-1">
              Already have an Account
            </p>
            <Link href="/Login">
              <Button 
              className="w-full dark:bg-black dark:text-white hover:text-black"
              onClick={() => Login}
              >
              Login
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-2/5 flex justify-center items-center">
          <img
            alt="Illustration"
            className="max-w-full h-auto"
            height="400"
            src="https://images.unsplash.com/photo-1639182697243-9641e4b2f4b0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
      </div>
      {/* <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[#6b7280]">
        <a className="underline" href="#">
          Help@Sahayak.com
        </a>
      </footer> */}
    </div>
  );
}

function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

