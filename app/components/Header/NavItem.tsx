import Link from "next/link";
import Image from "next/image";
import arrowDown from "../../../public/arrow-down.svg";

type item = {
    title: string,
    url: string,
    className?: string
}
const NavItem = ({item, mobile, subItems}: { item: item, mobile?: boolean, subItems?: item[] }) => {
    return (
        mobile ?
            <div className={`group text-xl font-bold px-2 text-primary-100 pt-2 pb-2 ${item?.className}`}>
                <Link href={item.url}>
                    <p>{item.title}</p>
                </Link>
                {
                    subItems ?
                        <div className="border-l-2 border-primary-600 mt-2">
                            {
                                subItems.map(item => {
                                    return <Link className={`font-normal text-lg ml-3 p-2 block`} href={item.url}
                                                 key={item.title}>{item.title}</Link>
                                })
                            }
                        </div>
                        : ""
                }
            </div> :
            <div
                className={`group hover:bg-primary-700 text-lg font-bold px-2 text-primary-100 pt-2 pb-2  transition-all ${item.className}`}>
                <Link href={item.url}
                      className="">
                    <p className="flex">
                        {item.title}
                        {
                            subItems ?
                                <Image className="ml-2" src={arrowDown} alt=""/> : ""
                        }
                    </p>
                </Link> {
                subItems ?
                    <div
                        className="hidden group-focus:block group-focus-within:block group-hover:block absolute bottom-0 translate-y-full border-2 border-primary-400 bg-primary-500">
                        {
                            subItems.map(subItem => {
                                return (
                                    <Link href={subItem.url}
                                          className="p-2 block min-w-44 hover:bg-primary-600 transition-all"
                                          key={subItem.title}>
                                        <p className="text-base font-normal">
                                            {subItem.title}
                                        </p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    : ""
            }
            </div>

    );
}

export default NavItem;