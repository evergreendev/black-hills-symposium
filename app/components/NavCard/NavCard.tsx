import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

const navCard = ({img, icon, url, title}: { img?: StaticImageData, icon?: IconDefinition, url: string, title: string }) => {
    return (
        <Link href={url} className="relative overflow-hidden group block w-full md:w-4/12 h-64 bg-gradient-to-br from-primary-300 to-primary-500">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-400 opacity-30 group-hover:opacity-10 duration-200"/>
            {img ? (
                <Image className="min-w-full min-h-full object-cover" src={img} alt=""/>
            ) : (
                <div className="flex items-center justify-center w-full h-full text-primary-50">
                    {icon && <FontAwesomeIcon icon={icon} className="opacity-80 group-hover:opacity-100" size="6x"/>}
                </div>
            )}
            <p className="absolute bottom-0 bg-primary-800 p-2 text-2xl bg-opacity-50 group-hover:bg-opacity-90 group-hover:p-3 transition-all">{title}</p>
        </Link>
    );
}

export default navCard;
