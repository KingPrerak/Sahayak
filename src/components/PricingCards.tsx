// "use client";
// import React from "react";
// import { BackgroundGradient } from "./ui/background-gradient";
// import PricingData from "../data/pricing_cards.json";

// interface Price {
//   id: number;
//   title: string;
//   price: string;
//   description: string;
//   features: string;
//   dfeatures: string;
//   isFeatured: boolean;
// }

// export function PricingCards() {
//   const PricingDetails = PricingData.Pricing.filter(
//     (price: Price) => price.isFeatured
//   );

//   return (
//     <div className="pt-10 bg-violet-100">
//       <div className="text-center">
//         <h1 className="text-black text-4xl uppercase md:text-4xl font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 p m-20">
//           Pricing
//         </h1>
//         <div className="">
//           <div className="grid gri-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
//             {PricingDetails.map((price: Price) => (
//               <div key={price.id} className="flex justify-center">
//                 <BackgroundGradient className="flex flex-col rounded-sm bg-black dark:bg-violet-100 overflow-hidden h-full max-w-sm">
//                   <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
//                     <p className="dark:text-black text-white text-2xl p-5 ">{price.title}</p>
//                     <p className="dark:text-black text-white  text-2xl p-2">{price.price}</p>
//                     <p className="dark:text-black text-white  text-xl p-1">{price.description}</p>
//                     <p className="dark:text-black text-white  text-xl p-1">{price.features}</p>
//                     <p className="dark:text-black text-white  text-xl p-1">{price.dfeatures}</p>
//                     <button className="dark:bg-black bg-violet-100 mt-5 w-full h-full rounded-md p-5">
//                     Sign Up Now
//                     </button>
//                   </div>
//                 </BackgroundGradient>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PricingCards;
