import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImgTab({hid}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        onSwipe: (key) => {
            console.log(key, "swipe");
        }
      };
    
    return (
        <Slider {...settings}>
            {
                [...Array(9).keys()].map((i) => (
                    <div>
                        {/* <h3>{`https://storage.cloud.google.com/tripbigs/img/${hid}_00${i}.jpg?authuser=1`}</h3> */}
                        <img alt={"placeholder"} height={"400px"} src={`https://storage.cloud.google.com/tripbigs/imgs/${hid}_00${i}.jpg?authuser=1`} />
                    </div>
                ))
            }
        </Slider>
    )
}