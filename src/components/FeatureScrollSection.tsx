// "use client";
// import React from "react";
// import { StickyScroll } from "./ui/sticky-scroll-reveal";
// import Image from "next/image";

// const content = [
//   {
//     title: "Seamless Scheduling",
//     description:
//       "Our platform offers easy appointment scheduling, syncing with users' calendars for added convenience.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
//         <Image
//           src="/schedules.jpeg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Secure Transactions",
//     description:
//       "We prioritize the safety of transactions, providing a secure payment gateway for all service-related financial interactions.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/trans.jpeg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Dedicated Support",
//     description:
//       "Our platform is backed by a dedicated support team, ensuring that users and service providers receive timely assistance when needed.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         <Image
//           src="/support.jpeg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Personalized Profiles",
//     description:
//       "Users and service providers have detailed profiles, allowing for transparent interactions and informed decisions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//          <Image
//           src="/profiles.jpeg"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
// ];
// export function FeatureScrollSection() {
//   return (
//       <div className="bg-violet-100 dark:bg-black">
//         <h1 className="text-black dark:text-white text-4xl uppercase md:text-4xl font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 pt-20 text-center">Features that Make Life Easier</h1>
//         <p className="dark:text-white text-black  mt-20 md:mt-0 bg-clip-text pb-10 pt-5 text-center">Our platform is designed to put the<br></br> power of on-demand services in your hands.<br></br> Here are some of the key features that make our platform stand out:</p>
//         <StickyScroll content={content} />
//         </div>
//   );
// }

// export default FeatureScrollSection;
