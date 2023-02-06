import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="px-4 mb-10">
        <h1 className="flex flex-row justify-between md:text-3xl font-bold">
          <span>E</span>
          <span>M</span>
          <span>P</span>
          <span>O</span>
          <span>W</span>
          <span>E</span>
          <span>R</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>{"  "}</span>
          <span>B</span>
          <span>U</span>
          <span>S</span>
          <span>I</span>
          <span>N</span>
          <span>E</span>
          <span>S</span>
          <span>S</span>
          <span>{"  "}</span>
          <span>W</span>
          <span>I</span>
          <span>T</span>
          <span>H</span>
          <span>{"  "}</span>
          <span>C</span>
          <span>U</span>
          <span>S</span>
          <span>T</span>
          <span>O</span>
          <span>M</span>
        </h1>
        <div className="bg-primary text-center px-2 py">
          <h1 className="flex flex-row justify-between text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-secondary font-black">
            <span>W</span>
            <span>E</span>
            <span>B</span>
            <span>{"  "}</span>
            <span>S</span>
            <span>O</span>
            <span>L</span>
            <span>U</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </h1>
        </div>
        <div>
          <h1 className="text-3xl text-center font-bold italic">
            Crafting innovative, user-friendly web experiences that deliver
            results
          </h1>
        </div>
      </section>
      <section className="mx-4 grid grid-cols-1 md:grid-cols-3 mb-16">
        <div className="col-span-1 md:pr-4 md:border-primary md:border-r mb-6 md:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center md:text-left">
            FULL STACK DEVELOPER -CUM- DESIGNER
          </h1>
          <div className="grid justify-center">
            <Image
              src="/com3.png"
              alt="sgr-ds-logo"
              className="border border-primary mb-6"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
          <p className="text-3xl font-medium first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-medium first-letter:text-primary first-letter:mr-3 first-letter:float-left">
            I&#39;m a full-stack developer with a passion for UI/UX and
            typography. I bring ideas to life with front-end and back-end
            skills, constantly learning and growing in my field.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 grid justify-center md:ml-4 border-t border-primary md:border-t-0">
          <Image
            src="/com2.png"
            className="border border-primary  mb-6 mt-10 md:mt-0 "
            alt="sgr-ds-logo"
            width={800}
            height={500}
            loading="lazy"
          />
          <h1 className="text-5xl md:text-[4.2rem] font-bold text-center md:text-left">
            Delivering innovative that exceed expectations. Providing
            exceptional, cutting-edge solutions.
          </h1>
        </div>
      </section>
      <section className="px-4 mb-8 md:flex">
        <div>
          <div className="text-secondary bg-primary py-6 px-2 text-center lg:text-left">
            <h1 className="text-7xl md:text-7xl lg:text-[7.3rem] font-black">
              WEB Developer
            </h1>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black  text-center md:text-left">
            & Designer
          </h1>
        </div>
        <div className="ml-4">
          <Image
            src="/stamp.png"
            className="border border-primary hidden lg:block"
            alt="sgr-ds-logo"
            width={280}
            height={303}
            loading="lazy"
          />
        </div>
      </section>
      <section className="flex mx-4 pt-8 border-t border-primary mb-8">
        <div className="grid md:grid-cols-12">
          <div className="md:border-r md:border-primary md:col-span-7">
            <h1 className="tracking-tight text-6xl font-black mb-6">
              SKILLS & TECHNICAL EXPERIENCE
            </h1>
            <p className="text-4xl font-medium mb-4 line-clamp-2">
              Skilled in software development and design, utilizing advanced
              tools.
            </p>
            <p className="text-2xl mb-2">To know more:</p>
            <Link href="/skills">
              <button className="text-3xl border-2 border-primary border-dashed font-black decoration-dashed px-4 py-2 mb-8 md:mb-0">
                Click Here
              </button>
            </Link>
          </div>
          <div className="md:ml-4 border-primary border-t md:border-none pt-8 md:pt-0  md:col-span-5">
            <h1 className="tracking-tight text-6xl font-black mb-6">
              CHECK LATEST PROJECTS
            </h1>
            <p className="text-4xl font-medium mb-4 line-clamp-2">
              Innovative project featuring cutting-edge technology and design.
            </p>
            <p className="text-2xl mb-2">To know more:</p>
            <Link href="/projects">
              <button className="text-3xl border-2 border-primary border-dashed font-black decoration-dashed px-4 py-2 mb-8 md:mb-0">
                Click Here
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-4 flex">
        <div className="lg:mr-4">
          <div className="grid grid-cols-12 gap-4 mb-4">
            <Image
              src="/illustrationside.png"
              className="border border-primary col-span-5"
              alt="pic"
              width={280}
              height={237}
              loading="lazy"
            />
            <Image
              src="/need.svg"
              className="col-span-7"
              alt="need"
              width={373}
              height={237}
              loading="lazy"
            />
          </div>
          <Image
            src="/website.svg"
            className="h-auto w-auto"
            alt="website"
            width={670}
            height={305}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src="/illustrationsquare.png"
            className="border border-primary hidden lg:block px-1 pb-1"
            alt="illustration"
            width={540}
            height={560}
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
