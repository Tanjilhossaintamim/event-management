import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [type, setType] = useState("password");
  const handelShowPassword = () => {
    type == "password" ? setType("text") : setType("password");
  };
  return (
    <div className="flex justify-center items-center py-10 h-[70vh]">
      <div className="text-color-white text-center font-bold ">
        <h1 className="text-4xl text-center">
          Please <span className="text-color-blue">Login</span>{" "}
        </h1>
        <p className="text-color-gray text-base mt-2 text-center">
          Don&apos;t share your login information with other.
        </p>
        <div className="w-full lg:w-[500px] mt-10">
          <form className="w-full flex flex-col gap-9">
            <div className="w-full text-start flex flex-col gap-3 justify-start">
              <label className="text-color-gray" htmlFor="email">
                Enter Your Email <span className="text-red-800">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exmple@gmail.com"
                className="bg-[#243149] h-9 px-3 rounded"
                required
              />
            </div>
            <div className="w-full text-start flex flex-col gap-3 justify-start">
              <label className="text-color-gray" htmlFor="email">
                Enter Your Password <span className="text-red-800">*</span>
              </label>
              <div className="w-full flex items-center">
                <input
                  type={type}
                  name="password"
                  id="password"
                  placeholder="***********"
                  className="bg-[#243149] h-9 px-3 rounded-l w-full"
                  required
                />
                <div
                  onClick={handelShowPassword}
                  className="w-[50px] flex justify-center items-center bg-[#1E293B] cursor-pointer rounded-r h-9"
                >
                  {type == "password" ? (
                    <AiFillEye color="#94a3b4" size={20} />
                  ) : (
                    <AiFillEyeInvisible color="#94a3b4" size={20} />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <button
                type="submit"
                className="w-[5em] h-[2em] text-lg flex justify-center items-center bg-[#0284C7] rounded-[30em] text-color-white font-semibold hover:bg-color-blue"
              >
                Login
              </button>
              <Link to={"/"} className="text-[#309CCF] cursor-pointer">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
