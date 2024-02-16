import Image, {StaticImageData} from "next/image";

const QuoteBlock = ({children, img}: Readonly<{ img: string | StaticImageData, children: React.ReactNode }>) => {
    return <div className="flex flex-wrap items-start justify-start lg:justify-center">
        <div className="
        lg:text-lg
        lg:w-6/12
        p-6
        lg:pr-28
        bg-primary-300
        bg-opacity-50
        pb-10
        lg:pb-5
        lg:pl-9
        z-20
        text-primary-900
        text-justify">
            <div className="
            border-l-2
            border-primary-100
            pl-4
            hyphens-auto
        ">
                {children}
            </div>
        </div>
        <Image src={img} alt="" className="-translate-y-8 z-10 md:ml-6 lg:-translate-x-24"/>
    </div>
}

export default QuoteBlock;