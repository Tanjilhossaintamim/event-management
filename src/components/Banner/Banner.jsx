import BannerImg from "../../assets/istockphoto-177721382-2048x2048-transformed.jpeg";

const Banner = () => {
  return (
    <div className="h-[750px]">
      <div
        className="h-[750px] px-4 lg:px-0 flex justify-center items-center"
        style={{
          background: `linear-gradient(0deg, rgba(11, 18, 33, 0.95), rgba(11, 18, 33, 0.5)), url(${BannerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div data-aos="fade-down" className="text-center font-serif">
          <div className=" text-4xl gap-3 md:text-6xl flex flex-col md:gap-6 font-extrabold  ">
            <span className="text-color-white">We Create </span>

            <span className="text-color-blue">You Celebrate</span>

         
            <p className="text-center text-base md:text-xl font-normal text-color-gray font-opensans tracking-wide">
              planning a Birthday wedding proposal or event in our busy city is
              not so easy. <br /> and i takes skills to makes all look easy
              going .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
