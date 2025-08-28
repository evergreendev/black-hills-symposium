'use client';
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgA from "@/public/2025/3769158129.jpg";
import imgB from "@/public/2025/BH Defense Sym.-034.jpg";
import imgC from "@/public/2025/BH Defense Sym.-082.jpg";
import imgD from "@/public/2025/BH Defense Sym.-085.jpg";
import imgE from "@/public/2025/BH Defense Sym.-112.jpg";
import imgF from "@/public/2025/BH Defense Sym.-117.jpg";
import imgG from "@/public/2025/BH Defense Sym.-210.jpg";
import imgH from "@/public/2025/BH Defense Sym.-274.jpg";
import Image from "next/image";

const imgArr = [imgA,imgB,imgC,imgD,imgE,imgF,imgG,imgH];

const ImageSlider = () => {
    const [screenWidth, setScreenWidth] = useState(1000);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        console.log(window.screen.width);
    },[]);

    const sliderSettings = {
        dots: true,
        arrows:true,
        autoplay: true,
        infinite: true,
        draggable: false,
        autoplaySpeed: 5000,
        speed: 700,
        slidesToShow: Math.ceil(screenWidth / 600),
        adaptiveHeight: true,
        slidesToScroll:1
    }

    return <div>
        <Slider {...sliderSettings}>
            {
                imgArr.map((img, idx) => {
                    return <Image src={img} alt="" key={idx}/>
                })
            }
        </Slider>
    </div>
}

export default ImageSlider;
