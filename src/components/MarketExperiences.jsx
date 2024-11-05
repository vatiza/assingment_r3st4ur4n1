import { useState } from "react";
import marketImg from "../assets/svg/marketexp.svg";
import marketExp from "../assets/svg/MarketPlace.svg";
import { LuPackage, LuPhoneCall } from "react-icons/lu";
import "./Tabs.css";
import { FiShoppingBag } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";
import tamatoImg from "../assets/svg/tamatoImg.svg";
const MarketExperiences = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className=" relative mt-20 mb-40   lg:px-40">
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="relative w-[500px]">
          <img src={marketImg} alt="" />
          <img
            className="absolute top-6 left-0 w-[241px] "
            src={marketExp}
            alt=""
          />
        </div>
        <div>
          <div className="w-[450px]">
            <div className="tabs">
              <div className="tab-list">
                {["About", "Experience", "Contact"].map((tab, index) => (
                  <div
                    key={index}
                    className={`tab ${activeTab === index ? "active" : ""}`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab}
                  </div>
                ))}
              </div>
              <div className="tab-content">
                {activeTab === 0 && (
                  <div className="tab-panel">
                    <h2 className="font-bebas text-4xl mt-3 mr-16">
                      Exceptional culinary experience and delicious food
                    </h2>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur similique harum fuga quas voluptate illo
                      excepturi laudantium esse velit magnam! Vero earum eum
                      deleniti assumenda repellendus alias excepturi id
                      explicabo, accusamus corporis facilis aut dolorem nesciunt
                      possimus pariatur.
                    </p>
                    <div className="flex  items-center mt-6 gap-6">
                      <div>
                        <button className="bg-yellow-500  text-black font-semibold py-2 px-4 uppercase font-roboto  hover:bg-yellow-600">
                          about more
                        </button>
                      </div>
                      <div className="flex items-center">
                        <LuPhoneCall className="text-red-600  text-3xl" />{" "}
                        <p className="font-roboto font-semibold ml-2">
                          01629563621
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="tab-panel">
                    <h2 className="font-bebas text-[45px]">
                      Experience about this market
                    </h2>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eveniet quisquam facilis placeat et dolorem magni!
                      Veritatis quo quia quaerat distinctio?
                    </p>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="tab-panel">
                    <h2 className="font-bebas text-[45px]">
                      Contact details on this market
                    </h2>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eveniet quisquam facilis placeat et dolorem magni!
                      Veritatis quo quia quaerat distinctio?
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start mt-20  justify-evenly">
        <div className="flex gap-4 items-center ">
          <p className="p-4 rounded-full bg-[FFFFFF] shadow-2xl">
            <LuPackage className="text-4xl text-red-600" />
          </p>
          <div>
            <h1 className="uppercase font-bebas text-3xl">fast delivery</h1>
            <p>Within 30 minutes</p>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <p className="p-4 rounded-full bg-[FFFFFF] shadow-2xl">
            <SlBadge className="text-4xl text-red-600" />
          </p>
          <div>
            <h1 className="uppercase font-bebas text-3xl">absolute dining</h1>
            <p>Best buffet restaurant</p>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <p className="p-4 rounded-full bg-[FFFFFF] shadow-2xl">
            <FiShoppingBag className="text-4xl text-red-600" />
          </p>
          <div>
            <h1 className="uppercase font-bebas text-3xl">pickup delivery</h1>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>

      <img className="absolute top-1/3 right-0 w-40" src={tamatoImg} alt="" />
    </div>
  );
};

export default MarketExperiences;
