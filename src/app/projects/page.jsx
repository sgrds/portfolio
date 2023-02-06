import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <Navbar page="Projects" />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4 gap-4">
        <Card>
          <div className="">
            <div className="flex mb-4">
              <Image
                src="/m2.png"
                className="mr-2 rounded-full"
                alt="logo"
                width={50}
                height={50}
                priority
              />
              <div>
                <h1 className="font-bold text-2xl">medwayMedicare</h1>
                <h2 className="font-thin text-sm">Client: Arijit Paul(CEO)</h2>
              </div>
            </div>
            <p className="line-clamp-2 text-lg">
              A platform for purchasing medical equipment online, offering a
              wide selection of products, and fast shipping.
            </p>
          </div>
        </Card>
        <Card>
          <div className="">
            <div className="flex mb-4">
              <Image
                src="/ske.png"
                className="mr-2 rounded-full"
                alt="logo"
                width={50}
                height={50}
                priority
              />
              <div>
                <h1 className="font-bold text-2xl">SKumarEnterprise</h1>
                <h2 className="font-thin text-sm">Client: Shyamal Kumar Das</h2>
              </div>
            </div>
            <p className="line-clamp-2 text-lg">
              A sudo inventory management software to manage inventory
              efficiently.
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <div className="flex mb-4">
              <Image
                src="/logodark.svg"
                className="mr-2"
                alt="logo"
                width={50}
                height={50}
                priority
              />
              <div>
                <h1 className="font-bold text-2xl">My Portfolio</h1>
                <h2 className="font-thin text-sm">Client: NaN</h2>
              </div>
            </div>
            <p className="line-clamp-2 text-lg">
              Portfolio was developed to show my dev & designing skills to
              potential clients to get few gigs in freelancing platform.
            </p>
          </div>
        </Card>
      </section>
      <div className="grid justify-center mx-4 mt-4 bg-[#AEA79E]">
        <Image
          src="/hire.png"
          alt="hire"
          width={800}
          height={500}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Projects;
