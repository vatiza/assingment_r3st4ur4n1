import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import TestimonialsSwiper from "./swiper/TestimonialsSwiper";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const tesimonialsData = [
    {
      customer_name: "Amir Hassan",
      country_name: "Saudi Arabia",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    },
    {
      customer_name: "Fatima Ali",
      country_name: "United Arab Emirates",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "Chicken Mandi was delicious! The meat was tender, juicy, and full of flavor. I'll order it again for sure.",
    },
    {
      customer_name: "Rohit Singh",
      country_name: "India",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "The best Chicken Mandi I've had! Perfectly spiced and juicy, really worth trying.",
    },
    {
      customer_name: "Sara Mohammed",
      country_name: "Kuwait",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "Absolutely loved the Chicken Mandi! It was soft and flavorful, unlike other places where it's often dry.",
    },
    {
      customer_name: "James Lee",
      country_name: "United States",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "Great flavor and texture! This Chicken Mandi was tender and not dry at all. A fantastic meal.",
    },
    {
      customer_name: "Lina Choi",
      country_name: "South Korea",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "The Chicken Mandi was amazing! Juicy and full of spices, definitely one of the best I’ve had.",
    },
    {
      customer_name: "Ahmed Khalil",
      country_name: "Egypt",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "I tried Chicken Mandi twice, and it never disappoints. Soft, juicy, and well-cooked. Highly recommend!",
    },
    {
      customer_name: "Maria Garcia",
      country_name: "Spain",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "Perfect Chicken Mandi experience! The chicken was juicy and tender, and the spices were just right.",
    },
    {
      customer_name: "Hassan Al-Ansari",
      country_name: "Qatar",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "The Chicken Mandi is excellent. Juicy and flavorful, and the chicken wasn’t dry at all.",
    },
    {
      customer_name: "Emily Brown",
      country_name: "Australia",
      profile_pic: "https://i.postimg.cc/HL72F4QX/profile-Pic.png",
      video_url: "https://www.youtube.com/watch?v=gVIi7T4XFXM",
      description:
        "The Chicken Mandi is a must-try! Soft, juicy chicken with just the right spices. Will definitely have it again.",
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
          <h1 className="font-bebas text-5xl mt-3">
            What Some of my Customers Say
          </h1>
        </div>
        <div className="hidden lg:block">{swiperBtn}</div>
      </div>
      <TestimonialsSwiper swiperRef={swiperRef} data={tesimonialsData} />
      <div className="flex justify-center mt-3 lg:hidden">{swiperBtn}</div>
    </div>
  );
};

export default Testimonials;
