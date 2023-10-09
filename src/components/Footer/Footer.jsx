import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-color-border text-color-white">
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-[1600px] px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* <!-- Main Footer Content --> */}
        <div className="grid grid-cols-2 justify-between gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col space-y-4 py-2 text-sm font-semibold text-color-gray transition">
            <div className="my-2 text-base text-color-white">Solution</div>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Marketing
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Analytics
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Commerce
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Insights
            </Link>
          </div>
          <div className="flex flex-col space-y-4 py-2 text-sm font-semibold text-color-gray">
            <div className="my-2 text-base text-white">Support</div>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Pricing
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Documentation
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Guides
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              API&nbsp;Status
            </Link>
          </div>
          <div className="flex flex-col space-y-4 py-2 text-sm font-semibold text-color-gray">
            <div className="my-2 text-base text-white">Company</div>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              About
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Blog
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Jobs
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Press
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Partners
            </Link>
          </div>
          <div className="flex flex-col space-y-4 py-2 text-sm font-semibold text-color-gray">
            <div className="my-2 text-base text-white">Blog</div>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              About
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Blog
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Jobs
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Press
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Partners
            </Link>
          </div>
          <div className="flex flex-col space-y-4 py-2 text-sm font-semibold text-color-gray">
            <div className="my-2 text-base text-white">Products</div>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              About
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Blog
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Jobs
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Press
            </Link>
            <Link to={"/"} className="hover:font-bold hover:text-white">
              Partners
            </Link>
          </div>
        </div>
        {/* <!-- Footer Divider --> */}
        <div className="mb-14 mt-16 w-full border-b-[1.5px] border-color-border"></div>
        {/* <!-- Footer Footnotes --> */}
        <div className="flex flex-row items-start justify-between max-[767px]:flex-col max-[479px]:flex-col-reverse md:items-center">
          <div className="max-[991px]:flex-none">
            <p className="text-color-gray">
              © Copyright 2023. All rights reserved.
            </p>
          </div>
          <div className="flex gap-2">
            Developed by{" "}
            <a
              className="text-color-blue hover:underline"
              href="https://www.linkedin.com/in/tanjil-hossain-4755b3264/"
              target="_blank"
              rel="noreferrer"
            >
              Tanjil Hossain
            </a>
          </div>
          <div className="space-x-3 py-2 text-center font-semibold">
            <Link
              to={"/"}
              className="inline-block text-color-gray transition hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              to={"/"}
              className="inline-block text-color-gray transition hover:text-white"
            >
              License
            </Link>
            <Link
              to={"/"}
              className="inline-block text-color-gray transition hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
