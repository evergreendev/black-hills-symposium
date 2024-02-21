import registerNowImg from "../public/register-now.jpg";
import agendaImg from "../public/agenda.jpg";
import exhibitorImg from "../public/exhibitor.jpg";
import hotelImg from "../public/hotel-info.jpg"
import gettingAroundImg from "../public/rushmore.jpg";
import faqImg from "../public/faq.jpg";
import speakerImg from "../public/joseph-wright.jpg";
import theboxImg from "@/public/thebox.png"
import Link from "next/link";
import NavCard from "@/app/components/NavCard/NavCard";
import QuoteBlock from "@/app/components/QuoteBlock";
import {Metadata} from "next";
import Image from "next/image";


export const metadata: Metadata = {
    title: "Black Hills Defense & Industry Symposium",
    description: "The Black Hills Defense and Industry Symposium is coming to theBox, April 10 & 11, 2024. This annual event will bring leaders of academia, research, industry, military and the Black Hills communities together for meaningful dialogue on the importance of defense investment in western South Dakota. Leaders will discuss how attendees can contribute to solutions for stronger national defense and bolstered regional economic development."
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div className="max-h-full h-[1100px] w-full bg-hero bg-cover bg-center relative">
                <div className="absolute right-0 top-1/2 p-2 bg-primary-900 bg-opacity-80">
                    <h2 className="text-2xl"><span className="text-4xl font-bold">Senator Mike Rounds,<br/></span> 2023
                        Black Hills Defense & Industry Symposium</h2>
                </div>

                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                    <div className="p-4">
                        <h2 className="font-bold text-3xl lg:text-5xl mb-1 lg:mb-2 lg:uppercase">
                            Black Hills Defense <br className="hidden sm:block"/>
                            & Industry Symposium:
                        </h2>
                        <h2 className="text-2xl lg:text-4xl">
                            Leading The National Defense Discussion
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center bg-gray-100 text-primary-600 p-4 lg:px-10">
                        <h3 className="text-xl mb-1 lg:text-5xl font-bold lg:mb-4">April 10 & 11, 2024</h3>
                        <Link className="text-2xl lg:text-3xl hover:bg-primary-100 transition-all"
                              href="https://www.google.com/maps/dir//The+Box+Elder+Events+Center,+631+Watiki+Way,+Box+Elder,+SD+57719/@44.0921733,-103.2723344,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x877d67e28838e8db:0x72d6c280514273be!2m2!1d-103.1460223!2d44.1000482?entry=ttu">
                            <h3 className="font-bold">theBox</h3>
                            <h3>Box Elder, SD 57719</h3>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className="bg-primary-100 bg-logo bg-[length:40vw] bg-no-repeat bg-[-13%_31%] border-t-8 border-primary-200 w-full flex justify-center  border-b-2 shadow-lg mb-5">
                <div className="bg-primary-100 bg-opacity-70 w-full flex justify-center pt-20 pb-6">
                    <div className="max-w-screen-xl flex justify-between w-full flex-wrap p-8">
                        <div className="pl-2 w-full pb-1 pt-4 mb-14 border-b-2 border-primary-300">
                            <p className="max-w-screen-md font-bold font-serif text-3xl text-primary-600">Bringing
                                together
                                industry and military
                                leaders, as well as, Black Hills community members to
                                discuss the importance of defense investment in Western South Dakota.</p>
                        </div>

                        <div className="w-full flex justify-start">
                            <Link
                                className="flex-wrap group inline-flex items-center bg-primary-700 hover:bg-primary-600 transition-all mb-14 rounded-lg shadow-md overflow-hidden"
                                href="https://www.google.com/maps/dir//The+Box+Elder+Events+Center,+631+Watiki+Way,+Box+Elder,+SD+57719/@44.0921733,-103.2723344,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x877d67e28838e8db:0x72d6c280514273be!2m2!1d-103.1460223!2d44.1000482?entry=ttu">
                                <address className="text-primary-100 p-4 text-xl md:text-2xl">
                                    <span className="font-bold text-2xl md:text-4xl">The Box</span><br/>
                                    631 WaTiki Way<br/>
                                    Box Elder, SD 57719
                                </address>
                                <Image className="opacity-95 group-hover:opacity-100 transition-all" src={theboxImg}
                                       alt=""/>
                            </Link>
                        </div>

                        <NavCard img={registerNowImg} title="Register Now" url="/register-now"/>
                        <NavCard img={agendaImg} title="Agenda" url="/about#agenda"/>
                        <NavCard img={exhibitorImg} title="Become an Exhibitor" url="/support/exhibitor"/>
                        <NavCard img={hotelImg} title="Hotel Information"
                                 url="https://www.visitrapidcity.com/places-to-stay/hotels-and-motels/"/>
                        <NavCard img={gettingAroundImg} title="Things To Do"
                                 url="https://www.visitrapidcity.com/things-to-do/"/>
                        <NavCard img={faqImg} title="FAQ" url="/faq"/>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl text-primary-900 mt-16 mb-16">
                <QuoteBlock img={speakerImg}>
                    <p className="text-xl mb-5">
                        “We hope that you find great value in the exceptional presenters and content our planning
                        committee has worked so hard to deliver. This event will welcome business, academic, and
                        military leaders from our region and across the globe. We hope you dive right in and engage in
                        the exchange of ideas that have been planned, so that we can all benefit from your attendance. I
                        am certain, that this event will allow all who attend to gain a greater understanding of the
                        challenges our fighting women and men face, and how we as a community and country, can work
                        together to ensure lasting freedom.”
                    </p>
                    <p className="text-xs font-bold">
                        Joseph Wright, J.D.<br/>
                        Associate Vice President for Research Economic Development<br/>
                        South Dakota Mines
                    </p>
                </QuoteBlock>
            </div>
        </main>
    );
}
