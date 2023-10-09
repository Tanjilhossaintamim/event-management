import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className=" bg-color-background text-color-white min-h-screen grid place-content-center">
      <div className="py-16 md:py-24 lg:py-32 px-5 md:px-10">
        <div className="mx-auto flex-col flex w-full max-w-3xl items-center">
          <div className="text-center">
            <h1 className="font-bold mb-4 text-4xl md:text-6xl">Opps ! 404</h1>
            <div className="mx-auto max-w-[528px] mb-5 md:mb-6 lg:mb-8">
              <p className="text-[#636262] max-[479px]:text-sm">
                Page Not Found !
              </p>
            </div>
            <Link
              to={"/"}
              className="inline-block items-center bg-color-background px-8 py-4 text-center font-semibold text-color-gray"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
