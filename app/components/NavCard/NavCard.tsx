import Image, {StaticImageData} from "next/image";
import Link from "next/link";

const navCard = ({img, url,title}: { img: StaticImageData, url: string, title:string }) => {
    return <Link href={url} className="relative overflow-hidden group block w-full md:w-4/12 h-64">
{/*
        <div className="absolute rotate-45 top-0 left-[-500px] right-[-500px] bottom-0 bg-primary-400 opacity-30 transition-all group-hover:translate-x-[150%] duration-700"/>
*/}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-400 opacity-40 group-hover:opacity-10 duration-200"/>
        {/*<div className="absolute rotate-45 top-0 left-0 right-0 bottom-0 bg-primary-400 opacity-30 transition-all group-hover:-translate-x-full"/>*/}
        <Image className="min-w-full min-h-full" src={img} alt=""/>
        <p className="absolute bottom-0 bg-primary-800 p-2 text-2xl bg-opacity-50 group-hover:bg-opacity-90 group-hover:p-3 transition-all">{title}</p>
    </Link>
}

export default navCard;