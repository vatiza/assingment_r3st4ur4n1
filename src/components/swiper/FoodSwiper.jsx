import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FoodSwiper = ({ swiperRef }) => {
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
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {foodList.map((food) => (
          <SwiperSlide key={food.id}>
            <div className="text-center w-52 mt-9 bg-white p-3">
              <div className="">
                <img
                  className="max-w-[80px] max-h-[60px] mx-auto"
                  src={food.img}
                  alt={food.name}
                />
                <hr className="mx-auto my-2 w-1/2 border-t-4 border-[#BD1F17] " />
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
