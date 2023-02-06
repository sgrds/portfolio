import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const AboutMe = () => {
  return (
    <>
      <Navbar page={"About Me"} />

      <section className="mt-8 lg:grid mx-4 grid-cols-3 divide-x divide-primary hidden ">
        <div className="grid divide-y divide-primary mr-0 md:mr-2">
          <div className="pb-4">
            <h1 className="text-5xl font-thin mb-2">Educational Background</h1>
            <p className="font-thin text-lg  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-medium first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              I graduated from University of Calcutta, with a Bachelor&#39;s
              degree in BSc Physics (Majors), but also have experience in design
              and full-stack development which I pursued in my free time. This
              combination of technical and creative skills makes me a versatile
              asset in various fields.
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-6xl font-thin mb-2">SKILLS</h1>
            <p className="font-thin text-lg  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-medium first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              As a full stack developer, I have a diverse set of skills in both
              front-end and back-end development. I enjoy solving complex
              problems and finding creative solutions to tasks. I take
              satisfaction in taking an idea from concept to completion. In my
              free time, I like to experiment with new technologies and
              frameworks. I take my work as a full stack developer seriously and
              am always looking for opportunities to learn and grow. The key to
              success in this field is hard work, creativity, and a constant
              drive for learning and growth.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="text-5xl font-thin mb-2">WORK EXPERIENCE</h1>

            <p className="font-thin text-lg  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-medium first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              As a full stack developer, I have honed my skills and honed my
              craft over the course of the past two years, ever since my second
              year in college. During this time, I have maintained an
              unrelenting drive for learning and personal growth, constantly
              seeking out new opportunities to challenge myself and expand my
              knowledge and expertise.
            </p>
            <p className="font-thin text-lg">
              In short, my time as a full stack developer has been a journey of
              continuous growth, learning, and professional development. I am
              proud of what I have achieved thus far, and I am eager to build on
              this foundation in the years to come, constantly pushing myself to
              become an even more skilled, knowledgeable, and accomplished
              developer.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-center text-3xl font-medium">
            SAGAR DAS <br />
            FULL-STACK DEVELOPER -CUM- DESIGNER
          </h1>
          <div className="w-full grid justify-center mt-6">
            <Image
              src="/wanted.png"
              alt="sgr-ds-logo"
              width={350}
              height={800}
              priority
            />
          </div>
          <div className="mx-0 md:mx-2 mt-8">
            <p className="font-thin text-lg  mb-4 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-medium first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              As a dedicated and motivated individual, I have been seeking
              opportunities to put my skills and experience to use through
              online gigs. However, due to my commitment to my college
              education, I have faced challenges in making the necessary
              connections to secure such work. Despite this setback, I am
              determined to make my mark in the field of web development and am
              eager to demonstrate my ability to deliver top-quality results.
            </p>
            <p className="font-thin text-lg mb-4">
              With my solid foundation in front-end technologies as well as
              back-end technologies, I am confident in my ability to create
              robust and scalable web applications. My passion for delivering
              quality work, combined with my proactive and innovative approach
              to problem-solving, makes me a valuable asset to any project.
            </p>
            <p className="font-thin text-lg mb-4">
              As a freelancer, I have honed my skills in delivering projects
              that meet and exceed client expectations, and I am eager to bring
              this same level of dedication and professionalism to any future
              gig opportunities. If you or anyone you know is in need of a
              talented and reliable web developer, I would be honored to be
              considered as a potential candidate.
            </p>
          </div>
        </div>
        <div className="grid divide-y divide-primary pl-0 md:pl-2">
          <div className="pb-4">
            <h1 className="text-5xl font-thin mb-2">INDUSTRIAL EXPERIENCE</h1>
            <p className="font-thin text-lg  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-medium first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              As a Full Stack Developer with over two and a half months of
              industrial experience at{" "}
              <Link
                href="https://skynox.tech/"
                className="italic underline hover:cursor-pointer font-bold"
              >
                skynox.tech
              </Link>
              , I have honed my skills in creating robust and scalable web
              applications. My expertise spans across various front-end
              technologies as well as back-end technologies. In addition to my
              work experience, I have also worked as a freelancer for over a
              year, where I have delivered top-notch design and website
              development solutions to clients. With a keen eye for detail and a
              passion for delivering quality work, I am confident in my ability
              to exceed expectations and bring value to any project.
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-6xl font-thin mb-2">Interest</h1>
            <p className="font-thin text-lg  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-medium first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              In addition to my expertise in Full Stack Development, I am also
              driven by a passion for exploring new and innovative technologies.
              I am particularly interested in Game Development and Video
              Editing, which I plan to delve into further in the future. I am
              fascinated by the power of the Unreal Engine to create immersive
              gaming experiences and am eager to learn more about this platform.
              Furthermore, my interest in Video Editing stems from my desire to
              craft engaging and visually stunning content that captivates and
              informs audiences. I believe that combining my technical skills
              with my creative interests will allow me to unleash my full
              potential and make a positive impact in the field.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="text-6xl font-thin mb-2">HOBBY</h1>

            <p className="font-thin text-lg  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-medium first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              In my leisure time, I am an avid enthusiast of light novels,
              manga, and anime. These mediums provide a captivating escape from
              the realities of everyday life, allowing me to immerse myself in a
              world of imagination and adventure. Whether it be through reading
              the latest light novel or watching the latest anime release, I am
              constantly drawn to the unique and dynamic characters and the
              compelling stories that they are a part of. I find that these
              forms of entertainment not only provide hours of entertainment but
              also serve as a source of inspiration, fueling my creativity and
              imagination. As a fan of these mediums, I am always eager to chat
              and discuss my latest discoveries and recommendations with
              like-minded individuals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
