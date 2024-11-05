import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import tamatoSalad from "../assets/img/tamatoSalad.png";
const PopularFoods = () => {
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
          <p className="p-2 bg-white shadow-2xl rounded-full text-4xl">
            <MdKeyboardArrowLeft />
          </p>
          <p className="p-2 text-red-700 bg-white shadow-2xl rounded-full text-4xl">
            {" "}
            <MdKeyboardArrowRight />
          </p>
        </div>
      </div>
      <img className="absolute w-40" src={tamatoSalad} alt="" />
    </div>
  );
};

export default PopularFoods;
