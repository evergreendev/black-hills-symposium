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
                        <p>The Black Hills Defense and Industry Symposium is coming to The Box Elder Convention Center,
                            April
                            10- 11, 2024. This annual event will bring leaders of academia, research, industry,
                            military,
                            and
                            the Black Hills communities together for meaningful dialogue on the importance of defense
                            investment
                            in western South Dakota. Leaders will discuss how attendees can contribute to solutions for
                            stronger
                            national defense and bolstered regional economic development.</p>
                        <p>The
                            2024 Symposium will feature high level discussions and breakout sessions regarding
                            PFOS/PFOA,
                            critical minerals, Small Business Innovation Research (SBIR), and partnerships between
                            general
                            contractors, military family quality of life, and the DOD, along with important information
                            regarding the B21. We encourage all Black Hills residents to register and attend.</p>
                    </div>
                </ImageAndText>
                <div className="space-y-3.5 lg:text-lg p-4 md:p-0 mb-5">
                    <p>The Symposium will officially kick off on April 10th, following preliminary PFOS/PFOA and War
                        Games
                        sessions at 4:30pm, open to all attendees. Following the opening presentation, all guests
                        and
                        dignitaries are invited to the South Dakota School of Mines Welcome Reception, beginning at
                        5pm.</p>

                    <p>The Perils of Theater Nuclear Escalation War Games will feature panels of participants
                        actively
                        participating in a war game simulation. Panels will consist of military and civilian
                        panelists.
                        Simulation will demonstrate the complexity of a potential conflict with a peer nation and
                        the
                        challenges the United States would encounter.</p>

                    <p>Thursday brings a full day of discussions around defense entrepreneurship, development,
                        national
                        security, military quality of life, critical minerals, and local defense industry
                        opportunities.
                        Featured speakers will include members of the US Congress, South Dakota National Guard, and
                        the
                        US
                        Air Force.</p>

                    <p>The event will include many industry vendors, highly desired door prized drawings, and
                        special
                        off-property events Thursday evening, which include a tour to Mt. Rushmore with dinner or a
                        guided
                        tour of the South Dakota Mines Lab.</p>

                    <p>The Black Hills Defense & Industry Symposium is brought to you by many key sponsors and
                        supporters
                        who believe in the importance of community engagement and growth.</p>

                    <p className="font-bold text-center">Ticket includes access to all sessions, including pre-symposium
                        sessions, both days of the
                        event.</p>
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
