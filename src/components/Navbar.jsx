import { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";

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
        <a href="#" className="">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#" className="">
          Client
        </a>
      </li>
      <li>
        <a href="#" className="">
          Blog
        </a>
      </li>
      <li>
        <a href="#" className="">
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="sticky bg-[#BD1F17] text-white top-0 z-10 ">
      <div className="px-2 py-3  lg:px-40">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 ">
            <img src={logo} alt="Logo" className="h-8 w-auto " />
            <h1>Restaurant</h1>
            <div className="hidden lg:flex items-center list-none gap-5 ml-9">
              {navLink}
            </div>
          </div>

          <div className="hidden lg:flex items-center ml-[350px]">
            <button className="uppercase px-3 py-2 bg-yellow-400 text-black text-sm font-semibold">
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
        className={`fixed z-40 top-0 left-0 h-full w-3/4 bg-gray-100 overflow-hidden flex flex-col gap-12 origin-left duration-700 transform ${
          toggleMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col list-none mt-10  font-bold tracking-wider">
            {navLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
