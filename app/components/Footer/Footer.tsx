import wireLogo from "@/public/bh-wire-logo-white.png"
import bhMacLogo from "@/public/bhmac-logo.png"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return <div className="bg-primary-600 border-t-4 border-primary-500">
        <div className="max-w-screen-lg m-auto flex justify-center p-7">
            <Link href="https://blackhillswire.com/">
                <Image className="w-52 p-4" src={wireLogo} alt="Black Hills Wire"/>
            </Link>
            <Link href="https://www.blackhillsmac.com/">
                <Image className="w-52 p-4" src={bhMacLogo} alt="Black Hills Military Advisory Coalition"/>
            </Link>
        </div>


    </div>
}

export default Footer;