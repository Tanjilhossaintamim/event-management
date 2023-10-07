import TestMonial from "./TestMonial";

const TestmonialList = () => {
  return (
    <div data-aos="fade-up" className="bg-color-background text-white">
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* <!-- Component --> */}
        <div className="flex flex-col items-center">
          {/* <!-- Heading Content --> */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <div className="w-full max-w-[800px] text-center">
              <h2 className="mb-5 text-4xl text-color-white font-semibold md:text-5xl">
                What our <span className="text-color-blue">clients are</span>{" "}
                saying
              </h2>
              <div className="mx-auto w-full max-w-lg">
                <p className="text-center text-lg text-color-gray font-semibold leading-7 mt-2">
                  Customers have given their reviews
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Reviews --> */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-1 md:grid-cols-2">
              <TestMonial name={"Mim"} />
              <TestMonial name={"Moon"} />
              <TestMonial name={"Mariam"} />
              <TestMonial name={"Toma"} />
            </div>
          </div>
          <span className="rounded-full cursor-pointer bg-[#081631] px-6 py-4 font-bold text-[#7786a7] transition hover:bg-[#2d6ae0] hover:text-white">
            Check All&nbsp;Reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestmonialList;
