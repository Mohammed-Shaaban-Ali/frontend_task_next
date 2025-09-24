import React from "react";
import ProductTitlebg from "@/public/images/ProductTitlebg.jpg";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
type Props = {
  title: string;
};

function ProductTitle({ title }: Props) {
  return (
    <section>
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
        <div
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
        >
          {title}
        </div>

        {/* Main Text */}
        <h1
          className="
        relative z-[2] text-black-500 font-bold text-center tracking-wide
        text-32 
      "
        >
          {title}
        </h1>
      </section>

      {/* breadcrumb */}
      <section className="container">
        {" "}
        <div className="container px-4 flex items-center bg-gray rounded-[16px] mt-3 h-14">
          {["Home", "Our Category", title].map((word, i) => {
            return (
              <span
                key={word}
                className={`
              text-16 text-black-500 font-semibold last:text-black-200 flex items-center gap-1
              
            `}
              >
                {word}
                {i !== 2 && <ChevronRight className="w-5 h-5  " />}
              </span>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default ProductTitle;
