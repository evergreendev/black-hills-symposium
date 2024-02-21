import leftImg from "@/public/talking.jpg";
import ImageAndText from "@/app/components/ImageAndText";
import Agenda from "@/app/components/Agenda";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div className="max-h-full h-[800px] w-full bg-about bg-cover bg-center relative">
                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                </div>
            </div>
            <div className="max-w-screen-xl text-primary-900 mt-9">
                <ImageAndText img={leftImg}>
                    <p className="mb-3">
                        The Black Hills Defense and Industry Symposium is coming to theBox, April 10 & 11, 2024.
                        This
                        annual event will bring leaders of academia, research, industry, military and the Black
                        Hills
                        communities together for meaningful dialogue on the importance of defense investment in
                        western
                        South Dakota. Leaders will discuss how attendees can contribute to solutions for
                        stronger
                        national defense and bolstered regional economic development.
                    </p>
                    <p>
                        The 2024 Symposium will feature high level discussion and breakout sessions regarding
                        PFOS/PFOA
                        and Critical Minerals from South Dakota Mines, Design and Construction Opportunities
                        from the
                        Defense Industry in the Region, SBIR Successes, helpful information about doing business
                        with
                        the Government, along with important information regarding the B21 status.
                    </p>
                </ImageAndText>
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
            <div id="agenda" className="w-full flex justify-center px-12 bg-primary-900">
                <div className="text-primary-900 max-w-screen-xl bg-white p-7">
                    <Agenda/>
                </div>
            </div>
        </main>
    );
}
