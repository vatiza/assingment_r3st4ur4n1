import { FiClock, FiPhoneCall } from "react-icons/fi";
import footerImg from "../assets/img/FooterImg.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-center  "
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="px-7 lg:px-40 pb-16   bg-black bg-opacity-75   ">
        <h1 className="uppercase text-center pt-12 lg:pt-32 text-white  font-bebas text-5xl">
          We ready to have you the best dining experiences
        </h1>
        <div className="flex flex-col lg:flex-row text-center mt-10 justify-evenly">
          <div>
            <FiClock className="text-[#FEBF00] mx-auto my-3 text-3xl" />
            <div className="text-white ">
              <h1 className="font-bebas text-3xl">Opening Hours</h1>
              <p>Monday - Sunday</p>
              <p>9:00 AM to 11:30 PM</p>
            </div>
          </div>
          <div className="">
            <FiPhoneCall className="text-[#FEBF00] my-3 mx-auto text-3xl" />
            <div className="text-white">
              <h1 className="font-bebas text-3xl">LET'S TALK</h1>
              <p>Phone: 1-800-222-4545</p>
              <p>Fax: 1-800-222-4545</p>
            </div>
          </div>
          <div className="">
            <MdOutlineEmail className="text-[#FEBF00] mx-auto my-3 text-3xl" />
            <div className="text-white">
              <h1 className="font-bebas text-3xl">BOOK A TABLE</h1>
              <p>Email: demo@website.com</p>
              <p>Support: support@website.com</p>
            </div>
          </div>
          <div className="">
            <CiLocationOn className="text-[#FEBF00] text-3xl mx-auto my-3" />
            <div className="text-white">
              <h1 className="font-bebas text-3xl">Our Address</h1>
              <p>123 Stree New York City</p>
              <p>United States Of America</p>
            </div>
          </div>
        </div>
        <div className="flex  justify-center mt-20 lg:mt-40  ">
          <div className="text-center">
            <div className="flex gap-4 text-white justify-center mb-4">
              <IoLogoFacebook className="border rounded-full text-4xl p-2 lg:text-5xl lg:p-3" />
              <RiTwitterXFill className="border rounded-full text-4xl p-2 lg:text-5xl lg:p-3" />
              <FaSquareInstagram className="border rounded-full text-4xl p-2 lg:text-5xl lg:p-3" />
              <FaLinkedin className="border rounded-full text-4xl p-2 lg:text-5xl lg:p-3" />
            </div>
            <p className="text-white font-roboto text-sm flex lg:flex-none gap-2 lg:text-xl ">
              © 2023{" "}
              <span className="text-[#FEBF00] hidden lg:block">Niomax</span> All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
