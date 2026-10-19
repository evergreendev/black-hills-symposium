import Image from "next/image";
import lastYearPhoto from "@/public/2025/3769158129.jpg";
import Link from "next/link";

export const metadata = {
    title: "Registration | Defense & Industry Symposium",
    description: "Get tickets for the Defense & Industry Symposium. Register now for the symposium.",
};

export default function Register() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div className="relative w-full h-[600px]">
                <Image
                    src={lastYearPhoto}
                    alt="Defense & Industry Symposium"
                    className="object-cover"
                    fill
                    priority
                />
                <div className="absolute inset-0 bg-primary-900/50"/>
            </div>
            <section className="w-full flex justify-center px-6 md:px-12 bg-primary-900">

                <div className="text-primary-900 max-w-screen-xl bg-white p-7 -mt-20 relative z-10 shadow-xl">
                    <div className="bg-primary-800 bg-opacity-90 p-6 text-white text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold">Get Your Tickets</h1>
                        <Link href="https://cvent.me/w0dnQo" className="inline-block mt-6 bg-primary-500 hover:bg-primary-600 transition-colors font-bold text-primary-100 py-3 px-8 rounded text-2xl">Register Now</Link>
                    </div>
                    <div className="space-y-2 mx-auto flex flex-col items-center p-4 bg-primary-100 mb-12 text-center">
                        <h2 className="font-bold text-3xl md:text-5xl">Black Hills Defense & Industry Symposium</h2>
                        <h3 className="text-xl md:text-2xl">Presented by Northrop Grumman</h3>
                        <h3 className="text-xl md:text-2xl">Next Gen Warfare</h3>
                        <h4 className="text-base md:text-lg">Hosted by Black Hills MAC</h4>
                        <h4 className="text-lg">April 19-21, 2027</h4>
                        <div>
                            <span className="font-bold">Military:</span> UOD
                        </div>
                        <div>
                            <span className="font-bold">Civilian:</span> Business casual
                        </div>
                        <div>
                            <span className="font-bold">Panelist:</span> Business casual / UOD (military)
                        </div>
                        <div>
                            <span className="font-bold">Featured Speaker:</span> Business / Service Dress
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-center my-8 text-gray-800 uppercase">2027 Agenda</h2>
                    <p className="text-center text-xl"><Link href="/about#agenda" className="underline">View the 2027 agenda</Link></p>
                    <p className="text-center mt-4"><Link href="/2026-about#agenda" className="underline">View the 2026 agenda</Link></p>

                    <div className="mt-10 text-center">
                        <p className="text-xl font-semibold">Don&rsquo;t just watch the future. Be in the room.</p>
                        <p className="text-sm mt-2">Have questions? <Link
                            href="mailto:tif.robertson@ellsworthauthority.org" className="underline">Contact us</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
