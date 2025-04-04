// @ts-ignore
import registerNowImg from "../public/slider-images/19.JPG";
import agendaImg from "../public/agenda.jpg";
import exhibitorImg from "../public/exhibitor.jpg";
import hotelImg from "../public/hotel-info.jpg"
import gettingAroundImg from "../public/rushmore.jpg";
import speakerImg from "../public/tim.jpg";
import Link from "next/link";
import NavCard from "@/app/components/NavCard/NavCard";
import QuoteBlock from "@/app/components/QuoteBlock";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Black Hills Defense & Industry Symposium",
    description: "The Black Hills Defense and Industry Symposium is coming to The Box Elder Events Center, April 9 & 10, 2025. This annual event will bring leaders of academia, research, industry, military and the Black Hills communities together for meaningful dialogue on the importance of defense investment in western South Dakota. Leaders will discuss how attendees can contribute to solutions for stronger national defense and bolstered regional economic development."
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div className="max-h-full h-[1100px] w-full bg-hero bg-cover bg-center relative">
                <div className="absolute right-0 top-1/2 p-2 bg-primary-900 bg-opacity-80">
                    <h2 className="text-2xl"><span className="text-4xl font-bold">Maj. Gen. Mark Morrell<br/></span> South Dakota National Guard
                        <br/>2024 Black Hills Defense & Industry Symposium <br/>– Presented by Northrop Grumman</h2>
                </div>

                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                    <div className="p-4">
                        <h2 className="font-bold text-3xl lg:text-5xl mb-1 lg:mb-2 lg:uppercase">
                            Black Hills Defense
                            <br className="hidden sm:block"/>& Industry Symposium <span className="text-3xl block">– Presented by Northrop Grumman:</span>
                        </h2>
                        <h2 className="text-2xl lg:text-4xl">
                            Leading The National Defense Discussion
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center bg-gray-100 text-primary-600 p-4 lg:px-10">
                        <h3 className="text-3xl mb-1 lg:text-5xl font-bold lg:mb-4">April 9 & 10, 2025</h3>
                        <Link className="text-2xl lg:text-3xl hover:bg-primary-100 transition-all"
                              href="https://www.google.com/maps/dir//The+Box+Elder+Events+Center,+631+Watiki+Way,+Box+Elder,+SD+57719/@44.0921733,-103.2723344,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x877d67e28838e8db:0x72d6c280514273be!2m2!1d-103.1460223!2d44.1000482?entry=ttu">
                            <h3 className="font-bold">The Box Elder Events Center</h3>
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
                            <p className="mb-4 font-bold font-serif text-3xl text-primary-600">The 2025 Black Hills Defense & Industry Symposium will bring together national, regional, and local leaders from industry, the military, and the community to explore the critical role of defense investments in western South Dakota.
                            </p>
                            <p className="mb-4 font-bold font-serif text-3xl text-primary-600">As a 2024 Great American Defense Community (GADC), the Black Hills Region continues to lead in military innovation and community partnerships. This symposium — hosted by the Black Hills Military Advisory Coalition (BHMAC) in partnership with Northrop Grumman — will highlight how defense investments strengthen both national security and local economies.
                            </p>
                            <p className="mb-4 font-bold font-serif text-3xl text-primary-600">Taking place April 9-10, 2025, in Box Elder, South Dakota, the event will feature insightful panel discussions, inspiring keynote speakers, and valuable networking opportunities, all focused on advancing collaboration between defense and industry.
                            </p>
                            <p className="mb-4 font-bold font-serif text-3xl text-primary-600">Don’t miss this opportunity to connect, collaborate, and contribute to the continued growth and strength of the Black Hills defense community.
                            </p>
                        </div>

                        <div className="flex flex-wrap">
                            <NavCard img={registerNowImg} title="Register Now"
                                     url="https://cvent.me/Ng2owB"/>
                            <NavCard img={agendaImg} title="Agenda" url="/about#agenda"/>
                            <NavCard img={exhibitorImg} title="Become an Exhibitor"
                                     url="https://web.cvent.com/event/01ba3404-86c0-4fbd-b440-56207415d30e/regProcessStep1:88a95a6f-8472-427b-a196-fd00ede978b2"/>
                            <NavCard img={hotelImg} title="Hotel Information"
                                     url="/hotel-information"/>
                            <NavCard img={gettingAroundImg} title="Getting Around"
                                     url="https://www.visitrapidcity.com/"/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl text-primary-900 mt-16 mb-16">
                <QuoteBlock img={speakerImg}>
                    <p className="text-xl mb-5">
                        “Welcome to the Black Hills Defense Symposium.
                        <br/>
                        <br/>
                        This event is designed to bring the best and the brightest from all over the country to the
                        Black Hills in order to solve the problems our current military faces. It is also to inform our
                        community of current events happening at our local bases and around the country. Esteemed
                        members from the United States military, research labs, colleges, elected officials, and
                        industry leaders come together to pool and share their knowledge with the public. Each year
                        hundreds of hours go into planning this event, with the end goal being attendees learning as
                        much as possible. We hope that you take the knowledge that you gain from this event, and utilize
                        it. Use it to improve your business, get government contracts, or further your research. Enjoy
                        your time at the symposium and your time in our beautiful community. There is a lot to offer
                        here so soak up as much as possible and we hope to see you at our future symposiums!”
                    </p>
                    <p className="text-xs font-bold">
                        Tim
                        Houghton,<br/> Vice President & Chief Operating Officer,<br/> H-S Precision
                    </p>
                </QuoteBlock>
            </div>
            <div className="bg-primary-100 p-16 w-full">
                <div className="flex justify-center w-full max-w-screen-lg mx-auto">
                    <iframe className="w-full aspect-video"
                            src="https://www.youtube.com/embed/XTRIucav8vk?si=bmW-SgXXJeIr1gvP"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </main>
    );
}
