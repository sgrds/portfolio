import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  SiCanva,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAdobephotoshop,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import ScrollSkills from "./ScrollSkills";

const Skills = () => {
  return (
    <>
      <Navbar page={"My Skills"} />
      <section className="mx-4 border-y border-primary p-2 mb-8">
        <ScrollSkills />
      </section>
      <section className="mx-4 grid md:grid-cols-2 gap-4">
        <div className="w-full grid justify-center">
          <Image
            src="/hire2.png"
            className="block"
            alt="poster"
            width={620}
            height={900}
            loading="lazy"
          />
        </div>
        <div>
          <div className="grid justify-center">
            <Image
              src="/banner.png"
              className="mb-4"
              alt="poster"
              width={620}
              height={300}
              loading="lazy"
            />
          </div>
          <div className="bg-[#AEA79E] pb-6 px-2">
            <h1 className="text-4xl font-medium my-6">TOOLS FOR DESIGNING</h1>
            <div className="text-xl font-medium text-primary grid grid-cols-2 md:grid-cols-3 gap-2 border-b border-primary pb-6">
              <h3>
                <SiCanva className="inline-block text-xl" /> CANVA
              </h3>
              <h3>
                <SiAdobephotoshop className="inline-block text-xl" /> PHOTOSHOP
              </h3>
              <h3>
                <FiFigma className="inline-block text-xl" /> FIGMA
              </h3>
            </div>
            <h1 className="text-4xl font-medium my-6 ">
              TOOLS FOR DEVELOPEMENT
            </h1>
            <div className="mt-4 text-xl font-medium text-primary gap-2 grid grid-cols-2 md:grid-cols-3">
              <h3>
                <TbBrandNextjs className="inline-block text-xl" /> NEXT.JS
              </h3>
              <h3>
                <SiTailwindcss className="inline-block text-xl" /> TAILWINDCSS
              </h3>
              <h3>
                <FaNodeJs className="inline-block text-xl" /> NODE.JS
              </h3>
              <h3>
                <FaReact className="inline-block text-xl" /> REACT.JS
              </h3>
              <h3>
                <SiExpress className="inline-block text-xl" /> EXPRESS.JS
              </h3>
              <h3>
                <SiMongodb className="inline-block text-xl" /> MONGO_DB
              </h3>
              <h3>
                <SiJavascript className="inline-block text-xl" /> JAVA SCRIPT
              </h3>
              <h3>
                <SiCss3 className="inline-block text-xl" /> CSS
              </h3>
              <h3>
                <SiHtml5 className="inline-block text-xl" /> HTML
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
