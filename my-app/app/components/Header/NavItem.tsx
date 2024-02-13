import Link from "next/link";
import Image from "next/image";
import arrowDown from "../../../public/arrow-down.svg";

type item = {
    title: string,
    url: string
}
const NavItem = ({item, subItems}: { item: item, subItems?: item[] }) => {
    return (
        <Link href={item.url} className="group text-xl font-bold px-2 text-primary-100 pt-2 pb-2 hover:bg-primary-700">
            <p className="flex">
                {item.title}
                {
                    subItems ?
                        <Image className="ml-2" src={arrowDown} alt=""/> : ""
                }
            </p>
            {
                subItems ?
                    <div className="hidden group-focus:block group-focus-within:block group-hover:block absolute bottom-0 translate-y-full border-2 border-primary-400 bg-primary-500">
                        {
                            subItems.map(subItem => {
                                return (
                                    <Link href={subItem.url} className="p-2 block min-w-44 hover:bg-primary-600"
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
        </Link>
    );
}

export default NavItem;