import AgendaExpandable, {dateItem} from "@/app/components/Agenda/AgendaExpandable";


export default function About() {
    const schedule: dateItem[] = [
        {
            date: "Wednesday, April 8",
            items: [
                { time: "7:00 AM", title: "Check-In and Badge Issue" },
                { time: "8:00 AM", title: "Networking/Vendor Showcase" },
                { time: "8:30 AM", title: "Opening Ceremony (Presentation of the Colors, National Anthem, Invocation)" },
                { time: "9:00 AM", title: "From Strategy to Action: Infrastructure Resilience" },
                { time: "9:40 AM", title: "Session Sponsor Intro - Compotech" },
                { time: "9:45 AM", title: "Resilience Under Fire: A Wargame Outbrief on Attacks Against America’s Critical Infrastructure", items: ["What happens when adversaries strike the systems we depend on most? This outbrief walks through a live wargame scenario, which was sponsored by Black Hills Energy and took place prior to the Symposium—from first disruption to full military response—revealing how infrastructure attacks can shape political and military outcomes."] },
                { time: "11:30 PM", title: "Networking/Vendor Showcase" },
                { time: "12:00 PM", title: "Keynote Speaker and Lunch" },
                { time: "1:00 PM", title: "Partnering with Primes in the AI-Driven Federal Landscape " },
                { time: "1:00 PM", title: "Infrastructure as a Strategic Asset: How South Dakota’s GRIT Task Force Strengthens Readiness and Continuity" },
                { time: "2:00 PM", title: "From Battlefield to Backyard: How Ukraine's Drone War is Redefining Security" },
                { time: "2:00 PM", title: "CMMC in the Age of AI: Compliance, Controls, and Real-World Implications" },
                { time: "3:00 PM", title: "Deterrence Delivered: Strategic Bombers, National Security, & the Defense-Industry Partnership" },
                { time: "4:00 PM", title: "Delivering American Deterrence"},
                { time: "5:00 PM", title: "SD Mines Social" },
                { time: "5:15 PM", title: "SD Mines Student War Games Camp Rocker" },
            ],
        },
        {
            date: "Thursday, April 9",
            items: [
                { time: "7:00 AM", title: "Check-In and Badge Issue" },
                { time: "8:00 AM", title: "Networking/Vendor Showcase" },
                { time: "8:30 AM", title: "2nd Day Opening Session, What's in Store for Day 2" },
                { time: "8:40 AM", title: "What Tomorrow’s Engineers Are Building Today: A Drone Demonstration by South Dakota Mines Students" },
                { time: "9:30 AM", title: "TBD" },
                { time: "10:30 AM", title: "Enabling the Fight: How the American Defense Industrial Base Is Advancing UAS and Counter-UAS Capabilities for Operational Advantage" },
                { time: "10:30 AM", title: "Building the Future Fight: Military Construction Meets Artificial Intelligence" },
                { time: "11:30 AM", title: "AI & National Security – A Beltway Perspective" },
                { time: "12:00 PM", title: "Lunch on your own" },
                { time: "1:30 PM", title: "Counter the Threat: Live Fire Drone Defense in Action - Presented by Darley" },
                { time: "1:30 PM", title: "Next-Gen Flight in Action: Student Drone Demo from South Dakota Mines" },
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
                    <div className="space-y-2 mx-auto flex flex-col items-center p-4 bg-primary-100 mb-12 text-center">
                        <h2 className="font-bold text-3xl md:text-5xl uppercase">Defense & Industry Symposium</h2>
                        <h3 className="text-xl md:text-2xl font-semibold">Presented by Northrop Grumman</h3>
                        <h3 className="text-xl md:text-2xl italic">Where AI, Cyber & Defense Converge</h3>
                        <div className="text-lg md:text-xl py-2">
                            <p className="font-bold">April 8-9, 2026</p>
                            <p>Box Elder Events Center</p>
                            <p>Box Elder, South Dakota</p>
                        </div>
                        
                        <p className="max-w-2xl text-base md:text-lg mt-4 text-gray-700">
                            The 2026 Defense & Industry Symposium will bring together national, regional, and local leaders from industry, the military, and the community to explore the critical role each plays in the national security equation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm md:text-base">
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

                        <div className="pt-6">
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

                    <div className="w-full max-w-prose  mx-auto mb-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-primary-500 pb-2">Who Should Attend</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                This conference is best suited for leaders and professionals involved in national security, critical infrastructure, defense industry, and advanced technology (especially AI, cyber, and drones), plus students and educators in related STEM fields.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Governor&apos;s office & state leadership</li>
                                <li>Emergency management & public safety officials</li>
                                <li>First responders</li>
                                <li>National Guard & military leaders</li>
                                <li>Federal infrastructure, defense & cyber agencies</li>
                                <li>Defense contractors & industry partners</li>
                                <li>Critical infrastructure owners/operators</li>
                                <li>Cyber, IT & compliance leaders</li>
                                <li>Military, academic & research professionals</li>
                                <li>Students & civic/economic development leaders</li>
                            </ul>
                        </div>
                    </div>


                    <h2 className="text-4xl font-bold text-center my-8 text-gray-800 uppercase">Agenda</h2>
                    <AgendaExpandable schedule={schedule}/>
                </div>
            </div>
        </main>
    );
}
