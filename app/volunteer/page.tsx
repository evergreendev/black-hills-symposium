import Link from "next/link";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div
                className="max-h-full h-[800px] w-full bg-volunteer bg-[left_-50vw_top_0] sm:bg-[right_0vw_top_-5vw] bg-cover relative">
                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                </div>
            </div>

            <div className="bg-primary-100 w-full flex justify-center p-12">
                <div className="max-w-screen-md w-full text-primary-900 text-xl">
                    <h2 className="font-bold text-5xl mb-3 font-serif">Volunteer</h2>
                    <p className="max-w-prose m-auto text-primary-500 text-3xl">
                        Are you looking for volunteer opportunities to support our military members and their families?
                        Volunteers at the Black Hills Symposium facilitate improving quality of life for our service members and their families and increase community outreach and support.
                        <Link href="https://forms.office.com/r/9eG9aRZZA5" className="bg-primary-600 text-primary-100 flex justify-center text-center
                        py-2 rounded-lg mt-7">Sign up now to register as a volunteer!</Link>{/*<Link href="mailto:tif.robertson@ellsworthauthority.org" className="bg-primary-600 text-primary-100 flex justify-center
                        py-2 rounded-lg mt-7">Contact us to register as a volunteer!</Link>*/}
                    </p>
                </div>
            </div>
        </main>
    );
}
