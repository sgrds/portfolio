"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const ScrollSkills = () => {
  return (
    <Marquee gradientColor={[195, 188, 178]}>
      <div className="flex gap-4">
        <Image
          src="/icons/html5.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
        <Image
          src="/icons/canva.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
        <Image
          src="/icons/expressjs.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
        <Image
          src="/icons/css.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
        <Image
          src="/icons/figma.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
        <Image src="/icons/js.svg" alt="logo" width={60} height={30} priority />
        <Image
          src="/icons/mongodb.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
        <Image
          src="/icons/next.svg"
          alt="logo"
          width={55}
          height={30}
          priority
        />
        <Image
          src="/icons/nodejs.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
        <Image
          src="/icons/reactjs.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
        <Image
          src="/icons/tailwindcss.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
        <Image
          src="/icons/ubuntu.svg"
          alt="logo"
          width={120}
          height={30}
          priority
        />
      </div>
    </Marquee>
  );
};

export default ScrollSkills;
