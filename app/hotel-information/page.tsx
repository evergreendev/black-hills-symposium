import Link from "next/link";
import ImageAndText from "@/app/components/ImageAndText";
import hotelImg from "@/public/hotel-info.jpg"

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div
                className="max-h-full h-[800px] w-full bg-volunteer bg-[right_-28vw_top_-2vw] sm:bg-right bg-cover relative">
                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                </div>
            </div>

            <div className="bg-primary-100 w-full flex justify-center p-12">
                <ImageAndText img={hotelImg}>
                    <div className="w-full max-w-prose text-primary-900 text-xl space-y-3.5">
                        <h2 className="font-bold text-5xl mb-3 font-serif">Hotel Information</h2>
                        <p>
                            We are excited to work with The Box Elder Events Center to host guests during the 2027 Defense & Industry Symposium.
                        </p>
                        <p><Link href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.marriott.com_event-2Dreservations_reservation-2Dlink.mi-3Fid-3D1769648142591-26key-3DCORP-26app-3Dresvlink&d=DwMFAg&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=lokX0gfhaxKZP2QQCHQlGco2VkY5cwuYvPw6GCP4FGw&m=sumrvZzaku9zpMiyX7aIWdXK0ez6zopxPDr-ZsWF6FH18IAkWxm4ngNgbNb4z3km&s=4QQV6wiPqH7pkU0Zqya5fbU-NskU_ZgysV830fKG66E&e=" className="inline-block bg-primary-700 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded">Book Your Hotel</Link></p>
                        <p>Use the link above to reserve your stay at the symposium hotel rate.</p>
                        <p>
                            Parking is free and conveniently located near The Box Elder Events Center.
                        </p>
                    </div>
                </ImageAndText>
            </div>
        </main>
    );
}
