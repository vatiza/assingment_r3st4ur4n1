import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import FoodSwiper from "./swiper/FoodSwiper";

import { useRef } from "react";
const PopularFoods = () => {
  const swiperRef = useRef(null);
  const foodList = [
    {
      id: 1,
      img: "https://i.postimg.cc/VkvGCvQp/img3.png",
      name: "vegetables burger",
      description: "Barbecue Italian cuisine",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/Hxg9BsRp/img4.png",
      name: "Spacial Pizza ",
      description: "Barbecue Italian cuisine",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/J0gyYp0b/img2.png",
      name: "Spacial French fries ",
      description: "Barbecue Italian cuisine",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/jd4zMXc7/img4.png",
      name: "Spacial Salad ",
      description: "Barbecue Italian cuisine",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/J0gyYp0b/img2.png",
      name: "Spacial Pasta ",
      description: "Barbecue Italian cuisine",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/bN9rtYHx/img1.png",
      name: "Spacial Pizza ",
      description: "Barbecue Italian cuisine",
    },
    {
      id: 7,
      img: "https://i.postimg.cc/Hxg9BsRp/img4.png",
      name: "Spacial Pizza ",
      description: "Barbecue Italian cuisine",
    },
  ];
  const swiperBtn = (
    <>
      <div className="flex gap-4  items-center">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 bg-white shadow-2xl rounded-full text-3xl"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 text-red-700 bg-white shadow-2xl rounded-full text-3xl"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </>
  );

  return (
    <div className="bg-[#faf5f0] px-7  relative pb-10   pt-10     lg:px-40">
      <div className="flex flex-row items-center justify-between">
        <div>
          <div className="flex items-center gap-2 ">
            <input type="checkbox" />
            <p className="font-roboto text-red-600 text-sm font-semibold">
              Crispy, Every Bite Taste
            </p>
          </div>
          <h1 className="font-bebas text-4xl lg:text-5xl mt-3">
            POPULAR FOOD ITEMS
          </h1>
        </div>
        <div className="hidden lg:block">{swiperBtn}</div>
      </div>
      <FoodSwiper swiperRef={swiperRef} foodList={foodList} />
      <div className="flex justify-center mt-3 lg:hidden">{swiperBtn}</div>
    </div>
  );
};

export default PopularFoods;
