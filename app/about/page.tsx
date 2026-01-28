import Image from "next/image";


export default function About() {

    type timeItem = {
        time?: string,
        title?: string,
        room?: string,
        items?: any[]
    }

    type dateItem = {
        date: string,
        callout?: boolean,
        items?: timeItem[]
    }

    const schedule: dateItem[] = [
        {
            date: "",
            items: [
                {
                    title: "SD Governor’s Proclamation w/ opening ceremony & 250th Celebration",
                    items: []
                },
                {
                    title: "From Strategy to Action: The SDNG Adjutant General on Infrastructure Resilience",
                    items: []
                },
                {
                    title: "Resilience Under Fire: A Wargame Outbrief on Attacks Against America’s Critical Infrastructure",
                    items: []
                },
                {
                    title: "Lunch/Motivational Speaker - Malcom Chapman - Marines/250th Anniversary",
                    items: []
                },
                {
                    title: "Partnering with Primes in the AI-Driven Federal Landscape",
                    items: []
                },
                {
                    title: "What Happens When Infrastructure Is Threatened? Inside the Governor’s GRIT Taskforce",
                    items: []
                },
                {
                    title: "From Battlefield to Backyard: How Ukraine's Drone War is Redefining Security",
                    items: []
                },
                {
                    title: "CMMC in the Age of AI: Compliance, Controls, and Real-World Implications",
                    items: []
                },
                {
                    title: "Deterrence Delivered: Strategic Bombers, National Security, and the Defense-Industry Partnership",
                    items: []
                },
                {
                    title: "From BRAC to the B-21: Leadership Insights on America’s Next-Generation Long Range Strike",
                    items: []
                },
                {
                    title: "SD Mines Social",
                    items: []
                },
                {
                    title: "SD Mines Student War Games Camp Rocker",
                    items: []
                },
                {
                    title: "What Tomorrow’s Engineers Are Building Today: A Drone Demonstration by South Dakota Mines Students",
                    items: []
                },
                {
                    title: "Fighting Tomorrow's War with Yesterday's Doctrine: The Drone Adaptation Gap - Lt. Gen (Ret) Mary O'Brian",
                    items: []
                },
                {
                    title: "UAS/C-UAS Panel: Anno.ai CEO, MMS Products CEO",
                    items: []
                },
                {
                    title: "AI Update from the Nation’s Capital: What Leaders Are Seeing and Planning-US Senator Mike Rounds",
                    items: []
                },
                {
                    title: "Building the Future Fight: Military Construction Meets Artificial Intelligence",
                    items: []
                },
                {
                    title: "Closing Speaker - US Senator Mike Rounds",
                    items: []
                },
                {
                    title: "Counter the Threat: LIVE Fire Drone Defense in Action at Shooting Range",
                    items: []
                },
                {
                    title: "Next-Gen Flight in Action: LIVE Student Drone Demo from South Dakota Mines at Shooting Range",
                    items: []
                },
            ],
        },
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
                    <div className="space-y-2 mx-auto flex flex-col items-center p-2 bg-primary-100 mb-12 text-center">
                        <h2 className="font-bold text-3xl md:text-5xl">Defense & Industry Symposium</h2>
                        <h3 className="text-xl md:text-2xl">Presented by Northrop Grumman</h3>
                        <h3 className="text-xl md:text-2xl">Where AI, Cyber, & Defense Converge</h3>
                        <h4 className="text-base md:text-lg">Hosted by Black Hills MAC</h4>
                        <h4 className="text-lg">April 8-9, 2026</h4>
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
                        <div className="pt-4">
                            <a
                                className="inline-block bg-primary-500 hover:bg-primary-600 transition-colors font-bold text-primary-100 py-2 px-6 rounded text-xl uppercase"
                                href="https://cvent.me/4dNBxg"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Purchase Tickets
                            </a>
                        </div>
                    </div>


                    <h2 className="text-4xl font-bold text-center my-8 text-gray-800 uppercase">Agenda</h2>
                    <div className="max-w-screen-md mx-auto">
                        {schedule.map((day) => (
                            <div key={day.date} className="mb-10">
                                <h3 className="text-2xl font-bold mb-4 border-b-2 border-primary-500 pb-2">{day.date}</h3>
                                <ul className="list-disc pl-5 space-y-3">
                                    {day.items?.map((item, index) => (
                                        <li key={index} className="text-lg text-gray-700">
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <p className="mt-8 italic text-gray-600">* Agenda subject to change</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
