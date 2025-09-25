"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, buttonHover, buttonTap } from "@/lib/animations";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { Products } from "@/constants/Products";

type Props = {};

function SimilarItems({}: Props) {
  return (
    <motion.section
      className="my-20 mb-32"
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {/* title */}
      <SectionTitle title="Similar Items" />

      {/* Swiper slider */}
      <motion.div
        className="relative mt-6 px-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <div className="overflow-x-hidden">
          <Swiper
            dir="rtl"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            // Responsive breakpoints
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 16 },
              480: { slidesPerView: 1.5, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2.5, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
              1280: { slidesPerView: 4, spaceBetween: 16 },
              1536: { slidesPerView: 5, spaceBetween: 20 },
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            touchRatio={1}
            touchAngle={45}
            simulateTouch={true}
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

        {/* Custom Navigation Buttons */}
        <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 -translate-y-1/2 z-10 space-x-3 flex">
          <Button className="swiper-button-prev-custom w-10 h-10 rounded-full disabled:bg-black-100/90 disabled:text-black">
            <ChevronLeft size={24} />
          </Button>

          <Button className="swiper-button-next-custom w-10 h-10 rounded-full disabled:bg-black-100/90 disabled:text-black">
            <ChevronRight size={24} />
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default SimilarItems;
