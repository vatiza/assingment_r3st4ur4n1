import { useState } from "react";
import marketImg from "../assets/svg/marketexp.svg";
import marketExp from "../assets/svg/MarketPlace.svg";
import { LuPhoneCall } from "react-icons/lu";
import "./Tabs.css";
const MarketExperiences = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className=" mt-20 mb-40   lg:px-40">
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
                    <h2 className="font-bebas text-4xl mr-16">
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
                      <div className="flex items-center text-3xl">
                        <LuPhoneCall className="text-red-600" />{" "}
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
    </div>
  );
};

export default MarketExperiences;
