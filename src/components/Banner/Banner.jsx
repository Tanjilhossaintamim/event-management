import BannerImg from "../../assets/istockphoto-177721382-2048x2048-transformed.jpeg";
import BirtDayImg from "../../assets/Birthday-Planner-Dhaka.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-[750px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-[750px] flex justify-center items-center"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BirtDayImg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              data-aos="fade-down"
              className="flex justify-center items-center"
            >
              <h1 className="text-box text-2xl lg:text-6xl uppercase text center font-extrabold text-color-white">
                Birthday Event Management
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[750px] px-4 lg:px-0 flex justify-center items-center"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BannerImg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div data-aos="fade-down" className="text-start font-serif">
              <div className=" text-4xl gap-3 md:text-6xl flex flex-col md:gap-6 font-extrabold  ">
                <span className="text-color-yellow">We Create </span>

                <span className="text-color-white">You</span>

                <span className="text-color-white">Celebrate</span>
                <p className="text-center text-base md:text-xl font-normal text-color-white font-opensans tracking-wide">
                  planning a Birthday wedding proposal or event in our busy city
                  is not so easy. <br /> and i takes skills to makes all look
                  easy going .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
