import leftImg from "@/public/talking.jpg";
import northropBlue from "@/public/northrop-grumman-blue.png";
import ImageAndText from "@/app/components/ImageAndText";
import Agenda from "@/app/components/Agenda";
import Image from "next/image";
import Link from "next/link";
import oakley from "@/public/col-oakley.jpg"
import dusty from "@/public/dusty-johnson.jpg"
import boswell from "@/public/boswell.jpg"
import miller from "@/public/miller.jpg";
import morrell from "@/public/morrell.jpg";
import ray from "@/public/ray.jpg";
import yeaw from "@/public/yeaw.jpg";
import sean from "@/public/sean.jpg";

import BioSlider from "@/app/components/BioSlider";
import QuoteBlockCircle from "@/app/components/QuoteBlock/QuoteBlockCircle";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div
                className="max-h-full h-[800px] w-full bg-about bg-[right_-28vw_top_-2vw] sm:bg-right bg-cover relative">
                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                </div>
            </div>
            <div className="pl-2 w-full pb-4 pt-4 mt-auto mb-auto border-b-2 border-primary-300">
                <p className="font-bold font-sans text-4xl text-primary-600 text-center">2025 Schedule Coming Soon</p>
            </div>
        </main>
    );
}
