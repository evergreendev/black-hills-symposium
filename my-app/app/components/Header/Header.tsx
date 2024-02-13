import {inika} from "@/app/fonts";
import Image from "next/image";
import logoImg from "../../../public/logo.png"
import NavItem from "@/app/components/Header/NavItem";

const Header = () => {
   return(
       <header className="bg-primary-800 flex justify-end items-center w-full h-[125px]">
           <div className="flex justify-between w-full items-center max-w-[1800px]">
               <div className="relative pl-44 mr-28">
                   <Image className="absolute left-0" src={logoImg} alt=""/>
                   <h1 className={`${inika.className} text-4xl font-bold`}>Black Hills Defense <br/>& Industry Symposium
                   </h1>
               </div>
               <nav className="bg-primary-600 pl-4 pr-52 w-6/12 flex justify-between relative">
                   <NavItem item={{title: "Register", url: "/register"}}/>
                   <NavItem item={{title: "Support", url: "/support"}} subItems={[
                       {
                           title: "Exhibitor/Sponsor",
                           url: "/support/exhibitor"
                       },
                       {
                           title: "Volunteer",
                           url: "/support/volunteer"
                       }
                   ]}/>
                   <NavItem item={{title: "About", url: "/about"}} subItems={[
                       {
                           title: "Contact",
                           url: "/about/contact"
                       }
                   ]}/>
               </nav>
           </div>
       </header>
   );
}

export default Header;