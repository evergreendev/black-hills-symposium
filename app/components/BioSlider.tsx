'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BioSlider = ({children}:{children: React.ReactNode}) => {
    const sliderSettings = {
        dots: true,
        arrows:true,
        autoplay: true,
        infinite: true,
        draggable: false,
        pauseOnHover: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll:1,
    }

    return <div>
        <Slider {...sliderSettings}>
            {
                children
            }
        </Slider>
    </div>
}

export default BioSlider;