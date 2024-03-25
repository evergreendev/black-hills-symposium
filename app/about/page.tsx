import leftImg from "@/public/talking.jpg";
import northropBlue from "@/public/northrop-grumman-blue.png";
import ImageAndText from "@/app/components/ImageAndText";
import Agenda from "@/app/components/Agenda";
import Image from "next/image";
import Link from "next/link";

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
            <div className="max-w-screen-xl text-primary-900 mt-9">
                <ImageAndText img={leftImg}>
                    <div className="space-y-3.5">
                        <p>The Black Hills Defense and Industry Symposium is coming to The Box Elder Event Center, April
                            10-11, 2024. This annual event will bring leaders of academia, research, industry, the
                            military, the federal government, and the Black Hills community together for meaningful
                            dialogue highlighting the importance of collaborative relations in western South Dakota.
                            Leaders will discuss how attendees can contribute to solutions for stronger national defense
                            and bolstered regional economic development.</p>

                        <p>The 2024 Symposium will feature high-level discussions and breakout sessions regarding
                            PFOS/PFOA, critical minerals, Small Business Innovation Research (SBIR), partnerships
                            between prime and subcontractors, military family quality of life, along with important
                            information regarding the B-21 Raider. We encourage all Black Hills residents to register
                            and attend.</p>
                    </div>
                </ImageAndText>
                <div className="space-y-3.5 lg:text-lg p-4 md:p-0 mb-5">
                    <p>Day 1 (April 10) will kick off at 8:30 a.m., starting with a technical seminar focused on
                        PFOS/PFOA. At 1 p.m., a separate, simultaneous session will kick off featuring panels of
                        military and civilian experts who will participate in a war gaming simulation called The Perils
                        of Theater Nuclear Escalation. Following these opening sessions, the Symposium will feature a
                        high-level military speaker at 4:30 p.m. At 5 p.m., South Dakota School of Mines will host a
                        welcome reception for all attendees in the foyer of The Box Elder Events Center.</p>

                    <p>Day 2 (April 11) will feature general sessions in addition to16 different breakout session
                        offerings
                        throughout the day. Featured speakers include Congressman Dusty Johnson, Major General Mark
                        Morrell
                        (South Dakota National Guard Adjutant General), Lieutenant General Caroline Miller (Air Force
                        Deputy
                        Chief of Staff for Manpower, Personnel and Services), and Colonel Derek Oakley (Ellsworth Air
                        Force
                        Base Commander).</p>
                </div>

            </div>
            <div className="bg-primary-100 w-full flex justify-center p-12">
                <div className="max-w-screen-md w-full text-primary-900 text-xl">
                    <h2 className="font-bold text-5xl mb-3 font-serif">Mission</h2>
                    <p className="max-w-prose m-auto text-primary-500">
                        The Black Hills Defense & Industry Symposium is a 2-day long regional conference featuring
                        discussions around defense entrepreneurship, development, national security, military quality of
                        life, critical minerals, and local industry opportunities. We feature key leaders from the US
                        Congress, Department of Defense, US Air Force, National Guard, US Army Corps of Engineers, and
                        many
                        more. We expect approximately 500 attendees at this event. This is an opportunity to be a part
                        of a
                        premier event focused on the growing defense industry of the area.
                    </p>
                </div>
            </div>
            <Link href="https://www.northropgrumman.com/">
                <Image className="w-96 p-4" src={northropBlue} alt="Northrop Grumman"/>
            </Link>
            <div id="agenda" className="w-full flex justify-center px-12 bg-primary-900">
                <div className="text-primary-900 max-w-screen-xl bg-white p-7">
                    <Agenda/>
                </div>
            </div>
        </main>
    );
}
