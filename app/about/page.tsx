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

                    <p>Day 2 (April 11) will feature general sessions in addition to 16 different breakout session
                        offerings
                        throughout the day. Featured speakers include Congressman Dusty Johnson, Major General Mark
                        Morrell
                        (South Dakota National Guard Adjutant General), Lieutenant General Caroline Miller (Air Force
                        Deputy
                        Chief of Staff for Manpower, Personnel and Services), Sean Jackson (VP, B-21 Program Manager, Northrop Grumman), and Colonel Derek Oakley (Ellsworth Air
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
            <div className="bg-primary-200 w-full flex justify-center p-12">
                <div className="max-w-screen-xl w-full text-primary-900 mt-16 mb-16">
                    <BioSlider>
                        <div className="mt-8 mb-12">
                            <QuoteBlockCircle img={dusty}>
                                <h2 className="font-bold text-3xl mb-4">Dusty Johnson</h2>
                                <p className="text-lg">Dusty Johnson brings an energetic and optimistic leadership style
                                    to Washington as South Dakota’s lone voice in the U.S. House of Representatives. As
                                    a “policy guy,” he works hard to be a knowledgeable and value-added member on issues
                                    related to his committee assignments: Agriculture, Transportation & Infrastructure,
                                    and the Select Committee on China.
                                </p>
                            </QuoteBlockCircle>
                        </div>
                        <div className="mt-8 mb-12">
                            <QuoteBlockCircle img={sean}>
                                <h2 className="font-bold text-3xl mb-4">Sean Jackson, VP, B-21 Program Manager, Northrop
                                    Grumman</h2>
                                <p className="text-lg">Sean Jackson is Northrop Grumman Aeronautics Systems’ VP and B-21
                                    program manager. With over 30 years of experience, including a distinguished Air
                                    Force career, he oversees the production of advanced aeronautics systems, driving
                                    innovation to meet contract commitments.
                                </p>
                            </QuoteBlockCircle>
                        </div>
                        <div className="mt-8 mb-12">
                            <QuoteBlockCircle img={boswell}>
                                <h2 className="font-bold text-3xl text-left mb-4">Brig. Gen. Gentry W. Boswell, USAF
                                    (Ret.) - Vice
                                    President, Defense Industry Business Development VRC Metal Systems</h2>
                                <p className="text-lg">Brigadier General Gentry W. Boswell currently serves as a Senior
                                    Executive in the Defense Industry as a Vice President and also serves on multiple
                                    Corporate Boards. As a veteran he served over 31 years in the US Air Force with
                                    extensive leadership experience including two wing commands, two tours in the
                                    Pentagon and over 4,800 flight hours in various aircraft including over 500 hours of
                                    combat time. Brig Gen Boswell brings invaluable expertise to his role. Prior to
                                    this, he served in the Pentagon as the Director of Special Programs for the Air
                                    Force Plans and Programs Director on the Air Staff.
                                </p>
                            </QuoteBlockCircle>
                        </div>
                        <div className="mt-8 mb-12">
                            <QuoteBlockCircle img={miller}>
                                <h2 className="font-bold text-3xl text-left mb-4">Lt. Gen. Caroline Miller, HAF/A1</h2>
                                <p className="text-lg">Lt. Gen. Caroline Miller is the Deputy Chief of Staff for
                                    Manpower, Personnel, and Services at Headquarters U.S. Air Force in Arlington,
                                    Virginia. In this role, she oversees comprehensive plans and policies for military
                                    and civilian personnel management, including end strength, education, compensation,
                                    and worldwide Air Force services. With over two decades of experience, she has held
                                    various command and staff positions, including Commander of the 502nd Air Base Wing
                                    at Joint Base San Antonio, Texas.
                                </p>
                            </QuoteBlockCircle>
                        </div>

                        <div className="mt-8 mb-12">
                            <QuoteBlockCircle img={morrell}>
                                <h2 className="font-bold text-3xl text-left mb-4">Maj. Gen. Mark Morrell, SDNG</h2>
                                <p className="text-lg">Maj. Gen. (SD) Mark R. Morrell, the 23rd Adjutant General of the
                                    South Dakota National Guard, leads 4,300 Soldiers and Airmen in 21 communities. With
                                    a background as an F-16 Viper pilot, he brings over 20 years of military experience,
                                    including global deployments and leadership roles within the Air National Guard.
                                </p>
                            </QuoteBlockCircle>
                        </div>

                        <div className="mt-8 mb-12">
                            <QuoteBlockCircle img={oakley}>
                                <h2 className="font-bold text-3xl mb-4">Col. Derek C. Oakley</h2>
                                <p className="text-lg">Col. Derek C. Oakley commands the 28th Bomb Wing at Ellsworth Air
                                    Force
                                    Base, overseeing the
                                    largest B-1 combat wing in the U.S. Air Force with 12,000 personnel and families.
                                    With
                                    extensive flight experience, including over 3,400 hours, he provides combat-ready
                                    aircraft
                                    and crews for global missions. Col. Oakley has held various leadership positions and
                                    commanded the 28th Operations Group, contributing significantly to the Air Force’s
                                    top
                                    acquisition program, the B-21 Raider.</p>
                            </QuoteBlockCircle>
                        </div>

                        <div className="mt-8 mb-12">
                            <QuoteBlockCircle img={ray}>
                                <h2 className="font-bold text-3xl text-left mb-4">Gen. Timothy Ray, USAF (Ret.)</h2>
                                <p className="text-lg">General Timothy Ray, USAF (Ret.), a highly decorated Four-Star
                                    General, led Air Force Global Strike Command and Air Forces Strategic-Air at United
                                    States Strategic Command. He shaped Air Force modernization priorities and ensured
                                    operational readiness during the COVID pandemic. With extensive experience in joint
                                    military operations, he previously served as Deputy Commander of US European
                                    Command. General Ray holds advanced degrees in Aviation Sciences, Strategic Studies,
                                    and Human Factors Engineering, and is widely respected for his leadership.
                                </p>
                            </QuoteBlockCircle>
                        </div>

                        <div className="mt-8 mb-12">
                            <QuoteBlockCircle img={yeaw}>
                                <h2 className="font-bold text-3xl text-left mb-4">Dr. Christopher Yeaw</h2>
                                <p className="text-lg">Dr. Christopher Yeaw is the Associate Executive Director for
                                    Strategic Deterrence and Nuclear Programs at the National Strategic Research
                                    Institute (NSRI), part of the University of Nebraska and a U.S. Strategic Command
                                    University Affiliated Research Center (UARC). With a background spanning nuclear
                                    policy, defense programs, and academia, he brings extensive expertise to support
                                    U.S. government missions in strategic deterrence, nuclear issues, and counter-WMD
                                    efforts.
                                </p>
                            </QuoteBlockCircle>
                        </div>
                    </BioSlider>

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
