import React from "react";

import Link from "next/link";
import { JSX, SVGProps } from "react";
import Navbar from "@/components/Navbar";

function Page() {
  return (
    <><Navbar /><div>
      <div className="w-full py-6 space-y-6">
        <section className="w-full py-6 space-y-3">
          <div className="container space-y-2 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About Us
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We're on a mission to make your life easier. Our platform
                connects you with trusted professionals who can take care of
                everyday tasks, so you can focus on what matters most. Whether
                you need a last-minute dog walker, a home cleaning service, or a
                handyman to fix that leaky faucet, we've got you covered.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-6 space-y-3">
          <div className="container space-y-2 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Team
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Meet the people behind the platform. Our team is dedicated to
                providing you with the best service possible. We're passionate
                about helping you save time and enjoy life, and we work hard to
                ensure that every experience is seamless and stress-free.
              </p>
            </div>
            <div className="grid max-w-5xl gap-6 mx-auto lg:grid-cols-2 xl:gap-10">
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Portrait"
                  className="rounded-full overflow-hidden ring-2 ring-gray-900/20"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Samantha Lee</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CEO & Founder
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Portrait"
                  className="rounded-full overflow-hidden ring-2 ring-gray-900/20"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Alex Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Head of Operations
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Portrait"
                  className="rounded-full overflow-hidden ring-2 ring-gray-900/20"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Emily Chen</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Customer Experience Manager
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Portrait"
                  className="rounded-full overflow-hidden ring-2 ring-gray-900/20"
                  height="150"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width="150" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold">Mike Thompson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lead Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              When you use our service, you can trust that you're getting
              quality and reliability. Here are a few reasons why our customers
              love us:
            </p>
            <ul className="grid max-w-sm gap-4 mx-auto sm:max-w-2xl md:gap-6 lg:grid-cols-2 lg:max-w-none lg:grid lg:gap-8 xl:gap-10">
              <li className="flex gap-4">
                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-primary-500" />
                Our team of professionals is vetted and experienced.
              </li>
              <li className="flex gap-4">
                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-primary-500" />
                We offer convenient scheduling and on-time service.
              </li>
              <li className="flex gap-4">
                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-primary-500" />
                Customer satisfaction is our top priority.
              </li>
              <li className="flex gap-4">
                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-primary-500" />
                Our platform is easy to use and provides peace of mind.
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Sign up today and experience the convenience of our service. Let
              us take care of the details, so you can enjoy life to the fullest.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Sign Up
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div></>
  );
}

function CheckCircleIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default Page;
