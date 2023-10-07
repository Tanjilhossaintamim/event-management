import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/nica_dark.webp";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <section>
      <div className="h-auto w-screen bg-white py-2 text-color-black">
        <nav className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0">
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
            {/* <!-- LOGO - YOU CAN REPLACE THIS --> */}
            <Link to={"/"}>
              <img
                src={Logo}
                alt=""
                className="inline-block max-h-6 max-w-full"
              />
            </Link>
            {/* <!-- MENU CONTENT 2 --> */}
            <div
              className={`mt-10 text-lg  ${
                showNav ? "flex flex-col transition-all duration-500" : "hidden"
              } items-start  space-y-8 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0`}
            >
              <NavLink
                to={"/"}
                className="px-5 py-2 font-semibold text-color-black transition hover:text-orange-600 max-[991px]:block md:px-10 lg:px-4"
              >
                Home
              </NavLink>
              <NavLink
                to={"/pricing"}
                className="px-5 py-2 font-semibold text-color-black transition hover:text-orange-600 max-[991px]:block md:px-10 lg:px-4"
              >
                Pricing
              </NavLink>
              <NavLink
                to={"/about"}
                className="px-5 py-2 font-semibold text-color-black transition hover:text-orange-600 max-[991px]:block md:px-10 lg:px-4"
              >
                About
              </NavLink>

              <NavLink to={"/login"} className="btn">
                <span>Login</span>
              </NavLink>
            </div>
            {/* <!-- BURGER MENU --> */}
            <span
              onClick={() => setShowNav((prev) => !prev)}
              className="absolute right-5 lg:hidden cursor-pointer"
            >
              <svg
                width="1.25rem"
                height="1rem"
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
