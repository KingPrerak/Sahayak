import Navbar from "@/components/Navbar"
import Link from "next/link"
import { JSX, SVGProps } from "react"

function Page() {
  return (
    <>
    <Navbar/>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="grid gap-4 text-center">
            <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
              Our Services
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored Solutions for Your Business</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              From design to development, our team of experts can help you achieve your goals and take your business to
              the next level.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <BrushIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Design Services
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our design team can help you create stunning visuals and user-friendly interfaces.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <CodeIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Development Services
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our development team can build custom web and mobile applications to meet your needs.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <BriefcaseIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Consulting Services
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our consultants can help you navigate complex business challenges and achieve your goals.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <BoltIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Digital Marketing
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our digital marketing experts can help you reach your target audience and grow your business online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-[240px_1fr]">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-2xl font-bold tracking-tight">Service Categories</h2>
            <div className="grid gap-2">
              <Link
                className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                href="#"
              >
                <span>Design</span>
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
              <Link
                className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                href="#"
              >
                <span>Development</span>
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
              <Link
                className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                href="#"
              >
                <span>Consulting</span>
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
              <Link
                className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                href="#"
              >
                <span>Digital Marketing</span>
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <BrushIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  UI/UX Design
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Crafting intuitive and visually appealing user experiences.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <BrushIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Branding
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Developing unique and memorable brand identities.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <CodeIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Web Development
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Building custom, responsive, and scalable web applications.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <CodeIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Mobile Development
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Crafting engaging and performant mobile applications.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <BriefcaseIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Business Consulting
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Helping businesses overcome challenges and achieve their goals.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <BriefcaseIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  IT Consulting
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Providing expert guidance on technology solutions and strategies.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <BoltIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  SEO
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Improving your online visibility and driving more organic traffic.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950">
              <div className="flex h-24 items-center justify-center bg-primary-50 p-6 dark:bg-primary-900">
                <BoltIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Social Media Marketing
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Crafting engaging social media campaigns to reach your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function BriefcaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function BrushIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


export default Page