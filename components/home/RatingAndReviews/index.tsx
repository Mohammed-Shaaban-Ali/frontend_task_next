"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import React from "react";
import RatingList from "./RatingList";
import AddCommentIcon from "@/public/icons/AddComment.svg";
import StarFill from "@/public/icons/StarFill.svg";
import Image from "next/image";
type Props = {};

const reatStat = [
  { number: 5, percentage: 67 },
  { number: 4, percentage: 15 },
  { number: 3, percentage: 6 },
  { number: 2, percentage: 3 },
  { number: 1, percentage: 9 },
];

function RatingAndReviews({}: Props) {
  return (
    <section className="container my-5">
      <section className="flex flex-col max-w-[1100px]">
        {/* title */}
        <SectionTitle title="Rating & Reviews" />

        <div className="flex items-center flex-col md:flex-row gap-5 md:gap-10">
          {/* left rating */}
          <div className="space-x-2">
            <span className="text-120 font-semibold text-black-500">4,5</span>
            <span className="text-24 text-black-100 font-semibold pt-2">
              /5
            </span>
          </div>

          {/* stats */}
          <div className="flex flex-col gap-2 w-full max-w-[484px]">
            {reatStat.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Image src={StarFill} width={24} height={24} alt="" />
                  <span className="text-[14px] font-semibold text-black-300">
                    {item.number}
                  </span>
                </div>
                <div className="w-full bg-black-50 rounded-full h-[6px] overflow-hidden">
                  <div
                    className="bg-primary h-[6px] rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="text-[14px] font-semibold text-black-300 flex gap-0 items-center text-nowrap">
                  % {item.percentage}
                </div>
              </div>
            ))}
          </div>

          {/* total reviews */}
          <div className="md:flex flex-col items-center ms-auto me-2 hidden">
            <span className="text-16 text-black-300 -mb-2">Total Reviews</span>
            <span className="text-60 font-bold text-black-500">3.0K</span>
            <Button>
              Add Comment
              <Image
                src={AddCommentIcon}
                alt="AddCommentIcon"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>

        <RatingList />
      </section>
    </section>
  );
}

export default RatingAndReviews;
