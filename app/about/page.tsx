import Image from "next/image";

import {dateItem} from "@/app/components/Agenda/AgendaExpandable";
import AgendaExpandable from "@/app/components/Agenda/AgendaExpandable";

export default function About() {

    const schedule: dateItem[] = [
        {
            date: "Wednesday, April 9, 2025",
            items: [
                {
                    time: "",
                    title: "General Session",
                    room: "Ellsworth A",
                    items: [
                        "Join us as we kick off our 2025 Symposium. You will get to hear from South Dakota National Guard Adjutant General, Major General Mark Morrell —The National Guard’s Evolving Role in Homeland Defense and Global Missions: Current Operations, Future Projections and Safeguarding State Critical Infrastructure"
                    ],
                },
                {
                    time: "",
                    title: "Breakout Session A",
                    items: [
                        {
                            title: "7 Key Challenges DoD Contractors Face in CMMC Certification",
                            room: "Ellsworth A",
                            items: [
                                "This session will explore seven key challenges DoD contractors face in achieving Cybersecurity Maturity Model Certification (CMMC). Anders Erickson is a Principal in the Risk Advisory Services group at Eide Bailly LLP. Topics include asset categorization, external service provider compliance, assessment objectives, regulatory timelines, and cost considerations. Attendees will gain insights into preparing for CMMC Level 2 certification, understanding assessment requirements, and managing associated costs effectively. Whether you're new to CMMC or have been working toward certification for years, this session will provide valuable insights and practical strategies to help you navigate the evolving CMMC landscape effectively."
                            ]
                        },
                        {
                            title: "Energy Infrastructure",
                            room: "Raider A/B",
                            items: [
                                <>
                                    <p>Featuring representatives from Black Hills Energy, West River Electric, and
                                        Rushmore Electric Power Co-op, join us for a panel discussion on our energy
                                        infrastructure and how it relates to national security. </p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-gray-800">West River Electric - Robert Raker, CEO</li>
                                        <li className="text-gray-800">Black Hills Energy - John Jorgenson, Chief
                                            Security
                                            Officer, Black Hills Energy
                                        </li>
                                        <li className="text-gray-800">Rushmore Electric Power Co-Op - Cory Trapp,
                                            Assistant General Manager
                                        </li>
                                    </ul>
                                </>
                            ]
                        },
                        {
                            title: "The Link Between Family Quality of Life & Force Readiness",
                            room: "Raider C/D",
                            items: [
                                <>
                                    <p>This fireside chat will explore the Five & Thrive initiative; a grassroots effort
                                        aimed at improving the quality of life for military families in five key areas:
                                        childcare, education, healthcare, housing, and spouse employment.</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-gray-800">Taylor Davis, Senior Director, Workforce
                                            Development & Partnerships, Elevate Rapid City
                                        </li>
                                        <li className="text-gray-800">Reese Niu (Moderator)
                                        </li>
                                    </ul>
                                </>
                            ]
                        }
                    ]
                },
                /*                {
                                    title: "General Session",
                                    room: "Ellsworth A",
                                    items: [
                                        "Local FBI - TBD"
                                    ]
                                },*/
                {
                    title: "General Session",
                    room: "Ellsworth A",
                    items: [
                        "Securing the Homeland – Arguably, National Defense is best achieved by taking a holistic approach. Hear from a DHS official on where we were, where we are, and where we are going on the homeland security front."
                    ]
                },

                {
                    title: "Networking Lunch",
                    room: "Ellsworth A",
                    items: [
                        "Featuring the premier of Newsweek’s B-1 Unconventional Series video. Recently, Newsweek Editor at Large, Naveed Jamali became the first journalist to film and fly in all three of the Air Force's bombers. He completed the trifecta in an Ellsworth B-1, for an episode of Newsweek's Unconventional, that he will be sharing exclusively at the Black Hills Defense & Industry Symposium. "
                    ]
                },

                {
                    title: "Breakout Session B",
                    items: [
                        {
                            title: "Cyber Security",
                            room: "Ellsworth A",
                            items: [
                                <>
                                    <p>
                                        This session will be led by two cyber security experts from the esteemed Dakota
                                        State University. Stacy Kooistra will talk about Dakota State Applied Research
                                        Corporation (DARC) and it’s work in the cybersecurity arena as well as the
                                        trends and potential risks in the cyber security realm. Dr. Brent Van Aartsen
                                        will cover cyber threats and what is on the horizon in this area.
                                    </p>
                                </>
                            ]
                        },
                        {
                            title: "Military Construction",
                            room: "Raider A/B",
                            items: [
                                <>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-gray-800">Lt Col David Kohlhepp - 28 CES/CC, Ellsworth AFB
                                        </li>
                                        <li className="text-gray-800">General (Ret) Paul Owen - Army Programs Director,
                                            HDR
                                        </li>
                                        <li className="text-gray-800">Marco Furlan-Kaneko - Deputy Chief, Military
                                            Design and Construction Division, AFCEC
                                        </li>
                                    </ul>
                                </>
                            ]
                        },
                        {
                            title: "Doing Business with the Government",
                            room: "Raider C/D",
                            items: [
                                <>
                                    <p>This session will provide information to businesses on what criteria they would
                                        need to meet in order to contract with/sell to the government. This would
                                        include certifications as well as prohibited sources/funding for components.</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-gray-800">David Goff - Director of Business Operations, 28
                                            CONS
                                        </li>
                                        <li className="text-gray-800">Maj Austin Clark - 28 CONS/CC</li>
                                        <li className="text-gray-800">Kallie Ruland - Business Development Manager,
                                            Elevate Rapid City
                                        </li>
                                    </ul>
                                </>
                            ]
                        }
                    ]
                },
                {
                    title: "Breakout Session C",
                    items: [
                        {
                            title: "Intersection of National Security & Foreign Trade",
                            room: "Ellsworth A",
                            items: [
                                "Foreign trade is a critical component of economic growth, but it also presents national security challenges. From supply chain vulnerabilities to foreign investment risks, businesses must navigate a complex landscape of policies and global pressures. This fireside chat will explore the intersection of national security and foreign trade, offering insights into how industries can adapt, innovate, and safeguard their operations. Jesse Fonkert, Deputy Commissioner for the South Dakota Governor’s Office of Economic Development, will sit down with Sam Brown from the U.S. Department of Commerce to discuss the impact of foreign trade on national security and what businesses need to know to stay resilient in a rapidly shifting global economy.",
                            ]
                        },
                        {
                            title: "Posturing Small Businesses for Small Business Innovation Contracts",
                            room: "Raider A/B",
                            items: [
                                <>
                                    <p>Get valuable tips and lessons on submitting Small Business Innovation Research &
                                        Small Business Technical Transfer Research Contracts.</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-gray-800">Beth Lambeth - Associate Vice President for
                                            Research
                                            Innovation and Entrepreneurship, South Dakota Mines
                                        </li>
                                        <li className="text-gray-800">Matt Klempay, Director, Business Development, SBIR
                                            Advisors, Inc.
                                        </li>
                                        <li className="text-gray-800">Lorie Vega - Deputy Commander, 28 Mission Support
                                            Group, Ellsworth AFB
                                        </li>
                                    </ul>
                                </>
                            ]
                        },
                        {
                            title: "Mining, Critical Minerals, and Munitions",
                            room: "Raider C/D",
                            items: [
                                <>
                                    <p>Learn how SD Mines and local companies are working together to shore up America’s
                                        munition and critical mineral infrastructure and supply chains.</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-gray-800">Rudra Mitra (Moderator) – Associate Professor,
                                            Department of Mining Engineering and Management, South Dakota Mines
                                        </li>
                                        <li className="text-gray-800">Brett Carlson - Assistant Professor, Department of
                                            Materials and Metallurgical Engineering, South Dakota Mines
                                        </li>
                                        <li className="text-gray-800">Andrea Brickey – Professor, Department of Mining
                                            Engineering and Management, SDM
                                        </li>
                                        <li className="text-gray-800">Ella Francis – Membership & Outreach Director,
                                            South Dakota Mineral Industries Association
                                        </li>
                                        <li className="text-gray-800">Ericka Amborn – Munitions Technology Development
                                            Program Manager, Applied Research Associates
                                        </li>
                                        <li className="text-gray-800">Matt Hanley – Applied Research Associates</li>
                                    </ul>
                                </>
                            ]
                        }
                    ]
                },
                {
                    title: "General Session",
                    room: "Ellsworth A",
                    items: [
                        "In this heavy-hitting, 2-for-1 session, you will get a real-time state of the base update from Ellsworth AFB leadership. Immediately following, Northrop Grumman’s Vice President over the B-21 Raider will wrap up our sessions with an update on and overview of the program.",
                        <>
                            <ul className="list-disc list-inside space-y-2">
                                <li className="text-gray-800">Col Brian Buschur - Commander, 28th Operations Group,
                                    Ellsworth AFB
                                </li>
                                <li className="text-gray-800">Nikki Kodama - Vice President, B-21 Production Strike,
                                    Northrop Grumman
                                </li>
                            </ul>
                        </>
                    ]
                },
                {
                    title: "South Dakota Mines Social",
                    room: "Foyer",
                    items: [
                        "Co-Hosted by H-S Precision",
                        "Unwind, network, and wrap up your day at our social sponsored by South Dakota Mines."
                    ]
                },

            ],
        },
        {
            date: "Thursday, April 10, 2025",
            items: [
                {
                    title: "General Session",
                    room: "Ellsworth A",
                    items: [
                        <>
                            <p>Kicking off Day 2 will be Lieutenant General (Retired) Kevin Kennedy. He is the previous
                                Commander of 16th Air Force (AF Cyber, Joint Force HQ Cyber). With the ever-increasing
                                cyber threat, understanding how the cyber realm applies to you is a critical component
                                of ensuring our national security. You don’t want to miss this chance to hear from one
                                of the world’s foremost cyber leaders.</p>
                        </>
                    ]
                },
                {
                    title: "General Session",
                    room: "Ellsworth Salon",
                    items: [
                        "Security & Innovation",
                        "Andrea Thompson - Dakota State Applied Research Corp"
                    ]
                },
                {
                    title: "Breakout Session D",
                    items: [
                        {
                            title: "The Threat of Drones and Mitigation TTPs",
                            room: "Ellsworth A",
                            items: [
                                "With recent headlines, undoubtedly many people understand drones pose a credible threat. Hear from one of the industry experts on drone technology and drone defense as he discusses the threat and what can be done to mitigate this threat.",
                                "Matt Dunlevy - President, National Defense Industrial Association, Northern Tier"
                            ]
                        },
                        {
                            title: "Creating Military Friendly Communities",
                            room: "Raider A/B",
                            items: [
                                <>
                                    <p>Every year, the Department of Defense, via the Defense Support Liaison Office,
                                        establishes a list of priority items impacting military families and their
                                        quality of life. Additionally, the Air Force has certain areas which they deem
                                        critical for future basing decisions. This session will bring awareness to the
                                        focus areas and basing criteria critical to our community posturing for
                                        new/expanded missions and safeguard against possible future BRACs.</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-gray-800">Lorie Vega - Deputy Commander, 28 Mission Support
                                            Group, Ellsworth AFB
                                        </li>
                                        <li className="text-gray-800">JoAnn Mulholland - School Liaison Program Manager,
                                            Ellsworth AFB
                                        </li>
                                        <li className="text-gray-800">Taylor Davis - Senior Director, Workforce
                                            Development & Partnerships, Elevate Rapid City
                                        </li>
                                        <li className="text-gray-800">Michelle Richart - Defense State Liaison Officer
                                        </li>
                                    </ul>
                                </>
                            ]
                        },
                        {
                            title: "Local Crisis Response",
                            room: "Raider C/D",
                            items: [
                                <>
                                    <p>A panel of presenters will discuss emergency response within the community,
                                        highlighting the collaboration between government agencies and local
                                        organizations. For Ellsworth, this includes mutual aid agreements for fire
                                        response, support from Explosive Ordnance Disposal Teams for bomb disposal
                                        calls, and the involvement of military working dogs at community events. The
                                        goal is to inform the community about how we partner with and support local
                                        emergency efforts.</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-gray-800">Thomas Thiele, Ellsworth Fire Department</li>
                                        <li className="text-gray-800">TSgt Scott Francisco, 28 CES/EOD</li>
                                        <li className="text-gray-800">Tyler Brown, Emergency Response/Readiness</li>
                                    </ul>
                                </>
                            ]
                        }

                    ]
                }
            ]
        }

    ];


    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div
                className="max-h-full h-[800px] w-full bg-about bg-[right_-28vw_top_-2vw] sm:bg-right bg-cover relative">
                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                </div>
            </div>
            <div id="agenda" className="w-full flex justify-center px-12 bg-primary-900">
                <div className="text-primary-900 max-w-screen-xl bg-white p-7">
                    <div className="space-y-4 mx-auto flex flex-col items-center p-2 bg-primary-100 mb-12">
                        <h2 className="font-bold text-xl">Attire Recommendations:</h2>
                        <div>
                            <span className="font-bold">Military:</span> UOD
                        </div>
                        <div>
                            <span className="font-bold">Civilian:</span> Business casual
                        </div>
                        <div>
                            <span className="font-bold">Panelist:</span> Business casual / UOD (military)
                        </div>
                        <div>
                            <span className="font-bold">Featured Speaker:</span> Business / Service Dress
                        </div>
                        <div>
                            <span className="font-bold">SD Mines Social:</span> Business casual / UOD (military)
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12">
                        <h2 className="col-span-full text-4xl font-bold text-center my-8 text-gray-800 uppercase">Speakers</h2>

                        {[
                            {
                                name: "Lt Gen (Retired) Kevin Kennedy",
                                position: "Vice President, Defense Strategy & Warfighting Integration (ManTech International)\n" +
                                    "Lieutenant General, USAF (Retired)",
                                image: "/speakers/kevin.jpg"
                            },
                            {
                                name: "Major Austin B. Clark",
                                position: "Deputy Chief of Contracting " +
                                    "Policy, Air Force Installation Contracting Center (AFICC),",
                                image: "/speakers/clark.jpeg"
                            },
                            {
                                name: "Andrea L. Thompson",
                                position: "CEO, DARC(Dakota State Applied Research Corporation)",
                                image: "/speakers/andrea.jpg"
                            },
                            {
                                name: "Col Brian Buschur",
                                position: "Commander, 28th Operations Group, Ellsworth AFB",
                                image: "/speakers/brian.jpg"
                            },
                            {
                                name: "Nikki Kodama",
                                position: "Vice President, B-21 Production Strike",
                                image: "/speakers/nikki.jpg"
                            },
                            {
                                name: "Major General Mark R. Morrell",
                                position: "South Dakota National Guard Adjutant General",
                                image: "/speakers/morrell.jpg"
                            },
                        ].map((speaker, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-64 h-64 relative">
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-xl object-top border border-gray-300 shadow"
                                    />
                                </div>
                                <span
                                    className="mt-4 text-center text-gray-800 font-bold text-lg">{speaker.name}</span>
                                <span
                                    className="mt-2 text-center text-gray-600 font-medium">{speaker.position}</span>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-4xl font-bold text-center my-8 text-gray-800 uppercase">Agenda</h2>
                    <AgendaExpandable schedule={schedule}/>
                </div>
            </div>
        </main>
    );
}
