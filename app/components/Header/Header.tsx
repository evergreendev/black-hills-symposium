'use client'
import {inika} from "@/app/fonts";
import Image from "next/image";
import logoImg from "../../../public/bhmac-logo.png"
import NavItem from "@/app/components/Header/NavItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

type item = {
    title: string,
    url: string,
    className?: string
}

const navArr: {item: item, subItems?: item[]}[] = [
    {
        item: {
            title: "Register",
            url: "https://www.etix.com/ticket/p/78715410/black-hills-defense-industry-symposium-box-elder-the-box-convention-center"
        }
    },
    {
      item: {
          title: "Exhibitor Information",
          url: "/exhibitor-information"
      }
    },
    {
        item: {
            title: "Volunteer",
            url: "/volunteer"
        }
    },
    {
        item: {
            title: "About & Agenda",
            url: "/about",
        }
    },
    {
        item: {
            title: "Contact",
            url: "mailto:tif.robertson@ellsworthauthority.org",
            className: "bg-primary-500 text-primary-100 rounded"
        }
    }
];

const Header = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMobileMenuIsOpen(false);
    },[pathname]);

    return (
        <>
            <header className="bg-primary-800 flex flex-wrap justify-end items-center w-full xl:h-[125px] relative z-50">
                <div className="flex flex-col flex-wrap lg:flex-row justify-between w-full items-center max-w-[1800px]">
                    <Link href="/" className="relative lg:pl-44 flex overflow-hidden lg:overflow-visible xl:w-5/12">
                        <Image className="p-1 xl:absolute w-24 h-24 sm:h-auto sm:w-40 left-0 mr-7 z-20" src={logoImg}
                               alt=""/>
                        <h1 className={`${inika.className} text-3xl pt-2.5 xl:text-4xl font-bold pr-10 sm:pr-0`}>Northrop
                            Grumman Black
                            Hills
                            Defense & Industry Symposium
                        </h1>
                    </Link>
                    <nav
                        className="hidden ml-auto bg-primary-800 pl-4 2xl:pr-14 xl:w-7/12 w-full md:flex justify-between relative mt-3 z-30">
                        {
                            navArr.map(item => {
                                return (
                                    <NavItem item={item.item} subItems={item.subItems} key={item.item.title}/>
                                )
                            })
                        }
                    </nav>
                </div>
                <button onClick={() => {
                    setMobileMenuIsOpen(!mobileMenuIsOpen);
                }}
                        className="md:hidden font-bold top-2 right-2 fixed size-10 hover:opacity-100 z-50 bg-primary-800">
                    {
                        mobileMenuIsOpen ?
                            <FontAwesomeIcon size="lg" icon={faCircleXmark}/> :
                            <FontAwesomeIcon size="lg" icon={faBars}/>
                    }

                </button>
                <nav className={`h-full top-0 w-full z-40 pt-12 fixed transition-transform ${
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
            </header>
        </>
    );
}

export default Header;