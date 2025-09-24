"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { Products } from "@/constants/Products";

type Props = {};

function SimilarItems({}: Props) {
  return (
    <section className="  my-20 pb-20">
      {/* title */}
      <SectionTitle title="Similar Items" />

      {/* Swiper slider */}
      <div className="relative mt-6 px-2">
        <div className="overflow-x-hidden">
          <Swiper
            dir="rtl"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            // Responsive breakpoints
            breakpoints={{
              // Mobile (320px and up)
              320: {
                slidesPerView: 1.2,
                spaceBetween: 12,
              },
              // Small mobile (480px and up)
              480: {
                slidesPerView: 1.5,
                spaceBetween: 14,
              },
              // Tablet portrait (640px and up)
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              // Tablet landscape (768px and up)
              768: {
                slidesPerView: 2.5,
                spaceBetween: 16,
              },
              // Small desktop (1024px and up)
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              // Large desktop (1280px and up)
              1280: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              // Extra large desktop (1536px and up)
              1536: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            // Enable touch/swipe on mobile
            touchRatio={1}
            touchAngle={45}
            simulateTouch={true}
            // Disable navigation on very small screens
            allowTouchMove={true}
          >
            {[...Products, ...Products, ...Products].map((product, index) => (
              <SwiperSlide
                dir="ltr"
                className="basis-[fit-content]"
                key={product.id + index}
              >
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Buttons s */}
        <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 -translate-y-1/2 z-10 space-x-3 flex">
          <Button className="swiper-button-prev-custom w-10 h-10 rounded-full disabled:bg-black-100/90 disabled:text-black">
            <ChevronLeft size={24} />
          </Button>

          <Button className="swiper-button-next-custom w-10 h-10 rounded-full disabled:bg-black-100/90 disabled:text-black">
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SimilarItems;
