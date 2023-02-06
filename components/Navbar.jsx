import Image from "next/image";
import Link from "next/link";

const Navbar = ({ page }) => {
  return (
    <>
      <nav className="flex flex-row items-center px-4 py-2">
        <Link href="/">
          <Image
            src="/sagarCodes.svg"
            className="hidden md:block"
            alt="sgr-ds-logo"
            width={120}
            height={30}
            priority
          />
        </Link>
        <div className="grow grid justify-center">
          {page ? (
            <div className="grow grid justify-center">
              <h1 className="font-black text-3xl">{page}</h1>
            </div>
          ) : (
            <Image
              src="/portfolio.svg"
              alt="portfolio"
              width={120}
              height={30}
              priority
            />
          )}
        </div>

        <div className="border font-medium border-primary py-0.5 px-2 text-xs">
          <h1>
            &#34;Empowering Digital
            <br />
            Experiences,
            <br />
            Innovatively.&#34;
          </h1>
        </div>
      </nav>
      <div className="flex border-primary border-t-2 border-b-2 mx-4 py-0.5 font-bold md:text-sm">
        <h1 className="grow italic">
          <Link href="/projects">Projects</Link>
        </h1>
        <div className="grow text-center hidden md:block">
          <h1>Kolkata, India</h1>
        </div>
        <h1 className="grow italic text-right">
          <Link href="/about">About Me</Link>
        </h1>
      </div>
      <h2 className="font-bold italic text-center text-xs mb-2 md:mb-6">
        ( Empowering businesses with custom web solutions )
      </h2>
    </>
  );
};

export default Navbar;
