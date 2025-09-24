"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    title: "loarem ipsum",
    subTitle:
      "loarem ipsum loarem ipsum loarem ipsum loarem ipsum loarem ipsum ",
  },
  {
    title: "loarem ipsum",
    subTitle:
      "loarem ipsum loarem ipsum loarem ipsum loarem ipsum loarem ipsum ",
  },
  {
    title: "loarem ipsum",
    subTitle:
      "loarem ipsum loarem ipsum loarem ipsum loarem ipsum loarem ipsum ",
  },
];

export const AuthSlider = () => {
  return (
    <section className="order-2 lg:order-1 h-full min-h-[500px] lg:col-span-4 rounded-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} !bg-white !text-start !rounded-[10px]  !w-[24px] !h-[6px] transition"></span>`;
          },
        }}
        className="!p-0 w-full h-full"
      >
        {data?.map((item, index) => (
          <SwiperSlide className="!p-0 h-full" key={index}>
            <div className="relative w-full h-full rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent z-10"></div>
              <div className="w-full h-full bg-main-linear opacity-50 z-0 rounded-2xl"></div>
              {/* <Image
                src={item.image}
                alt={item.title}
                title={item.title}
                fill
                className="w-full h-full object-cover z-0 rounded-2xl"
                priority
              /> */}
              <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-14 z-20 text-start ">
                <span className="text-20 font-bold rounded-md py-1 px-2.5 text-white bg-somion/30 ">
                  somion
                </span>
                <h3 className="text-32 text-white font-bold leading-tight mt-3 mb-1">
                  {item.title}
                </h3>
                <p className="text-20 text-white/60">{item.subTitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
        
.swiper-pagination {
  text-align: right !important;
  padding-right: 48px;

  margin-bottom: 20px !important;
}
.swiper-pagination-bullet-active {
  width: 48px !important;
}
`}
      </style>
    </section>
  );
};
