import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/icons8-flower-80 (1).png";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../provider/AuthProvider";
import DropDown from "./DropDown";

const Navbar = () => {
  const { user } = useContext(AuthContex);
  const [showNav, setShowNav] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const loaction = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (showNav) {
      setShowNav(false);
    }
    if (showDropDown) {
      setShowDropDown(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaction]);
  return (
    <section className="sticky top-0 z-50 border-b border-[rgba(248,250,252,.08)]">
      <div className="h-auto  bg-[#131A29] py-2 text-color-gray">
        <nav className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0">
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-2 xl:px-20">
            {/* <!-- LOGO - YOU CAN REPLACE THIS --> */}
            <Link className="flex items-center w-8 h-5" to={"/"}>
              <img
                src={Logo}
                alt=""
                className="inline-block max-h-10 max-w-full ring-1 ring-[#00D991] rounded-full p-1"
              />
              <span className="mt-3 ml-1 text-base text-color-white italic font-bold">
                Event
              </span>
            </Link>
            {/* <!-- MENU CONTENT 2 --> */}
            <div
              className={`mt-10 text-lg  ${
                showNav ? "flex flex-col transition-all duration-500" : "hidden"
              } items-start  space-y-8 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0`}
            >
              <NavLink
                to={"/"}
                className="px-5 py-2 font-medium rounded-lg text-color-gray text-sm transition hover:text-color-white max-[991px]:block md:px-10 lg:px-4"
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className="px-5 py-2 font-medium rounded-lg text-color-gray text-sm transition hover:text-color-white max-[991px]:block md:px-10 lg:px-4"
              >
                About
              </NavLink>
              <NavLink
                to={"/booking-list"}
                className="px-5 py-2 font-medium rounded-lg text-color-gray text-sm transition hover:text-color-white max-[991px]:block md:px-10 lg:px-4"
              >
                Booking List
              </NavLink>

              {!user ? (
                <Link
                  to={"/login"}
                  className="w-[5em] h-[2em] flex justify-center items-center bg-[#0284C7] rounded-[30em] text-color-white font-semibold"
                >
                  Login
                </Link>
              ) : (
                <DropDown
                  showDropDown={showDropDown}
                  control={() => setShowDropDown((prv) => !prv)}
                />
              )}
            </div>
            {/* <!-- BURGER MENU --> */}
            <span
              onClick={() => setShowNav((prev) => !prev)}
              className="absolute right-5 lg:hidden cursor-pointer"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
