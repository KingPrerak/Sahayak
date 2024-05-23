import React from "react";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/moving-border";
import Navbar from "@/components/Navbar";

function Page() {
  return (
    <>
      <>
        <Navbar />
      </>
      <div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  On-Demand Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Your needs, met instantly.
                </h2>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 p-5 mb-5">
                  Access a range of services whenever you need them. From
                  housekeeping to tech support, we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-2">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">Basic</h3>
                  <p className="text-2xl font-bold">$5</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Access to a variety of basic services.
                  </p>
                </div>
                <Button className="inline-flex h-10 items-center rounded-md border border-gray-200 bg-black px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 ">
                  <h1>Sign up</h1>
                </Button>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">
                    Premium
                  </h3>
                  <p className="text-2xl font-bold">$15</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Priority access to all services.
                  </p>
                </div>
                <Button className="inline-flex h-10 items-center rounded-md border border-gray-200 bg-black px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 ">
                  <h1>Sign up</h1>
                </Button>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">Pro</h3>
                  <p className="text-2xl font-bold">$25</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Unlimited access to all services.
                  </p>
                </div>
                <Button className="inline-flex h-10 items-center rounded-md border border-gray-200 bg-black px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 ">
                  <h1>Sign up</h1>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;
