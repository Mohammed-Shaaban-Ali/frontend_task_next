import React from "react";
import logobg from "@/public/logo/logobg.png";
import Image from "next/image";

type Props = {
  title: string;
};

function SectionTitle({ title }: Props) {
  return (
    <section className="flex flex-col  gap-0.5 container relative">
      <h2 className="text-24 font-bold text-black-500">{title}</h2>
      <div className="h-1 w-10 rounded-full bg-primary" />

      <div className="md:w-24 w-14 h-10 md:h-14 z-[-1] absolute -top-3 md:-top-[90px] left-0">
        <Image src={logobg} width={100} height={100} alt="logo bg" />
      </div>
    </section>
  );
}

export default SectionTitle;
