import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import FoodSwiper from "./swiper/FoodSwiper";
import tamatoSalad from "../assets/img/tamatos.png";
import { useRef } from "react";
const PopularFoods = () => {
  const swiperRef = useRef(null);
  return (
    <div className="bg-[#faf5f0] h-screen relative mt-7 pt-10  mb-10   lg:px-40">
      <div className="flex flex-row items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="font-roboto text-red-600 text-sm font-semibold">
              Crispy, Every Bite Taste
            </p>
          </div>
          <h1 className="font-bebas text-6xl mt-3">POPULAR FOOD ITEMS</h1>
        </div>
        <div className="flex gap-4  items-center">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 bg-white shadow-2xl rounded-full text-4xl"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 text-red-700 bg-white shadow-2xl rounded-full text-4xl"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <FoodSwiper swiperRef={swiperRef} />
      <img
        className="hidden lg:block absolute w-30 -left-11 top-28"
        src={tamatoSalad}
        alt=""
      />
    </div>
  );
};

export default PopularFoods;
