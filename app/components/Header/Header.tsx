'use client'
import {inika} from "@/app/fonts";
import Image from "next/image";
import logoImg from "../../../public/logo.png"
import NavItem from "@/app/components/Header/NavItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const navArr = [
    {
        item:{
            title: "Register",
            url: "/register"
        }
    },
    {
        item:{
            title: "Support",
            url: "/support",
        },
        subItems: [
            {
                title: "Exhibitor/Sponsor",
                url: "/support/exhibitor"
            },
            {
                title: "Volunteer",
                url: "/support/volunteer"
            }
        ]
    },
    {
        item: {
            title: "About",
            url: "/about",
        },
        subItems: [
            {
                title: "Contact",
                url: "/about/contact"
            }
        ]
    }
];

const Header = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <>
            <header className="bg-primary-800 flex justify-end items-center w-full lg:h-[125px] relative">
                <div className="flex flex-col lg:flex-row justify-between w-full items-center max-w-[1800px]">
                    <div className="relative lg:pl-44 lg:mr-28 flex overflow-hidden lg:overflow-visible">
                        <Image className="lg:absolute left-0 mr-7 z-20" src={logoImg} alt=""/>
                        <h1 className={`${inika.className} text-2xl pt-2.5 xl:text-4xl font-bold pr-10 sm:pr-0`}>Black
                            Hills
                            Defense <br
                                className="hidden sm:block"/>& Industry Symposium
                        </h1>
                    </div>
                    <nav
                        className="hidden bg-primary-600 pl-4 lg:pr-52 md:w-6/12 md:flex justify-between relative mt-3 z-30">
                        {
                            navArr.map(item => {
                                return(
                                    <NavItem item={item.item} subItems={item.subItems} key={item.item.title}/>
                                )
                            })
                        }
                    </nav>
                </div>
                <button onClick={() => {
                    setMobileMenuIsOpen(!mobileMenuIsOpen);
                }}
                        className="md:hidden font-bold top-2 right-2 absolute size-10 hover:opacity-100 z-50 bg-primary-800">
                    {
                        mobileMenuIsOpen ?
                            <FontAwesomeIcon size="lg" icon={faCircleXmark}/> :
                            <FontAwesomeIcon size="lg" icon={faBars}/>
                    }

                </button>
                <div className="bg-dark h-24 w-full absolute bottom-0 translate-y-full z-10"></div>
            </header>
            <nav className={`h-full absolute top-0 w-full z-40 pt-12 transition-transform ${
                mobileMenuIsOpen ? "" : "translate-x-full md:hidden"
            }`}>
                <div className="w-8/12 text-primary-900 p-2 ml-auto h-full bg-zinc-900">
                    {
                        navArr.map(item => {
                            return <NavItem item={item.item} subItems={item.subItems} key={item.item.title} mobile/>
                        })
                    }
                </div>
            </nav>
        </>
    );
}

export default Header;