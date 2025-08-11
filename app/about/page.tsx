import Image from "next/image";

import {dateItem} from "@/app/components/Agenda/AgendaExpandable";
import AgendaExpandable from "@/app/components/Agenda/AgendaExpandable";

export default function About() {

    const schedule: dateItem[] = [
        {
            date: "Wednesday, April 8, 2026",
            items: [
                {
                    time: "8:30 a.m.",
                    title: "Welcome/Opening Session",
                    room: "Ellsworth A",
                    items: [
                        "Join us as we kick off our 2026 Symposium."
                    ],
                },
                {
                    title: "Governor's Resilience and Infrastructure Task Force (GRIT) (Infrastructure)",
                    time: "9:30 a.m.",
                    room: "Ellsworth A",
                    items: [
                        "Details coming soon"
                    ]
                },
                {
                    title: "Connection Break - Foyer",
                    time: "10:20 a.m."
                },
                {
                    title: "Counter Unmanned Aerial Systems (CUAS)",
                    time: "10:30 a.m.",
                    room: "Ellsworth A",
                    items: [
                        "Details coming soon"
                    ]
                },
                {
                    title: "Connection Break - Foyer",
                    time: "11:15 a.m."
                },
                {
                    title: "Networking Lunch",
                    time: "12:00 p.m.",
                    room: "Ellsworth A",
                    items: [
                        "Details coming soon"
                    ]
                },
                {
                    title: "AI/Cyber Security",
                    time: "1:00 p.m.",
                    room: "Ellsworth A",
                    items: [
                        "Details coming soon"
                    ]
                },
                {
                    time: "1:50 p.m.",
                    title: "Connection Break - Foyer"
                },
                {
                    title: "B21 Update",
                    time: "2:00 p.m.",
                    room: "Ellsworth A",
                    items: [
                        "Details coming soon"
                    ]
                },
                {
                    title: "Connection Break - Foyer",
                    time: "2:50 p.m."
                },
                {
                    title: "Closing Remarks",
                    time: "4:00 p.m.",
                    room: "Ellsworth A",
                    items: []
                },
            ],
        },
        {
            date: "Thursday, April 9, 2026",
            items: [
                {
                    title: "Welcome/Opening Session",
                    time: "8:30 a.m.",
                    room: "Ellsworth A",
                    items: [
                        "Details coming soon"
                    ]
                },
                {
                    title: "Connection Break - Foyer",
                    time: "9:15 a.m."
                },
                {
                    title: "Event Concludes",
                    time: "11:30 a.m.",
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
                        <h2 className="font-bold text-xl">Defense & Industry Symposium Where AI, Cyber & Defense Converge</h2>
                        <h3 className="text-lg">Presented by Northrop Grumman and hosted by the BH MAC</h3>
                        <h3 className="text-lg">April 8-9, 2026</h3>
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
                    </div>

                    <h2 className="text-4xl font-bold text-center my-8 text-gray-800 uppercase">Agenda</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Governor&apos;s Resilience and Infrastructure Task Force (GRIT) (Infrastructure)</li>
                        <li>Counter Unmanned Aerial Systems (CUAS)</li>
                        <li>AI/Cyber Security</li>
                        <li>B21 Update</li>
                    </ul>
                    {/*<AgendaExpandable schedule={schedule}/>*/}
                </div>
            </div>
        </main>
    );
}
