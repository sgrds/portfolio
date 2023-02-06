"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Scroll = () => {
  return (
    <section className="mx-4 py-4 border-y border-primary mt-16">
      <Marquee gradient={false} speed={30} pauseOnClick={true}>
        <div className=" flex font-medium text-7xl">
          <h1>Need a website? | Get In Touch</h1>
          <div className="w-4 h-4" />

          <div className="text-secondary bg-primary px-2">
            <Link href="mailto:sagardasdev@gmail.com">EMAIL</Link>
          </div>
          <div className="w-4 h-4" />
        </div>
      </Marquee>
    </section>
  );
};

export default Scroll;
