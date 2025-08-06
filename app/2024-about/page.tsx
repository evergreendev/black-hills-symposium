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
import {dateItem} from "@/app/components/Agenda/Agenda";

export default function About() {
    const schedule: dateItem[] = [{
        date: "Wednesday, April 10, 2024",
        items: [
            {
                time: "7:30am",
                items: [
                    "Doors open"
                ]
            },
            {
                time: "7:30am - 5:00pm",
                items: [
                    "Event check-in & badge pick-up"
                ]
            },
            {
                time: "8:30am - 4:30pm",
                items: [
                    <div key="gen-ses"><span className="font-bold">PFOS/PFOA Technical Seminar</span> - Lancer Salon C/D</div>
                ]
            },

            {
                time: "8:30am",
                items: [
                    "Welcome / Pledge of Allegiance"
                ]
            },
            {
                time: "8:40am",
                items: [
                    "PFOS/PFOA Technical Seminar*",
                    "Starting with technical presentations and discussions focused on PFOS/PFOA challenges locally and nationally. We will have experts from academia, government, and industry highlighting technologies, remediation, and local perspectives. Audience participation in the discussion will be intermixed during the event."
                ]
            },
            {
                time: "11:00am - 1:00pm",
                items: [
                    "Lunch on your own"
                ]
            },
            {
                time: "1:00pm - 4:30pm",
                items: [
                    "PFOS/PFOA Technical Seminar*"
                ]
            },
            {
                time: "1:00pm - 4:30pm",
                items: [
                    <div key="gen-ses"><span className="font-bold">The Perils of Theater Nuclear Escalation War Game</span> - Main Ballroom - Presented by South Dakota Ellsworth Development Authority</div>
                ]
            },
            {
                time: "1:00pm",
                items: [
                    "War Game* Kickoff",
                    <div key="ellis"><span className="font-bold">Brig. Gen. Jonathan Ellis</span>, USAF (Ret.) – Opening video – “The Watch”</div>,
                    <div key="gen-ses"><span className="font-bold">General Timothy Ray</span>, USAF (Ret.), President & Chief Executive Office, Business Executives for National Security - Main Ballroom</div>
                ]
            },
            {
                time: "1:15pm - 4:20pm",
                items: [
                    "War Game Begins",
                    <div key="gen-ses"><span className="font-bold">Dr. Christopher Yeaw</span>, PhD, Associate Executive Director for Strategic Deterrence and Nuclear Programs</div>,
                    "War Game Scenario: Based on a near-peer, nuclear-capable INDO-PACOM threat as the perils inherent in theater nuclear employment based on a real-world threat with realistic “Blue Team” inputs. This exercise will be the realization of how vulnerable our nation may be in confronting an adversary that can capably execute nuclear escalation."
                ]
            },
            {
                time: "4:30pm",
                items: [
                    "Opening General Session - Main Ballroom",
                    <div key="gen-ses"><span className="font-bold">Brig. Gen. Gentry W. Boswell</span>, USAF (Ret.), Vice President of Defense Industry Operations at VRC Metal Systems</div>
                ]
            },
            {
                time: "5:00pm - 7:00pm",
                items: [
                    "South Dakota Mines Social- Foyer",
                ]
            }
        ]
    },
        {
            date: "",
            items: [
                {
                    time: "",
                    items: [
                        <div key="*">* <span className="font-bold">Simultaneous, in-depth sessions.</span></div>
                    ]
                }
            ]
        },
        {
            date: "Thursday, April 11, 2024",
            items: [
                {
                    time: "6:30am",
                    items: [
                        "Doors open"
                    ]
                },
                {
                    time: "7:00am",
                    items: [
                        "Networking/Coffee Social - Foyer"
                    ]
                },
                {
                    time: "8:00am",
                    items: [
                        "General Session - Main Ballroom",
                        "Welcome",
                        <div key="dusty"><span className="font-bold">Congressman Dusty Johnson</span>, via video</div>,
                        <div key="mark"><span className="font-bold">Major General Mark Morrell</span>, SDNG Adjutant General</div>
                    ]
                },
                {
                    time: "9:00am",
                    items: [
                        "Track Session A"
                    ]
                },
                {
                    time: "10:00am",
                    items: [
                        "Connection Break - Foyer"
                    ]
                },
                {
                    time: "11:00am",
                    items: [
                        "Track Session B"
                    ]
                },
                {
                    time: "12:00pm",
                    items: [
                        <div key="chow"><span className="font-bold">Black Hills MAC Chow Hall Luncheon</span> - Main Ballroom</div>,
                        "Social & buffet lunch",
                        <div key="welcome">Welcome: <span className="font-bold">Tim Houghton</span>, HS Precision, CFO, Black Hills Symposium Chair</div>,
                        <div key="nancy">Featured Speaker: <span className="font-bold">Nancy Balkus</span>, P.E., Deputy Assistant Secretary of the Air Force for
                            Environment, Safety and Infrastructure, Headquarters USAF</div>,
                        <div key="caroline">Featured Speaker: <span className="font-bold">Lt Gen Caroline Miller</span>, Deputy Chief of Staff for Manpower Personnel and
                            Services, Headquarters USAF</div>

                    ]
                },
                {
                    time: "1:30pm",
                    items: [
                        "Track Session C"
                    ]
                },
                {
                    time: "2:30pm",
                    items: [
                        "Track Session D"
                    ]
                },
                {
                    time: "3:30pm",
                    items: [
                        "General Session - Main Ballroom",
                        <div key="*"><span className="font-bold">Sean Jackson</span> VP, B-21 Program Manager, Northrop Grumman</div>,
                        "B21 Raider Update",
                        <div key="derek"><span className="font-bold">Col. Derek Oakley</span>, 28th Bomb Wing Commander - Main Ballroom</div>
                    ]
                },
                {
                    time: "4:00pm - 5:00pm",
                    items: [
                        "Social - Presented by Elevate Rapid City & HS Precision - Foyer",
                        "Prize Drawings"
                    ]
                },
                {
                    time: "5:30pm",
                    items: [
                        "Tours depart",
                        "South Dakota School of Mines & Technology, Cold Spray Lab Tour\n",
                        "Mt. Rushmore & Dinner Tour"
                    ]
                }
            ]
        }
    ];

    const trackSessions = [
        {
            title: "Critical Minerals",
            items: [
                {
                    time: "9:00",
                    title: "Applied Research"
                },
                {
                    time: "11:00",
                    title: "Workforce"
                },
                {
                    time: "1:30",
                    title: "Commercialization"
                },
                {
                    time: "2:30",
                    title: "Policy"
                }
            ]
        },
        {
            title: "PFOS/PFOA",
            items: [
                {
                    time: "9:00",
                    title: "Rural Water Systems"
                },
                {
                    time: "11:00",
                    title: "Innovation — R&D, Technology, Transfer & Opportunities"
                },
                {
                    time: "1:30",
                    title: "Collaboration — Government, Industry, Academic Partnerships"
                },
                {
                    time: "2:30",
                    title: "Military Construction, PFAS, Sustainability"
                }
            ]
        },
        {
            title: "Innovation/Doing Business with the Air Force & Quality of Life",
            items: [
                {
                    time: "9:00",
                    title: "Innovation - Small Business Innovation Research Projects"
                },
                {
                    time: "11:00",
                    title: "Contracting with the Government - Small Businesses - Commodities and Services"
                },
                {
                    time: "1:30",
                    title: "Quality of Life -Family Programs (childcare, housing, etc)"
                },
                {
                    time: "3:00",
                    title: "Quality of Life - Employment Opportunities for Military Community & Businesses"
                }
            ]
        },
        {
            title: "Partnering with the DOD/General Contractor",
            items: [
                {
                    time: "9:00",
                    title: "Design & Construction Opportunities"
                },
                {
                    time: "11:00",
                    title: "AI & BIM — What it means for A/Es and Contractors"
                },
                {
                    time: "1:30",
                    title: "Match Making Opportunities (DOD, Primes)"
                }
            ]
        }
    ]

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
                        <p>The Black Hills Defense and Industry Symposium is coming to The Box Elder Events Center, April
                            8-9, 2026. This annual event will bring leaders of academia, research, industry, the
                            military, the federal government, and the Black Hills community together for meaningful
                            dialogue highlighting the importance of collaborative relations in western South Dakota.
                            Leaders will discuss how attendees can contribute to solutions for stronger national defense
                            and bolstered regional economic development.</p>

                        <p>The 2026 Symposium will feature high-level discussions and breakout sessions regarding
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
            {/*<Link href="https://www.northropgrumman.com/">
                <Image className="w-96 p-4" src={northropBlue} alt="Northrop Grumman"/>
            </Link>*/}
            <div id="agenda" className="w-full flex justify-center px-12 bg-primary-900">
                <div className="text-primary-900 max-w-screen-xl bg-white p-7">
                    <Agenda trackSessions={trackSessions} schedule={schedule}/>
                </div>
            </div>
        </main>
    );
}
