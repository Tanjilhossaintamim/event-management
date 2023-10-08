import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/validateEmail";

const Register = () => {
  const [type, setType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordTypeType] =
    useState("password");
  const handelShowPassword = () => {
    type == "password" ? setType("text") : setType("password");
  };
  const handelShowConfirmPassword = () => {
    confirmPasswordType == "password"
      ? setConfirmPasswordTypeType("text")
      : setConfirmPasswordTypeType("password");
  };
  // for error
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // input value
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handelRegister = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    const eerror = validateEmail(email);
    const ename = name.length < 4;
    if (!eerror) {
      setEmailError("Email Invalid !");
    }
    if (ename) {
      setNameError("name mustbe 4 character");
    }
    // regular expession for password
    const capitalLetterRegex = /[A-Z]/;
    const hasCapitalLetter = capitalLetterRegex.test(password);
    const smallLetterRegex = /[a-z]/;
    const hasSmallLetter = smallLetterRegex.test(password);
    const specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~]/;
    const hasSpecialCharacter = specialCharacterRegex.test(password);
    const numberRegex = /\d/;
    const hasNumber = numberRegex.test(password);
    const lengthRegex = /.{8,}/;
    const isLengthValid = lengthRegex.test(password);

    if (!isLengthValid) {
      setPasswordError("Password mustbe 8 character !");
    } else if (!hasSmallLetter) {
      setPasswordError("Password mustbe atlast one smallletter !");
    } else if (!hasSpecialCharacter) {
      setPasswordError("Password mustbe atlast one special character !");
    } else if (!hasNumber) {
      setPasswordError("Password mustbe atlast one number !");
    } else if (!hasCapitalLetter) {
      setPasswordError("Password mustbe atlast one capitalletter !");
    }
    if (password != confirmpassword) {
      setConfirmPasswordError("password does not matched !");
    }
  };
  return (
    <div className="flex justify-center items-center my-10 ">
      <div className="text-color-white text-center font-bold px-4 lg:px-0 ">
        <h1 className="text-4xl text-center">
          Please <span className="text-color-blue">Register</span>{" "}
        </h1>
        <p className="text-color-gray text-base mt-2 text-center">
          Don&apos;t share your login information with other.
        </p>

        <div className="w-full lg:w-[500px] mt-10">
          <form
            onSubmit={handelRegister}
            className="w-full flex flex-col gap-9"
          >
            <div className="w-full text-start flex flex-col gap-3 justify-start">
              <label className="text-color-gray" htmlFor="email">
                Your Name <span className="text-red-800">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Tanjil Hossain"
                className="bg-[#243149] h-9 px-3 rounded outline-none"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <small className="text-red-700">{nameError}</small>}
            </div>
            <div className="w-full text-start flex flex-col gap-3 justify-start">
              <label className="text-color-gray" htmlFor="email">
                Your Email <span className="text-red-800">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exmple@gmail.com"
                className="bg-[#243149] h-9 px-3 rounded outline-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <small className="text-red-700">{emailError}</small>
              )}
            </div>
            <div className="w-full text-start flex flex-col gap-3 justify-start">
              <label className="text-color-gray" htmlFor="email">
                Your Password <span className="text-red-800">*</span>
              </label>
              <div className="w-full flex items-center">
                <input
                  type={type}
                  name="password"
                  id="password"
                  placeholder="***********"
                  className="bg-[#243149] h-9 px-3 rounded-l w-full outline-none"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {passwordError && (
                <small className="text-red-700">{passwordError}</small>
              )}
            </div>
            <div className="w-full text-start flex flex-col gap-3 justify-start">
              <label className="text-color-gray" htmlFor="email">
                Confirm Your Password <span className="text-red-800">*</span>
              </label>
              <div className="w-full flex items-center">
                <input
                  type={confirmPasswordType}
                  name="confirmpassword"
                  id="password"
                  placeholder="***********"
                  className="bg-[#243149] h-9 px-3 rounded-l w-full outline-none"
                  required
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />

                <div
                  onClick={handelShowConfirmPassword}
                  className="w-[50px] flex justify-center items-center bg-[#1E293B] cursor-pointer rounded-r h-9"
                >
                  {confirmPasswordType == "password" ? (
                    <AiFillEye color="#94a3b4" size={20} />
                  ) : (
                    <AiFillEyeInvisible color="#94a3b4" size={20} />
                  )}
                </div>
              </div>
              {confirmPasswordError && (
                <small className="text-red-700">{confirmPasswordError}</small>
              )}
            </div>
            <div className="flex justify-start gap-2 items-center text-color-gray">
              <input
                type="checkbox"
                name="tarms"
                required
                id=""
                className="bg-color-gray"
              />{" "}
              accept terms & condition
            </div>
            <div className="w-full flex justify-between items-center">
              <button
                type="submit"
                className="w-[5em] h-[2em] text-lg flex justify-center items-center bg-[#0284C7] rounded-[30em] text-color-white font-semibold hover:bg-color-blue"
              >
                Register
              </button>

              <Link to={"/"} className="text-[#309CCF] cursor-pointer">
                Forgot Password?
              </Link>
            </div>
            <span className="text-color-gray py-2 border-2 w-2/3 mx-auto border-color-border rounded-3xl">
              Continue With Google
            </span>
            <p className="text-color-gray">
              Already have an account ?{" "}
              <Link className="text-[#309CCF] hover:underline" to={"/login"}>
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
