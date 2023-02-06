import Image from "next/image";
import Link from "next/link";
import Scroll from "./Scroll";

const Footer = () => {
  return (
    <>
      <Scroll />
      <footer className="mx-auto max-w-screen-xl bg-secondary text-primary py-8">
        <div className="mx-4 flex">
          <Link href="/">
            <Image
              src="/sagarCodes.svg"
              className="block"
              alt="sgr-ds-logo"
              width={120}
              height={30}
              loading="lazy"
            />
          </Link>
          <div className="flex justify-end grow">
            <ul className="flex text-2xl font-medium gap-4">
              <li>
                <Link href="/about">AboutMe</Link>
              </li>
              <li>
                <Link href="mailto:sagardasdev@gmail.com">Email</Link>
              </li>
              <li>
                <Link href="/">Behance</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
