import Image from "next/image";
import Header from "@/app/components/Header";
import heroImg from "../public/home-hero.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
      <Header/>
        <Image src={heroImg} alt="" className="w-full"/>
    </main>
  );
}
