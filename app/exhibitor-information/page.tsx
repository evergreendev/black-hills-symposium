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
                        We are pleased to invite you to participate as a vendor at the 2026 Defense & Industry Symposium, Presented by Northrop Gruman, hosted by the BH MAC, taking place April 8-9, 2026 at The Box Elder Events Center.
                    </p>
                </div>
            </div>

            <div className="max-w-screen-xl text-primary-900 mt-9 pb-7">
                <ImageAndText img={leftImg}>
                    <h2 className="font-serif text-3xl font-bold">Benefits</h2>
                    <p className="mb-3">
                        This premier event brings together defense leaders, industry experts, innovators, and decision-makers to discuss the latest advancements, challenges, and opportunities in our national defense landscape. As a vendor, you will have the unique opportunity to:
                    </p>
                    <ul className="list-disc list-inside mb-3">
                        <li><span className="font-bold">Showcase</span> your products, services, and innovations directly to military and industry professionals.</li>
                        <li><span className="font-bold">Network</span> with key defense personnel, contractors, and partners from across the region and nation.</li>
                        <li><span className="font-bold">Gain</span> visibility through event marketing, attendee materials, and onsite recognition.</li>
                    </ul>
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
                    {/*<div className="flex align-middle mt-7">
                        <Link
                            className="m-auto bg-primary-900 hover:bg-primary-600 transition-colors font-bold text-primary-100 p-2 px-8 rounded text-2xl uppercase"
                            href="https://cvent.me/Ng2owB">Register</Link>
                    </div>*/}


                </div>
            </div>
        </main>
    );
}
