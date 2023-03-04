import Link from "next/link";

// import { DonationSection, HeroSection } from "@/app/components/pages/HomePage";
import DonationSection from "../components/pages/HomePage/DonationSection";
import HeroSection from "../components/pages/HomePage/HeroSection";

// in the Homapage/index.tsx file
// we have

export default function Home() {
  return (
    <div className="page__container">
      <HeroSection />

      <DonationSection />
      {/* <main>
        <h2>What is Blood Donation App?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          accusantium amet natus perspiciatis laboriosam sed praesentium eum,
          perferendis deserunt quam, alias tenetur fuga. Ipsam provident
          perferendis, rerum inventore est saepe!
        </p>
      </main> */}
    </div>
  );
}
