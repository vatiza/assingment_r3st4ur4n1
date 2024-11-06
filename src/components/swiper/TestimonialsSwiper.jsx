import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import comma from "../../assets/img/comma.png";
import "../style/VideoPlayBtn.css";
import coverImg from "../../assets/img/videoCoverpng.png";
import videoBtn from "../../assets/img/Play.png";
const TestimonialsSwiper = ({ swiperRef, data }) => {
  console.log(data);

  return (
    <div>
      <Swiper
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
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" flex flex-col-reverse lg:flex-row h-[355px] mt-6 relative  w-full">
              <div className="flex flex-col  items-start bg-[#FEBF00] p-9 lg:w-2/5  ">
                <img src={comma} alt="" />
                <div className="ml-4">
                  <p className="font-roboto text-xl h-28 ">
                    {item.description}
                  </p>

                  <div className="flex  flex-col mt-28   justify-end">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-bold">{item.customer_name}</p>
                        <p className="text-sm">{item.country_name}</p>
                      </div>
                      <img className="" src={item.profile_pic} alt="" />
                    </div>
                    <hr className="my-3 border-1 border-black" />
                  </div>
                </div>
              </div>

              <div className="relative md:w-1/2">
                <img className="h-full max-w-[650px]" src={coverImg} alt="" />
                <img
                  className="absolute top-1/2 right-1/2"
                  src={videoBtn}
                  alt=""
                />

                {/* <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/gVIi7T4XFXM?si=L9Yhdfj0UyP3pWq2"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSwiper;
