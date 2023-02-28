import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__content__title">Blood Donation</h1>
          <h2 className="hero__content__subtitle">Be a Hero <i>Just like my tz</i></h2>
          <p className="hero__content__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            accusantium amet natus perspiciatis laboriosam sed praesentium eum,
          </p>
          <div className="hero__content__buttons">
            <Link href="/login" className="button__primary">
              Get Started
            </Link>
            <Link href="/about" className="button__secondary">
              Learn More
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="hero__image">
          <img src="/images/hero.jpg" alt="hero" />
        </div>
      </section>
      {/* hero end */}
      <main>
        <h2>What is Blood Donation App?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          accusantium amet natus perspiciatis laboriosam sed praesentium eum,
          perferendis deserunt quam, alias tenetur fuga. Ipsam provident
          perferendis, rerum inventore est saepe!
        </p>
      </main>
    </>
  );
}
