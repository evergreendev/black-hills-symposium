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

const schedule: dateItem[] = [
    {
        date: "04/09/25",
        items: [
            {
                time: "",
                items: [
                    "Opening General Session",
                    "Join us as we kick off our 2025 Symposium. You will get to hear from both a US Congressman and the South Dakota National Guard Adjutant General, Major General Mark Morrell."
                ],
            },
            {
                time: "",
                items: [
                    "General Session",
                    "Securing the Homeland – Arguably, National Defense is best achieved by taking a holistic approach. Hear from a DHS official on where we were, where we are, and where we are going on the homeland security front."
                ],
            },
            {
                time: "",
                items: [
                    "Networking Lunch",
                    "Featuring the premier of Newsweek’s B-1 Unconventional Series video & their SDNG Blackhawk video."
                ],
            },
            {
                time: "",
                items: [
                    "Breakout Session A",
                ],
            },
            {
                time: "",
                items: [
                    "Breakout Session B",
                ],
            },
            {
                time: "",
                items: [
                    "Breakout Session C",
                ],
            },
            {
                time: "",
                items: [
                    "General Session",
                    "In this heavy-hitting, 2-for-1 session, you will get a real-time state of the base update from Ellsworth AFB leadership. Immediately following, Northrop Grumman’s Vice President over the B-21 Raider will wrap up our sessions with an update on and overview of the program."
                ],
            },
            {
                time: "",
                items: [
                    "South Dakota Mines Social",
                    "Unwind, network, and wrap up your day at our social sponsored by SD Mines."
                ],
            },
        ],
    },
    {
        date: "04/10/25",
        items: [
            {
                time: "",
                items: [
                    "General Session",
                    "Kicking off Day 2 will be Lieutenant General (Retired) Kevin Kennedy. He is the previous Commander of 16th Air Force (AF Cyber, Joint Force HQ Cyber). With the ever-increasing cyber threat, understanding how the cyber realm applies to you is a critical component of ensuring our national security. You don’t want to miss this chance to hear from one of the world’s foremost cyber leaders."
                ],
            },
            {
                time: "",
                items: [
                    "Breakout Session D",
                ],
            },
        ],
    },
];


    /*    const schedule: dateItem[] = [
            {
                date: "04/09/25",
                items: [
                    {
                        // time: "08:00:00 AM",
                        time: "",
                        items: [
                            "Opening Session",
                            "Speakers: Sen Thune, Rounds, Maj Gen Morrell",
                        ],
                    },
                    {
                        // time: "08:50:00 AM",
                        time: "",
                        items: ["Break"],
                    },
    /!*                {
                        // time: "09:00:00 AM",
                        time: "",
                        items: [
                            "Resilience & Reliability, War Game Scenario",
                            "Speaker: Chris Yeaw",
                        ],
                    },*!/
    /!*                {
                        // time: "11:20:00 AM",
                        time: "",
                        items: ["Break"],
                    },*!/
    /!*                {
                        // time: "11:30:00 AM",
                        time: "",
                        items: [
                            "Keynote, Sec. Noem",
                            "Speaker: DHS Secretary Noem (or representative)",
                        ],
                    },*!/
                    {
                        // time: "12:00:00 PM",
                        time: "",
                        items: ["Networking Lunch","Video Premiers - B-1 Unconventional Series & SDNG Blackhawk Video"],
                    },
                    {
                        time: "",
                        items: ["Breakout A","Breakout B"]
                    },
                    {
                        // time: "01:00:00 PM",
                        time: "",
                        items: [
                            "Energy Infrastructure",
                            "Speakers: West River Electric, Black Hills Energy, Monument Health",
                        ],
                    },
                    {
                        // time: "01:00:00 PM",
                        time: "",
                        items: [
                            "The Link Between Family Quality of Life & Force Readiness",
                        ],
                    },
                    {
                        // time: "01:50:00 PM",
                        time: "",
                        items: ["Break"],
                    },
                    {
                        time:"",
                        items:["Breakout C"]
                    },
                    {
                        // time: "04:00:00 PM",
                        time: "",
                        items: [
                            "Featured Speaker - Ellsworth State of the Base",
                            "Speaker: Col Brian Buschur (28 OG/CC)",
                        ],
                    },
                    {
                        // time: "04:30:00 PM",
                        time: "",
                        items: [
                            "Featured Speaker - Northrop Grumman",
                            "Speaker: Nikki Kodama (VP, B-1, Northrop Grumman)",
                        ],
                    },
                    {
                        time: "",
                        items:["SD Mines Social"]
                    }
                ],
            },
            {
                date: "04/10/25",
                items: [
                    {
                        // time: "08:00:00 AM",
                        time: "",
                        items: [
                            "Featured Speaker",
                            "Speaker: Lt Gen (Ret) Kevin Kennedy, fmr Commander, 16th Air Force (Air Forces Cyber, Joint Force HQ Cyber)",
                        ],
                    },
                    {
                        // time: "08:50:00 AM",
                        time: "",
                        items: ["Break"],
                    },
                    {
                        // time: "09:00:00 AM",
                        time: "",
                        items: [
                            "Featured Speaker",
                            "Speaker: Dr. Griffiths, DSU President",
                        ],
                    },
                    {
                        // time: "10:00:00 AM",
                        time: "",
                        items: [
                            "Breakout D"
                        ],
                    },
                    {
                        // time: "11:00:00 AM",
                        time: "",
                        items: ["Event Concludes"],
                    },
                ],
            },
        ];*/
    const trackSessions = [
        {
            title: "Breakout Session A",
            items: [
                {
                    title: "Energy Infrastructure",
                    description:
                        "Featuring representatives from Black Hills Energy, West River Electric, and Monument Health, join us for a panel discussion on what they do, how they do it, and what “cyber security” looks like for these organizations.",
                },
                {
                    title: "The Link Between Family Quality of Life & Force Readiness",
                    description:
                        "This panel discussion will explore the Five & Thrive initiative; a grassroots effort aimed at improving the quality of life for military families in five key areas: childcare, education, healthcare, housing, and spouse employment.",
                },
            ],
        },
        {
            title: "Breakout Session B",
            items: [
                {
                    title: "Cyber Security",
                    description:
                        "This session will be led by two cyber security experts from the esteemed Dakota State University. Stacy Kooistra will talk about Dakota State Applied Research Corporation (DARC) and its work in the cybersecurity arena, as well as the trends and potential risks in the cyber security realm.  Dr. Brent Van Aartsen will cover cyber threats and what is on the horizon in this area.",
                },
                {
                    title: "PFOS/PFOA",
                    description: "",
                },
                {
                    title: "Doing Business with the Government",
                    description:
                        "This session will provide information to businesses on what criteria they would need to meet in order to contract with/sell to the government. This would include certifications as well as prohibited sources/funding for components.",
                },
            ],
        },
        {
            title: "Breakout Session C",
            items: [
                {
                    title: "Mining, Critical Minerals, and Munitions",
                    description:
                        "Learn how SD Mines and local companies are working together to shore up America’s munition and critical mineral infrastructure and supply chains.",
                },
                {
                    title: "Intersection of National Security & Foreign Trade",
                    description: "",
                },
                {
                    title: "Posturing Small Businesses for Small Business Innovation Contracts",
                    description:
                        "Get valuable tips and lessons on submitting Small Business Innovation Research & Small Business Technical Transfer Research Contracts.",
                },
            ],
        },
        {
            title: "Breakout Session D",
            items: [
                {
                    title: "Creating Military Friendly Communities",
                    description:
                        "Every year, the Department of Defense, via the Defense Support Liaison Office, establishes a list of priority items impacting military families and their quality of life. Additionally, the Air Force has certain areas which they deem critical for future basing decisions. This session will bring awareness to the focus areas and basing criteria critical to our community posturing for new/expanded missions and safeguard against possible future BRACs.",
                },
                {
                    title: "Local Crisis Response",
                    description:
                        "A panel of presenters will discuss emergency response within the community, highlighting the collaboration between government agencies and local organizations. For Ellsworth, this includes mutual aid agreements for fire response, support from Explosive Ordnance Disposal Teams for bomb disposal calls, and the involvement of military working dogs at community events. The goal is to inform the community about how we partner with and support local emergency efforts.",
                },
                {
                    title: "The Threat of Drones and Mitigation TTPs",
                    description:
                        "With recent headlines, undoubtedly many people understand drones pose a credible threat. Hear from one of the industry experts on drone technology and drone defense as he discusses the threat and what can be done to mitigate this threat.",
                },
            ],
        },
    ];

/*    const trackSessions = [
        {
            title: "Breakout A",
            items: [
                {
                    time: "",
                    title: "Energy Infrastructure - \"West River Electric\n" +
                        "Black Hills Energy\n" +
                        "Monument Health\""
                },
                {
                    time: "",
                    title: "The Link Between Family Quality of Life & Force Readiness"
                },
            ]
        },
        {
            title: "Breakout B",
            items: [
                {
                    time: "",
                    title: "Cyber Security - Stacy Kooistra (COO/General Counsel for DARC)\n" +
                        "Dr. Brent Van Aartsen (Chief Technology Officer, DSU)"
                },
                {
                    time: "",
                    title: "PFOS/PFOA"
                },
                {
                    time: "",
                    title: "Doing Business w/ The Government"
                },
            ]
        },
        {
            title: "Breakout C",
            items: [
                {
                    time: "",
                    title: "Intersection of National Security & Foreign Trade"
                },
                {
                    time: "",
                    title: "Posturing Small Business for Small Business Innovation Contracts"
                },
            ]
        },
        {
            title: "Breakout D",
            items: [
                {
                    time: "",
                    title: "Creating Military Friendly Communities -\"Michelle Richart\n" +
                        "Lorie Vega\n" +
                        "JoAnn Mulholland\n" +
                        "Taylor Davis\""
                },
                {
                    time: "",
                    title: "Local Crisis Response- Base Fire Department & EOD  & SDNG & Pennington County & Sheriff Dept"
                },
                {
                    time: "",
                    title: "The threat of drones and how to mitigate - Matt Dunlevy (NDIA Northern Tier President)"
                },
                {
                    time: "",
                    title: "Impact of Administration Changes on Military Operations & Defense Communities - Making Sense of it All"
                }
            ]
        }
    ]*/


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
                    <Agenda trackSessions={trackSessions} schedule={schedule}/>
                </div>
            </div>
        </main>
    );
}
