export default function About() {



    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden relative">
            <div className="bg-dark w-full h-24 opacity-80 absolute top-0 z-10"/>
            <div
                className="max-h-full h-[800px] w-full bg-about bg-[right_-28vw_top_-2vw] sm:bg-right bg-cover relative">
                <div
                    className=" bottom-0 md:right-1/2 w-full max-w-screen-xl bg-primary-800 bg-opacity-90 absolute md:translate-x-1/2 md:translate-y-1/2 md:flex justify-between">
                </div>
            </div>
            <div id="agenda" className="w-full flex justify-center px-12 bg-primary-900">
                <div className="text-primary-900 max-w-screen-xl bg-white p-7">
                    <div className="space-y-2 mx-auto flex flex-col items-center p-4 bg-primary-100 mb-12 text-center">
                        <h2 className="font-bold text-3xl md:text-5xl uppercase">Black Hills Defense & Industry Symposium</h2>
                        <h3 className="text-xl md:text-2xl font-semibold">Presented by Northrop Grumman</h3>
                        <h3 className="text-xl md:text-2xl italic">Next Gen Warfare</h3>
                        <div className="text-lg md:text-xl py-2">
                            <p className="font-bold">April 19-21, 2026</p>
                            <p>Box Elder Events Center</p>
                            <p>Box Elder, South Dakota</p>
                        </div>
                        
                        <p className="max-w-2xl text-base md:text-lg mt-4 text-gray-700">
                            The Black Hills Defense & Industry Symposium will bring together national, regional, and local leaders from industry, the military, and the community to explore the critical role each plays in the national security equation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm md:text-base">
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


                    </div>

                    <div className="w-full max-w-prose  mx-auto mb-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-primary-500 pb-2">Who Should Attend</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                This conference is best suited for leaders and professionals involved in national security, critical infrastructure, defense industry, and advanced technology (especially AI, cyber, and drones), plus students and educators in related STEM fields.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Governor&apos;s office & state leadership</li>
                                <li>Emergency management & public safety officials</li>
                                <li>First responders</li>
                                <li>National Guard & military leaders</li>
                                <li>Federal infrastructure, defense & cyber agencies</li>
                                <li>Defense contractors & industry partners</li>
                                <li>Critical infrastructure owners/operators</li>
                                <li>Cyber, IT & compliance leaders</li>
                                <li>Military, academic & research professionals</li>
                                <li>Students & civic/economic development leaders</li>
                            </ul>
                        </div>
                    </div>


                    <h2 className="text-4xl font-bold text-center my-8 text-gray-800 uppercase">2027 Agenda</h2>
                    <p className="text-3xl font-bold text-center mb-8">Coming Soon</p>
                </div>
            </div>
        </main>
    );
}
