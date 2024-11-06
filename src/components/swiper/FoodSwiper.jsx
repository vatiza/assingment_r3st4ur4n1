import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FoodSwiper = ({ swiperRef, foodList }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <Swiper
        slidesPerView={isMobile ? 1 : 4}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {foodList?.map((food) => (
          <SwiperSlide key={food.id}>
            <div className="text-center mx-auto relative lg:w-56  mt-4 lg:mt-9 bg-white p-3">
              <div className="">
                <img
                  className=" lg:max-w-[90px] lg:max-h-[60px]  mx-auto"
                  src={food.img}
                  alt={food.name}
                />
                <hr className="mx-auto my-2 w-1/4 border-2 border-[#BD1F17] " />
              </div>

              <h3 className="font-bebas text-2xl uppercase">{food.name}</h3>
              <p className="text-sm">{food.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FoodSwiper;
