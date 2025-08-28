import Image from "next/image";
import lastYearPhoto from "@/public/2025/3769158129.jpg";
import Link from "next/link";

export const metadata = {
    title: "Registration | Defense & Industry Symposium",
    description: "Registration opening soon for the Defense & Industry Symposium. Learn more about the event and check back shortly to register.",
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
                        <h1 className="text-3xl md:text-5xl font-bold">Registration Opening Soon</h1>
                    </div>
                    <div className="space-y-4 mx-auto flex flex-col items-center p-4 bg-primary-100 mb-12">
                        <h2 className="font-bold text-xl">Defense & Industry Symposium Where AI, Cyber & Defense
                            Converge</h2>
                        <h3 className="text-lg">Presented by Northrop Grumman and hosted by the BH MAC</h3>
                        <h3 className="text-lg">April 8-9, 2026</h3>
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

                    <h2 className="text-4xl font-bold text-center my-8 text-gray-800 uppercase">Agenda</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Governor&apos;s Resilience and Infrastructure Task Force (GRIT) (Infrastructure)</li>
                        <li>Counter Unmanned Aerial Systems (CUAS)</li>
                        <li>AI/Cyber Security</li>
                        <li>B21 Update</li>
                    </ul>

                    <div className="mt-10 text-center">
                        <p className="text-xl font-semibold">Registration Opening Soon</p>
                        <p className="text-sm mt-2">Have questions? <Link
                            href="mailto:tif.robertson@ellsworthauthority.org" className="underline">Contact us</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
