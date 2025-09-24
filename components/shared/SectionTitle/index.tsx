import React from "react";

type Props = {
  title: string;
};

function SectionTitle({ title }: Props) {
  return (
    <section className="flex flex-col  gap-0.5 container">
      <h2 className="text-24 font-bold text-black-500">{title}</h2>
      <div className="h-1 w-10 rounded-full bg-primary" />
    </section>
  );
}

export default SectionTitle;
