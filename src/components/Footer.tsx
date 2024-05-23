import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white dark:bg-black dark:text-white">
      <div className="container grid md:gap-6 lg:grid-cols-2 xl:gap-8">
        <div className="flex items-center gap-2">
          <FlagIcon className="w-8 h-8" />
          <p className="text-sm font-semibold">Sahayak Inc</p>
        </div>
        <div className="grid max-w-sm gap-2 text-sm sm:max-w-none sm:grid-cols-2 md:text-base lg:gap-4 lg:grid-cols-4">
          <div className="flex flex-col gap-1">
            <Link className="font-medium" href="#">
              Home
            </Link>
            <Link className="font-medium" href="#">
              Features
            </Link>
            <Link className="font-medium" href="#">
              Pricing
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="font-medium" href="#">
              Blog
            </Link>
            <Link className="font-medium" href="#">
              About
            </Link>
            <Link className="font-medium" href="#">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="font-medium" href="#">
              FAQ
            </Link>
            <Link className="font-medium" href="#">
              Support
            </Link>
            <Link className="font-medium" href="#">
              Terms
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="font-medium" href="#">
              Twitter
            </Link>
            <Link className="font-medium" href="#">
              Instagram
            </Link>
            <Link className="font-medium" href="#">
              GitHub
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:col-start-2 md:gap-2">
          <p className="text-sm">Sign up for our newsletter to get the latest updates</p>
          <div className="flex max-w-md w-full">
            <Input className="max-w-xs flex-1 mr-2 sm:max-w-sm" placeholder="Enter your email" type="email" />
            <Button size="sm">Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
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
