import leftImg from "@/public/talking.jpg";
import ImageAndText from "@/app/components/ImageAndText";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
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
        </main>
    );
}
