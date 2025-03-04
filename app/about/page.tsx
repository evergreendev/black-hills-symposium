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
/*                {
                    // time: "09:00:00 AM",
                    time: "",
                    items: [
                        "Resilience & Reliability, War Game Scenario",
                        "Speaker: Chris Yeaw",
                    ],
                },*/
/*                {
                    // time: "11:20:00 AM",
                    time: "",
                    items: ["Break"],
                },*/
/*                {
                    // time: "11:30:00 AM",
                    time: "",
                    items: [
                        "Keynote, Sec. Noem",
                        "Speaker: DHS Secretary Noem (or representative)",
                    ],
                },*/
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
    ];


    const trackSessions = [
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
            <div id="agenda" className="w-full flex justify-center px-12 bg-primary-900">
                <div className="text-primary-900 max-w-screen-xl bg-white p-7">
                    <Agenda trackSessions={trackSessions} schedule={schedule}/>
                </div>
            </div>
        </main>
    );
}
