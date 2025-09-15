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
                            We are excited to work with The Box Elder Events Center to host guests during the 2026 Defense & Industry Symposium.
                        </p>
                        <p>
                            To book, use the link below or contact the Courtyard at <Link className="text-nowrap" href="tel:605-791-0945">(605) 791-0945</Link>, mention “2026 Defense & Industry Symposium” when booking.
                        </p>
                        <p>
                            You will find the information for your online reservation link below.
                        </p>
                        <p>
                            <Link
                                href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1757602875230&key=CORP&app=resvlink"
                                className="underline text-primary-700 hover:text-primary-600"
                            >
                                Book your corporate rate for Black Hills Military Advisory Coalition
                            </Link>
                        </p>
                        <p>
                            Participating properties:
                            <br />
                            Courtyard by Marriott Rapid City
                        </p>
                        <p>
                            Parking is free and conveniently located near The Box Elder Events Center.
                        </p>
                    </div>
                </ImageAndText>
            </div>
        </main>
    );
}
