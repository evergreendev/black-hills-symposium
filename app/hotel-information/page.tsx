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
                            We are excited to work with The Box Elder Event Center to host guests during the 2025 Black Hills Defense & Industry Symposium.
                        </p>
                        <p>
                            A room block has been created and is ready for reservations. To book, use the link below or
                            contact the Courtyard at <Link className="text-nowrap" href="tel:605-791-0945">(605) 791-0945</Link>, mention “2025 Black Hills Defense & Industry Symposium” when booking.
                        </p>
                        <p>
                            <Link
                                href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.marriott.com_default.mi&d=DwMGaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=lokX0gfhaxKZP2QQCHQlGco2VkY5cwuYvPw6GCP4FGw&m=rXR2xvbUfa4UWuqpOLbK90fVlEXpTKIF1OEa5ih1CxVYSmEx1cZLDkaTL3csD727&s=NATftFts1D463qofDZlPVK1LAWXy_atnyK3mBURd2wg&e="
                                className="flex justify-center my-4
                        ">
                                <span
                                    className="bg-primary-600 hover:bg-primary-500 transition-colors text-primary-100 py-2 px-16 rounded-lg">Book Now</span>
                            </Link>
                        </p>
                        <p>
                            Parking is free and conveniently located near The Box Elder Event Center.
                        </p>
                    </div>
                </ImageAndText>
            </div>
        </main>
    );
}
