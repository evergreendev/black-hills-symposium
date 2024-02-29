import wireLogo from "@/public/bh-wire-logo-white.png"
import bhMacLogo from "@/public/bhmac-logo.png"
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/app/components/ImageSlider";
import theboxImg from "@/public/thebox.png";

const Footer = () => {
    return <>
        <ImageSlider/>
        <div className="bg-primary-600 border-t-4 border-primary-500">

            <div className="w-full flex justify-center flex-wrap">
                <div className="max-w-screen-md flex flex-col justify-between p-7">
                    <Link href="https://blackhillswire.com/">
                        <Image className="w-52 p-4" src={wireLogo} alt="Black Hills Wire"/>
                    </Link>
                    <Link href="https://www.blackhillsmac.com/">
                        <Image className="w-52 p-4" src={bhMacLogo} alt="Black Hills Military Advisory Coalition"/>
                    </Link>
                </div>
                <Link
                    className="mt-14 flex-wrap group inline-flex items-center bg-primary-700 hover:bg-primary-800 transition-all mb-14 rounded-lg shadow-md overflow-hidden"
                    href="https://www.google.com/maps/dir//The+Box+Elder+Events+Center,+631+Watiki+Way,+Box+Elder,+SD+57719/@44.0921733,-103.2723344,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x877d67e28838e8db:0x72d6c280514273be!2m2!1d-103.1460223!2d44.1000482?entry=ttu">
                    <address className="text-primary-100 p-4 text-xl md:text-2xl">
                        <span className="font-bold text-2xl md:text-4xl">The Box</span><br/>
                        631 WaTiki Way<br/>
                        Box Elder, SD 57719
                    </address>
                    <Image className="opacity-95 group-hover:opacity-100 transition-all" src={theboxImg}
                           alt=""/>
                </Link>
            </div>

            <div className="max-w-screen-xl m-auto p-1">
                <p className="italic text-xs">
                    Copyright
                    &copy; {
                    new Date().getFullYear()
                }, Black Hills Military Advisory Coalition
                </p>
            </div>
        </div>
    </>
}

export default Footer;