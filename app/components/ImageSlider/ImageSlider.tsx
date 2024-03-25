'use client';
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img0 from "@/public/slider-images/0.jpg";
import img1 from "@/public/slider-images/1.jpg";
import img2 from "@/public/slider-images/2.jpg";
import img3 from "@/public/slider-images/3.jpg";
import img4 from "@/public/slider-images/4.jpg";
import img6 from "@/public/slider-images/6.jpg";
import img7 from "@/public/slider-images/7.jpg";
import img8 from "@/public/slider-images/8.jpg";
import img9 from "@/public/slider-images/9.jpg";
import img10 from "@/public/slider-images/10.jpg";
import img11 from "@/public/slider-images/11.jpg";
import img12 from "@/public/slider-images/12.jpg";
import img13 from "@/public/slider-images/13.jpg";
import Image from "next/image";

const imgArr = [img1,img2,img3,img4,img6,img0,img7,img8,img9,img10,img11,img12,img13];

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
                imgArr.map(img => {
                    return <Image src={img} alt="" key={img.blurDataURL}/>
                })
            }
        </Slider>
    </div>
}

export default ImageSlider;