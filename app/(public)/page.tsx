import Link from "next/link";

// import { DonationSection, HeroSection } from "@/app/components/pages/HomePage";
import DonationSection from "@/app/components/pages/HomePage/DonationSection";
import HeroSection from "@/app/components/pages/HomePage/HeroSection";

// in the Homapage/index.tsx file
// we have

export default function Home() {
  return (
    <div className="page__container">
      <HeroSection />
      <DonationSection />
    </div>
  );
}
