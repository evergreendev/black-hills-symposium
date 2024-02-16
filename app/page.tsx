import Header from "@/app/components/Header";
import registerNowImg from "../public/register-now.jpg";
import agendaImg from "../public/agenda.jpg";
import exhibitorImg from "../public/exhibitor.jpg";
import hotelImg from "../public/hotel-info.jpg"
import gettingAroundImg from "../public/getting-around.jpg";
import faqImg from "../public/faq.jpg";
import leftImg from "../public/talking.jpg";
import speakerImg from "../public/speaker.jpg";
import Link from "next/link";
import NavCard from "@/app/components/NavCard/NavCard";
import ImageAndText from "@/app/components/ImageAndText";
import QuoteBlock from "@/app/components/QuoteBlock";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <Header/>
            <div className="max-h-full h-[1100px] w-full bg-hero bg-cover bg-center"/>
            <div
                className="w-full max-w-screen-xl bg-primary-800 bg-opacity-90 md:-translate-y-1/2 md:flex justify-between">
                <div className="p-4">
                    <h2 className="font-bold text-3xl lg:text-5xl mb-1 lg:mb-2 lg:uppercase">
                        Black Hills Defense <br className="hidden sm:block"/>
                        & Industry Symposium:
                    </h2>
                    <h2 className="text-2xl lg:text-4xl">
                        Leading The National Defense Discussion
                    </h2>
                </div>
                <div className="flex flex-col justify-center bg-gray-100 text-primary-600 p-4 lg:px-10">
                    <h3 className="text-xl mb-1 lg:text-3xl lg:mb-4">April 10 & 11, 2024</h3>
                    <Link className="text-2xl lg:text-3xl hover:bg-primary-100 transition-all"
                          href="https://www.google.com/maps/dir/44.0800533,-103.2231634/The+Box+Elder+Events+Center,+631+Watiki+Way,+Box+Elder,+SD+57719/@44.0922571,-103.2314303,13z/data=!3m1!4b1!4m18!1m8!3m7!1s0x877d67e28838e8db:0x72d6c280514273be!2sThe+Box+Elder+Events+Center!8m2!3d44.1000482!4d-103.1460223!15sCgZ0aGVib3giA4gBAZIBC2V2ZW50X3ZlbnVl4AEA!16s%2Fg%2F11tg0drt7g!4m8!1m1!4e1!1m5!1m1!1s0x877d67e28838e8db:0x72d6c280514273be!2m2!1d-103.1460223!2d44.1000482?entry=ttu">
                        <h3 className="font-bold">theBox</h3>
                        <h3>Box Elder, SD 57719</h3>
                    </Link>
                </div>
            </div>
            <div className="max-w-screen-xl flex justify-between w-full flex-wrap">
                <NavCard img={registerNowImg} title="Register Now" url="/register-now"/>
                <NavCard img={agendaImg} title="Agenda" url="/agenda"/>
                <NavCard img={exhibitorImg} title="Become an Exhibitor" url="/support/exhibitor"/>
                <NavCard img={hotelImg} title="Hotel Information" url="/hotel-info"/>
                <NavCard img={gettingAroundImg} title="Getting Around" url="/getting-around"/>
                <NavCard img={faqImg} title="FAQ" url="/faq"/>
            </div>
            <div className="max-w-screen-xl text-primary-900 mt-9">
                <ImageAndText img={leftImg}>
                    <p className="mb-3">
                        The Black Hills Defense and Industry Symposium is coming to theBox, April 10 & 11, 2024. This
                        annual event will bring leaders of academia, research, industry, military and the Black Hills
                        communities together for meaningful dialogue on the importance of defense investment in western
                        South Dakota. Leaders will discuss how attendees can contribute to solutions for stronger
                        national defense and bolstered regional economic development.
                    </p>
                    <p>
                        The 2024 Symposium will feature high level discussion and breakout sessions regarding PFOS/PFOA
                        and Critical Minerals from South Dakota Mines, Design and Construction Opportunities from the
                        Defense Industry in the Region, SBIR Successes, helpful information about doing business with
                        the Government, along with important information regarding the B21 status.
                    </p>
                </ImageAndText>
            </div>
            <div className="max-w-screen-xl text-primary-900 mt-16">
                <QuoteBlock img={speakerImg}>
                    <p className="text-xl mb-5">
                        “We hope that you find great value in the exceptional presenters and content our planning
                        committee has worked so hard to deliver. This event will welcome business, academic, and
                        military leaders from our region and across the globe. We hope you dive right in and engage in
                        the exchange of ideas that have been planned, so that we can all benefit from your attendance. I
                        am certain, that this event will allow all who attend to gain a greater understanding of the
                        challenges our fighting women and men face, and how we as a community and country, can work
                        together to ensure lasting freedom.”
                    </p>
                    <p className="text-xs font-bold">
                        Joseph Wright, J.D.<br/>
                        Associate Vice President for Research Economic Development<br/>
                        South Dakota Mines
                    </p>
                </QuoteBlock>
            </div>
        </main>
    );
}
