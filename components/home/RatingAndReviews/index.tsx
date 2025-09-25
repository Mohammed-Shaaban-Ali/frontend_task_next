"use client";
import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import RatingList from "./RatingList";
import Image from "next/image";
import StarFill from "@/public/icons/StarFill.svg";
import AddCommentIcon from "@/public/icons/AddComment.svg";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainerInView,
  staggerItemInView,
  scaleInView,
  counterAnimationInView,
  buttonHover,
  buttonTap,
} from "@/lib/animations";

const reatStat = [
  { number: 5, percentage: 70 },
  { number: 4, percentage: 17 },
  { number: 3, percentage: 8 },
  { number: 2, percentage: 4 },
  { number: 1, percentage: 1 },
];

type Props = {};

function RatingAndReviews({}: Props) {
  return (
    <motion.section
      className="container my-5"
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <section className="flex flex-col max-w-[1100px]">
        {/* title */}
        <SectionTitle title="Rating & Reviews" />

        <motion.div
          className="flex items-center flex-col md:flex-row gap-5 md:gap-10"
          variants={staggerContainerInView}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* left rating */}
          <motion.div
            className="space-x-2"
            variants={counterAnimationInView}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <span className="text-120 font-semibold text-black-500">4,5</span>
            <span className="text-24 text-black-100 font-semibold pt-2">
              /5
            </span>
          </motion.div>

          {/* stats */}
          <motion.div
            className="flex flex-col gap-2 w-full max-w-[484px]"
            variants={staggerContainerInView}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {reatStat.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={staggerItemInView}
              >
                <div className="flex items-center gap-1">
                  <Image src={StarFill} width={24} height={24} alt="" />
                  <span className="text-[14px] font-semibold text-black-300">
                    {item.number}
                  </span>
                </div>
                <div className="w-full bg-black-50 rounded-full h-[6px] overflow-hidden">
                  <motion.div
                    className="bg-primary h-[6px] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${item.percentage}%`,
                      transition: { duration: 1, delay: index * 0.1 },
                    }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-[14px] font-semibold text-black-300 flex gap-0 items-center text-nowrap">
                  % {item.percentage}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* total reviews */}
          <motion.div
            className="md:flex flex-col items-center ms-auto me-2 hidden"
            variants={scaleInView}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <span className="text-16 text-black-300 -mb-2">Total Reviews</span>
            <span className="text-60 font-bold text-black-500">3.0K</span>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Button>
                Add Comment
                <Image
                  src={AddCommentIcon}
                  alt="AddCommentIcon"
                  width={24}
                  height={24}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          viewport={{ once: true }}
        >
          <RatingList />
        </motion.div>
      </section>
    </motion.section>
  );
}

export default RatingAndReviews;
