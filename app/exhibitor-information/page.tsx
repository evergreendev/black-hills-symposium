import leftImg from "@/public/exhibitor.jpg";
import ImageAndText from "@/app/components/ImageAndText";
import Link from "next/link";
import Sponsorship from "@/app/components/Sponsorship";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div
                className="max-h-full h-[800px] w-full bg-exhibitor bg-[right_-28vw_top_-2vw] sm:bg-right bg-cover relative">
                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                </div>
            </div>

            <div className="bg-primary-100 w-full flex justify-center p-12">
                <div className="max-w-screen-md w-full text-primary-900 text-xl">
                    <h2 className="font-bold text-5xl mb-3 font-serif">Exhibitor Information</h2>
                    <p className="max-w-prose m-auto text-primary-500 text-3xl">
                        Become a sponsor of the premier event focused on the growing defense industry of the Black Hills
                        region.
                    </p>
                </div>
            </div>

            <div className="max-w-screen-xl text-primary-900 mt-9 pb-7">
                <ImageAndText img={leftImg}>
                    <h2 className="font-serif text-3xl font-bold">Benefits</h2>
                    <p className="mb-3">
                        This event offers the opportunity to connect with 1,000+ industry professionals. The two-day
                        long regional conference will feature discussions around defense entrepreneurship, development,
                        national security, military quality of life, critical minerals, and local industry
                        opportunities. Featured speakers will include key leaders from the US Congress, Department of
                        Defense, US Air Force, National Guard, US Army Corps of Engineers, and more.
                    </p>
                    <h2 className="font-serif text-3xl font-bold">Who Attends?</h2>
                    <p>
                        This event draws distinguished attendees including Air Force and Army National Guard senior
                        leaders, academia, local, state, and federal officials, small business owners, entrepreneurs,
                        active-duty military members, military retirees, and veterans.

                    </p>
                </ImageAndText>
            </div>
            <div className="bg-primary-100 w-full flex justify-center p-2 sm:p-12">
                <div className="max-w-screen-lg w-full text-primary-900 text-xl">
                    <h2 className="font-bold text-4xl mb-3 font-serif text-center">Interested in becoming a sponsor or
                        exhibitor?</h2>
                    <h3 className="text-3xl text-center">Contact</h3>
                    <div className="flex flex-wrap justify-around">
                        <div className="text-center p-2">
                            <p className="font-bold">Tony</p>
                            <a className="block"
                               href="mailto:tony.nishimura@ellsworthauthority.org">tony.nishimura@ellsworthauthority.org</a>
                            <a className="block" href="tel:605-484-8864">605.484.8864</a>
                        </div>
                        <div className="text-center p-2">
                            <p className="font-bold">Tif</p>
                            <a className="block"
                               href="mailto:tif.robertson@ellsworthauthority.org">tif.robertson@ellsworthauthority.org</a>
                            <a className="block" href="tel:605-545-7865">605.545.7865</a>
                        </div>
                    </div>
                    <div className="flex align-middle mt-7">
                        <Link
                            className="m-auto bg-primary-900 hover:bg-primary-600 transition-colors font-bold text-primary-100 p-2 px-8 rounded text-2xl uppercase"
                            href="https://www.etix.com/ticket/p/78715410/black-hills-defense-industry-symposium-box-elder-the-box-convention-center">Register</Link>
                    </div>


                </div>
            </div>

            <div className="max-w-screen-md m-auto text-primary-900 mt-9 p-3 pb-7 text-xl">
                <h2 className="font-serif text-5xl mb-8">
                    Sponsorship Opportunities
                </h2>
                <Sponsorship title="Event Title Sponsor" price="$10,000">
                    <ul className="list-disc text-xl">
                        <li>
                            Recognized as the <span className="underline">Premier Title</span> sponsor for the
                            Symposium
                        </li>
                        <li>
                            Business spotlighted on all marketing assets to include, but not limited to:
                            <ul className="list-disc pl-9">
                                <li>Welcome Signage at Event Entrance</li>
                                <li>Welcome Signage at Registration</li>
                                <li>Logo on Lanyards/Credentials</li>
                                <li>Logo on Tickets</li>
                                <li>Logo and Title on All Breaks/Lunch Materials</li>
                                <li>Logo on all Symposium Marketing Materials</li>
                                <li>On-site Booth at the Event</li>
                                <li>Up to 6 Tickets to the Event</li>
                            </ul>
                        </li>
                    </ul>
                </Sponsorship>
                <Sponsorship title="Event Sponsor" price="$1,000">
                    <ul className="list-disc text-xl">
                        <li>
                            Recognized as premier sponsor of the Symposium
                        </li>
                        <li>Business spotlighted in Symposium event materials and marketing assets</li>
                        <li>On-Site Booth at Event</li>
                        <li>2 Tickets to Event</li>
                    </ul>
                </Sponsorship>
                <Sponsorship title="Booth Sponsor" price="$500">
                    <ul className="list-disc text-xl">
                        <li>Business included in Symposium event materials and marketing assets</li>
                        <li>On-Site Booth at Event</li>
                    </ul>
                </Sponsorship>
                <ul>
                    <li className="list-disc mb-3">The Symposium team will work directly with sponsors/vendors on all
                        necessary marketing assets.
                    </li>
                    <li className="list-disc mb-3">All booths are asked to provide a minimum $50 door prize. (Drawing
                        will be Thursday, April 11th.)
                    </li>
                    <li className="list-disc mb-3">All Sponsors will be listed in the event program, logo on jumbotron,
                        social media marketing and other materials related to the sponsorship level.
                    </li>
                </ul>
                <h2 className="font-bold text-2xl mb-4">Exhibitor Hours</h2>
                <div className="flex-wrap flex justify-between">
                    <div className="mb-4">
                        <h3 className="font-bold">April 10, 2024</h3>
                        <p>Set Up: 1-4pm</p>
                        <p>Exhibitor Hours Open: 4-7pm</p>
                    </div>

                    <div>
                        <h3 className="font-bold">April 11, 2024</h3>
                        <p>Set Up: 6-8am</p>
                        <p>Exhibitor Hours Open: 8am-4pm</p>
                    </div>

                </div>


                {/* <p>
                    The Black Hills Defense & Industry Symposium is a 2-day long regional conference featuring
                    discussions
                    around defense entrepreneurship, development, national security, military quality of life, critical
                    minerals, and local industry opportunities. We feature key leaders from the US Congress, Department
                    of
                    Defense, US Air Force, National Guard, US Army Corps of Engineers, and many more. We expect
                    approximately 500 attendees at this event. This is an opportunity to be a part of a premier event
                    focused on the growing defense industry of the area.
                </p>*/}
            </div>
        </main>
    );
}
