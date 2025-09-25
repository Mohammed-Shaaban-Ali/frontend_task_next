import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React from "react";

type Props = {};

function RatingList({}: Props) {
  return (
    <div className="space-y-6 mt-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex  flex-col gap-4 md::gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-20 font-semibold text-black-500">
                Alex Daewn
              </span>
              <div className="flex gap-1 items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    width={18}
                    className="text-primary fill-primary  last:text-primary/40 last:fill-primary/50"
                  />
                ))}
              </div>
            </div>
            <span className="text-14 text-black-300 ">4 months ago</span>
          </div>
          <p className="text-16 text-black-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed{" "}
          </p>
          {index != 3 ? (
            <div className="h-px w-full bg-black-50"></div>
          ) : (
            <Button variant={"ghost"} className="max-w-[210px] mx-auto mt-3">
              View More Comments
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}

export default RatingList;
