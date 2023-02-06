import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="mx-4 py-2 grid lg:gap-8 md:gap-4 lg:flex font-black text-7xl md:text-8xl border-y border-primary mt-16 justify-center">
        <h1 className="font-bold">GetInTouch</h1>
        <div className="text-secondary bg-primary grid justify-center px-2">
          <h1>EMAIL</h1>
        </div>
      </section>
      <footer className="mx-auto max-w-screen-xl bg-secondary text-primary py-8">
        <div className="mx-4 flex">
          <Image
            src="/sagarCodes.svg"
            className="block"
            alt="sgr-ds-logo"
            width={120}
            height={30}
            loading="lazy"
          />
          <div className="flex justify-end grow">
            <ul className="flex text-2xl font-medium gap-4">
              <li>AboutMe</li>
              <li>Email</li>
              <li>Behance</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
