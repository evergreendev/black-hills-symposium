import Image, {StaticImageData} from "next/image";
import Link from "next/link";

const navCard = ({img, url,title}: { img: StaticImageData, url: string, title:string }) => {
    return <Link href={url} className="m-auto relative overflow-hidden group block mb-5 rounded-full h-72 w-72 sm:h-96 sm:w-96 border-4 border-straw-500 shadow-md">
{/*
        <div className="absolute rotate-45 top-0 left-[-500px] right-[-500px] bottom-0 bg-primary-400 opacity-30 transition-all group-hover:translate-x-[150%] duration-700"/>
*/}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-400 opacity-60 group-hover:opacity-10 duration-200 z-10"/>
        {/*<div className="absolute rotate-45 top-0 left-0 right-0 bottom-0 bg-primary-400 opacity-30 transition-all group-hover:-translate-x-full"/>*/}
        <Image className="absolute left-1/2 -translate-x-1/2 h-full max-w-none w-[500px]" src={img} alt=""/>
        <p style={{textShadow:"2px 2px 4px black"}} className="font-serif absolute bottom-1/3 translate-y-1/2 z-20 bg-straw-500 p-3 text-4xl bg-opacity-70 group-hover:bg-opacity-90 transition-all w-full text-center font-bold">{title}</p>
    </Link>
}

export default navCard;