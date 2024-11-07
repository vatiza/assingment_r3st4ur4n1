import { useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import comma from "../../assets/img/comma.png";
import videoBtn from "../../assets/img/Play.png";
import "../style/VideoPlayBtn.css";

const TestimonialsSwiper = ({ swiperRef, data }) => {
  console.log(data);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 150000,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" flex flex-col-reverse lg:flex-row  lg:h-[355px] mt-9 relative  w-full">
              <div className="flex flex-col   items-start bg-[#FEBF00] p-9 lg:w-2/5  ">
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

              <div
                className="relative h-52 lg:h-auto  lg:w-3/4 "
                style={{
                  backgroundImage: `url('https://i.ytimg.com/vi/2g3iLOmS1Zg/hqdefault.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {!isPlaying && (
                  <img
                    className="absolute top-1/2 right-1/2 translate-x-1/2 lg:translate-x-0 -translate-y-1/2 cursor-pointer"
                    src={videoBtn}
                    alt="Play button"
                    onClick={() => handlePlay()}
                  />
                )}

                {/* YouTube iframe, only visible when isPlaying is true */}
                {isPlaying && (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/2g3iLOmS1Zg?si=kdXDqr02yU72JUF4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSwiper;
