"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import image1 from "@/public/images/hoodie1.png";
import image2 from "@/public/images/hoodie2.png";
import image3 from "@/public/images/hoodie3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {};

const productImages = [image1, image2, image3, image1, image2, image3];

function ProductImages({}: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="col-span-1 lg:col-span-3">
      {/* Main Product Image Swiper */}
      <div className="relative bg-gray rounded-[24px] overflow-hidden mb-2">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          autoplay={{
            delay: 3000,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-[400px] md:h-[500px]"
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                width={500}
                height={500}
                src={image.src}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}

        <Button className="swiper-button-prev-custom absolute z-10 left-4 top-1/2 -translate-y-1/2  w-10 h-10 rounded-full disabled:bg-black-100/90 disabled:text-black">
          <ChevronLeft size={24} />
        </Button>

        <Button className="swiper-button-next-custom absolute z-10 right-4 top-1/2 -translate-y-1/2  w-10 h-10 rounded-full disabled:bg-black-100/90 disabled:text-black">
          <ChevronRight size={24} />
        </Button>

        {/* Progress Indicator */}
        <div className="absolute top-0 w-full h-[73px] px-3 bg-gradient-to-b from-black/30 to-[#F4F4F433] flex items-start  pt-4 gap-1">
          {productImages.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`w-full  h-1 rounded-full ${
                activeIndex === index ? "bg-white" : "bg-[#D4D4D4]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Images Swiper */}
      <div className="grid grid-cols-3 gap-2 overflow-hidden w-full max-h-[120px] md:h-[160px] md:max-h-[160px]">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={2}
          spaceBetween={8}
          className="col-span-2 grid grid-cols-2 gap-2 overflow-hidden h-full w-full"
        >
          {productImages.slice(0, 2).map((image, index) => (
            <SwiperSlide key={index}>
              <button
                className={`relative bg-gray rounded-xl h-full w-full col-span-1 cursor-pointer group ${
                  activeIndex === index ? "border-2 border-primary" : ""
                }`}
              >
                <Image
                  width={100}
                  height={100}
                  src={image.src}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="relative  rounded-xl overflow-hidden aspect-square flex items-center justify-center">
          <span className="text-white text-32 font-bold z-10">
            +{productImages.length - 2}
          </span>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 rounded-xl overflow-hidden aspect-square flex items-center justify-center">
            {" "}
          </div>

          <Image
            fill
            src={productImages[2].src}
            alt={`Product 3`}
            className="w-full h-full object-cover z-[-1]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
