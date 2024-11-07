import { SlCalender } from "react-icons/sl";
import bgImg from "../assets/img/bookingbgImg.png";
import arrowIcon from "../assets/svg/arrow.svg";
const BookingSection = () => {
  return (
    <div
      className="relative bg-cover  bg-center h-screen "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="px-7 lg:px-40 ">
        <div className="flex items-center gap-2 pt-10 lg:pt-20 ">
          <input type="checkbox" />
          <p className="font-roboto text-red-600 text-sm font-semibold">
            Book Now
          </p>
        </div>
        <h1 className="font-bebas text-4xl  mt-3 uppercase text-white">
          book your table
        </h1>
        <div className="lg:w-1/2 text-white mt-5">
          <p>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <div>
            <div className=" mt-10 mx-auto">
              <form className="space-y-4">
                <div className="lg:flex gap-5 ">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full p-3 bg-transparent border border-white text-white placeholder-white   "
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full mt-5 lg:mt-0 p-3 bg-transparent border border-white text-white placeholder-white   "
                  />
                </div>

                <div className="lg:flex lg:space-x-4">
                  <div className="flex-1 relative">
                    <input
                      type=""
                      placeholder="Reservation Date"
                      className="w-full mt-1 lg:mt-0 p-3 bg-transparent border border-white text-white placeholder-white "
                    />
                    <span className="absolute top-5 right-4 lg:right-3 lg:top-4  text-white">
                      <SlCalender />
                    </span>
                  </div>

                  <div className="lg:flex-1 relative">
                    <input
                      type=""
                      placeholder="Total People"
                      className="w-full mt-5 lg:mt-0 p-3 bg-transparent border border-white text-white placeholder-white "
                    />
                    <span className="absolute top-9 right-4 lg:right-3 lg:top-4 text-white">
                      <img src={arrowIcon} alt="" />
                    </span>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full p-3 bg-transparent border border-white text-white placeholder-white  "
                  />
                </div>
                <button className="uppercase px-2 py-2 bg-yellow-400 font-roboto text-black text-sm font-semibold">
                  book table{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
