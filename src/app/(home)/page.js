import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline text-red-300">Hello world!</h1>
  );
}
