import headerImg from "../assets/svg/headerImg.svg";
import littleFlower from "../assets/svg/littleFlower.svg";
import offerImg from "../assets/svg/Offer.svg";
const Header = () => {
  return (
    <div className="h-screen bg-[#BD1F17]  text-white  py-3  lg:px-40">
      <div className="flex flex-row gap-24 ">
        <h1 className="absolute top-1/3 uppercase text-8xl font-bebas w-[720px] bg-gradient-to-r z-10 from-[#BD1F17] from-30%  bg-[#BD1F17] bg-opacity-25">
          Taste the authentic Saudi cuisine
        </h1>
        <div className="mt-[340px]">
          <p className="font-roboto text-[19px]  mt-3 ">
            Among the best Saudi chefs in the world, serving{" "}
            <br className="hidden lg:block" /> you something beyond flavor.{" "}
          </p>
          <button className="bg-yellow-500 mt-10 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600">
            EXPLORE MENU
          </button>
        </div>
        <div className="mt-16 w-[500px] relative  ">
          <img src={headerImg} alt="" />
          <img
            className="absolute -top-8 -right-7 w-[45px] h-[45px]"
            src={littleFlower}
            alt=""
          />
          <img className="absolute bottom-0 right-0" src={offerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
