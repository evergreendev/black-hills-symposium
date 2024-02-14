import Image from "next/image";
import Header from "@/app/components/Header";
import heroImg from "../public/home-hero.png"
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <Header/>
            <Image src={heroImg} alt="" className="w-full"/>
            <div className="w-full max-w-screen-xl bg-primary-800 bg-opacity-90 md:-translate-y-1/2 md:flex justify-between">
                <div className="p-4">
                    <h2 className="font-bold text-3xl lg:text-5xl mb-1 lg:mb-2">
                        Black Hills Defense <br className="hidden sm:block"/>
                        & Industry Symposium:
                    </h2>
                    <h2 className="text-2xl lg:text-4xl">
                        Leading The National Defense Discussion
                    </h2>
                </div>
                <div className="flex flex-col justify-center bg-gray-100 text-primary-600 p-4 lg:px-10">
                    <h3 className="text-xl mb-1 lg:text-3xl lg:mb-4">April 10 & 11, 2024</h3>
                    <Link className="text-2xl lg:text-3xl hover:bg-primary-100"
                        href="https://www.google.com/maps/dir/44.0800533,-103.2231634/The+Box+Elder+Events+Center,+631+Watiki+Way,+Box+Elder,+SD+57719/@44.0922571,-103.2314303,13z/data=!3m1!4b1!4m18!1m8!3m7!1s0x877d67e28838e8db:0x72d6c280514273be!2sThe+Box+Elder+Events+Center!8m2!3d44.1000482!4d-103.1460223!15sCgZ0aGVib3giA4gBAZIBC2V2ZW50X3ZlbnVl4AEA!16s%2Fg%2F11tg0drt7g!4m8!1m1!4e1!1m5!1m1!1s0x877d67e28838e8db:0x72d6c280514273be!2m2!1d-103.1460223!2d44.1000482?entry=ttu">
                        <h3 className="font-bold">theBox</h3>
                        <h3>Box Elder, SD 57719</h3>
                    </Link>

                </div>
            </div>
        </main>
    );
}
