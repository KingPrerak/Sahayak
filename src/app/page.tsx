// import Banner from "@/components/Banner";
// import CustomerReview from "@/components/CustomerReview";
// import FeatureScrollSection from "@/components/FeatureScrollSection";
import { Footer } from "@/components/Footer";
import HeroImageSection from "@/components/HeroImageSection";
import Navbar from "@/components/Navbar";
// import PricingCards from "@/components/PricingCards";
// import ScrollSection from "@/components/ScrollSection";
import SignUpEffect from "@/components/SignUpEffect";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Banner/> */}
      <Navbar/>
      <HeroImageSection/>
      {/* <ScrollSection/> */}
      {/* <FeatureScrollSection/> */}
      {/* <CustomerReview/> */}
      {/* <PricingCards/> */}
      <SignUpEffect/>
      <Footer/>
    </div>
  );
}
