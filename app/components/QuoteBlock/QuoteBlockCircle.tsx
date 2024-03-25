import Image, {StaticImageData} from "next/image";

const QuoteBlockCircle = ({children, img}: Readonly<{ img: string | StaticImageData, children: React.ReactNode }>) => {
    return <div className="flex flex-wrap items-start justify-start lg:justify-center -mr-48">
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
        <Image src={img} alt="" className="-translate-y-8 shadow-lg shadow-primary-300 rounded-full w-56 aspect-square object-cover object-right-top max-w-sm z-30 md:ml-6 lg:-translate-x-24"/>
    </div>
}

export default QuoteBlockCircle;