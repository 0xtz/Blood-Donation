import Image from "next/image";
import Link from "next/link";

// img
import heroImg from "@/public/imgs/hero__section.svg";

function HeroSection() {
  return (
    <main className="hero">
      <div className="hero__content">
        <h1 className="hero__content__title">Donate Blood,</h1>
        <h1 className="hero__content__title red">Save lives.</h1>
        <p className="hero__content__desc">
          Join us in the fight against blood shortages and help save lives by
          donating blood today. Every donation makes a difference and has the
          power to change someone's life.
        </p>
        <div className="hero__content__buttons">
          <Link
            // @ts-ignore
            href="/auth/signup"
            className="button__primary">
            Be a Donor
          </Link>
          <Link
            // @ts-ignore
            href="/about"
            className="button__secondary">
            Learn More
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="hero__image">
        <Image src={heroImg} alt="hero" />
      </div>
    </main>
  );
}

export default HeroSection;
