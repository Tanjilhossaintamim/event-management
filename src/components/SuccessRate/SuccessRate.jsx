import CountUp from "react-countup";
import { useInView } from "react-hook-inview";
const SuccessRate = () => {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });
  return (
    <div
      data-aos="fade-right"
      className="relative text-color-white bg-color-background border-b-2 border-color-border"
    >
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* <!-- Heading Content --> */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-color-white text-center">
            Our <span className="text-color-blue">History</span>
          </h2>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="text-center text-lg text-color-gray font-semibold leading-7 mt-2">
              Our Customers and Orders
            </p>
          </div>
        </div>
        {/* <!-- Facts --> */}
        <div
          ref={ref}
          className="mx-auto flex max-w-[960px] flex-col px-16 py-8"
        >
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:grid-cols-4">
            {/* <!-- Fact Item --> */}
            <div className="flex flex-col items-center justify-center gap-4">
              <p>Already Booked</p>
              <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
                {isVisible && (
                  <>
                    <CountUp start={0} end={200} duration={3} />{" "}
                    <span className="text-[#c9fd02]">+</span>
                  </>
                )}
              </h2>
            </div>
            {/* <!-- Fact Item --> */}
            <div className="flex flex-col items-center justify-center gap-4">
              <p>Events</p>
              <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
                {isVisible && <CountUp start={0} end={15} />}
              </h2>
            </div>
            {/* <!-- Fact Item --> */}
            <div className="flex flex-col items-center justify-center gap-4">
              <p>Customers</p>
              <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
              {isVisible && (
                  <>
                    <CountUp start={0} end={1500} duration={3} />{" "}
                    <span className="text-[#c9fd02]">+</span>
                  </>
                )}
              </h2>
            </div>
            {/* <!-- Fact Item --> */}
            <div className="flex flex-col items-center justify-center gap-4">
              <p>Support Tickets</p>
              <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
              {isVisible && <CountUp start={0} end={630} />}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessRate;
