import headerImg from "../assets/svg/headerImg.svg";
import littleFlower from "../assets/svg/littleFlower.svg";
import offerImg from "../assets/svg/Offer.svg";
const Header = () => {
  return (
    <div className="h-screen bg-[#BD1F17]  text-white  py-3   lg:px-40">
      <div className="flex flex-col px-7 lg:flex-row px- lg:gap-24  ">
        <h1 className="lg:absolute text-5xl lg:top-1/3 uppercase lg:text-8xl font-bebas lg:w-[720px] lg:bg-gradient-to-r z-0 lg:z-10 lg:from-[#BD1F17] lg:from-30%  lg:bg-[#BD1F17] lg:bg-opacity-25">
          Taste the authentic Saudi cuisine
        </h1>
        <div className="lg:mt-[340px]">
          <p className="font-roboto text-xl lg:text-[19px]  mt-3 ">
            Among the best Saudi chefs in the world, serving{" "}
            <br className="hidden lg:block" /> you something beyond flavor.{" "}
          </p>
          <button className="bg-yellow-500 mt-7 lg:mt-10 text-black font-semibold py-2 px-4 font-roboto  hover:bg-yellow-600">
            EXPLORE MENU
          </button>
        </div>
        <div className="relative z-0  mt-16 lg:w-[500px]   ">
          <img src={headerImg} alt="" />
          <img
            className="absolute -z-10 lg:z-0 -top-8 -right-0 lg:-top-12 lg:-right-7 w-20 h-20 lg:w-[45px] "
            src={littleFlower}
            alt=""
          />
          <img
            className="absolute bottom-3 right-4 lg:-bottom-2 lg:-right-12 w-20 lg:w-28"
            src={offerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
