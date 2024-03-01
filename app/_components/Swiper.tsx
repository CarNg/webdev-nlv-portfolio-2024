"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Swiper(props: { images: any[] }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    dotsClass: "slick-dots",
  };

  return (
    <Slider {...sliderSettings}>
      {props.images.map((i) => {
        return (
          <div key={i.title}>
            <div className="w-full pt-[45%] relative">
              <Image
                className="object-contain"
                priority
                src={i.url}
                alt={i.title}
                layout="fill"
              />
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
