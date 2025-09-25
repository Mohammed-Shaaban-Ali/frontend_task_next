"use client";
import React from "react";
import ProductTitlebg from "@/public/images/ProductTitlebg.jpg";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import {
  fadeInUp,
  textRevealInView,
  staggerContainerInView,
  staggerItemInView,
} from "@/lib/animations";

type Props = {
  title: string;
};

function ProductTitle({ title }: Props) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <section
        className={`
         h-[134px] md:h-[193px] bg-gray w-full flex items-center justify-center relative overflow-hidden
    `}
      >
        <Image
          src={ProductTitlebg}
          alt="ProductTitlebg"
          fill
          className="object-cover z-0 opacity-5 filter grayscale select-none pointer-events-none"
          priority
        />
        {/* Background Text */}
        <motion.div
          className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          font-black tracking-wider select-none pointer-events-none
          text-80 whitespace-nowrap z-1
        `}
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeColor: "rgba(0, 0, 0, 0.05)",
            WebkitTextStrokeWidth: "1px",
            color: "transparent",
          }}
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          {title}
        </motion.div>

        {/* Main Text */}
        <motion.h1
          className="
        relative z-[2] text-black-500 font-bold text-center tracking-wide
        text-32 
      "
          variants={textRevealInView}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>
      </section>

      {/* breadcrumb */}
      <motion.section
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className="container px-4 flex items-center bg-gray rounded-[16px] mt-3 h-14 overflow-x-auto"
          variants={staggerContainerInView}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {["Home", "Our Category", title].map((word, i) => {
            const isLast = i === 2;
            return (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-nowrap"
                variants={staggerItemInView}
              >
                <span
                  className={`text-14 font-medium ${
                    isLast ? "text-black-200" : "text-black-500"
                  }`}
                >
                  {word}
                </span>
                {!isLast && <ChevronRight className="w-4 h-4 text-black-300" />}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
    </motion.section>
  );
}

export default ProductTitle;
