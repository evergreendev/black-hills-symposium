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
                        <div className="mt-4 rounded flex items-start justify-start">
                            <Link className="bg-primary-600 hover:bg-primary-500 rounded p-2 px-5 text-white font-bold" href="#">Sponsor Today</Link>
                        </div>
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
                            href="https://www.etix.com/ticket/p/78715410/black-hills-defense-industry-symposium-box-elder-the-box-convention-center">Register</Link>
                    </div>*/}


                </div>
            </div>
        </main>
    );
}
