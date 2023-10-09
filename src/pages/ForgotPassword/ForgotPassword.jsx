import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../utils/firebase";
import { useContext } from "react";
import { AuthContex } from "../../provider/AuthProvider";

const ForgotPassword = () => {
  const { setModalMessage, setModalOpen } = useContext(AuthContex);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email).then((res) => {
      setModalMessage("We have send a Password reset link to your email !");
      setModalOpen(true);
    });
  };
  return (
    <div className="flex justify-center items-center my-10 h-[70vh]">
      <div className="text-color-white text-center font-bold px-4 lg:px-0 ">
        <h1 className="text-4xl text-center">
          Reset Your <span className="text-color-blue">Password</span>{" "}
        </h1>

        <div className="w-full lg:w-[500px] mt-10">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-9">
            <div className="w-full text-start flex flex-col gap-3 justify-start">
              <label className="text-color-gray" htmlFor="email">
                Enter Your Email <span className="text-red-800">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exmple@gmail.com"
                className="bg-[#243149] h-9 px-3 rounded outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-[5em] h-[2em] text-lg flex justify-center items-center bg-[#0284C7] rounded-[30em] text-color-white font-semibold hover:bg-color-blue"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
