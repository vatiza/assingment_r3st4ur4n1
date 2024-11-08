import { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";
import blendImg from "../assets/svg/blendImg.svg";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navLink = (
    <>
      <li>
        <a href="#" className="">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="">
          About
        </a>
      </li>
      <li>
        <a href="https://rakibs.live/" className="">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#" className="">
          Client
        </a>
      </li>

      <li>
        <a href="https://rakibs.live/blogs" className="">
          Blog
        </a>
      </li>
      <li>
        <a href="https://rakibs.live/blogs" className="">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky bg-[#BD1F17] text-white top-0 z-20 ">
      <div
        className="px-7 py-3  lg:px-40"
        style={{ backgroundImage: `url(${blendImg})` }}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-3 ">
            <img src={logo} alt="Logo" className="h-8 w-auto " />
            <h1 className="font-poppins text-2xl font-semibold">
              Restau<span className="font-normal">rant</span>
            </h1>
            <div className="hidden lg:flex items-center font-raleway list-none gap-5 ml-9">
              {navLink}
            </div>
          </div>

          <div className="hidden lg:flex items-center ml-[220px]">
            <button className="uppercase px-3 py-2 bg-yellow-400 font-roboto text-black text-sm font-semibold">
              book a table{" "}
            </button>
          </div>
          <div className="flex gap-6 ">
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed z-40 top-0 left-0 h-full w-3/4 bg-[#BD1F17] overflow-hidden flex flex-col gap-12 origin-left duration-700 transform ${
          toggleMenu ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundImage: `url(${blendImg})` }}
      >
        <div className="px-8">
          <div className="flex flex-col list-none mt-10 gap-1 font-raleway   tracking-wider">
            <h1 className="text-4xl">Restaurant</h1>
            <hr className="mb-3" />
            {navLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
