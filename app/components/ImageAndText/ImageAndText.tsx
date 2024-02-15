import Image, {StaticImageData} from "next/image";

const ImageAndText = ({children, img}:Readonly<{img:string|StaticImageData, children: React.ReactNode}>) => {
    return <div className="flex flex-wrap items-start justify-around">
        <Image src={img} alt="" className="md:mr-12 mb-5"/>
        <div className="lg:text-lg max-w-screen-sm p-4 md:p-0">
            {children}
        </div>
    </div>
}

export default ImageAndText;