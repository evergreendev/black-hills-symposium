import Link from "next/link";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div
                className="max-h-full h-[800px] w-full bg-gettingAround bg-[right_-28vw_top_-2vw] sm:bg-right bg-cover relative">
                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                </div>
            </div>

            <div className="bg-primary-100 w-full flex justify-center p-12">

                    <div className="w-full max-w-prose text-primary-900 text-xl space-y-3.5">
                        <h2 className="font-bold text-5xl mb-3 font-serif">Getting Around</h2>
                        <h3 className="text-3xl">Black Hills Attractions</h3>
                        <Link className="underline font-bold block" href="https://thebox.live/plan-your-visit/attractions/">
                            Plan Your Visit | Black Hills Attractions | The Box Events Center
                        </Link>
                        <p>
                            Rapid City Regional Airport is the closest airport to The Box Elder Event Center. Visit
                            its <Link className="underline font-bold" href="https://rapairport.com/">website</Link> or
                            call (605) 393-9924 for more information.
                        </p>
                        <h3 className="text-3xl">What to Expect</h3>
                        <p>
                            For more information about The Box Elder Event Center and what to expect while onsite, please <Link className="underline font-bold"  href="https://thebox.live/">visit
                            their website here</Link>.
                        </p>
                    </div>
            </div>
        </main>
    );
}
