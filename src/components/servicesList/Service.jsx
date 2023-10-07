import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Service = ({ service }) => {
  const { id, eventName, price, image } = service || {};
  return (
    <div
      data-aos="fade-up"
      className="block h-[550px] rounded-lg bg-[#0F172A] border border-color-border  hover:shadow-lg   transition-all duration-300 hover:scale-105"
    >
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat min-h-[350px] grow cursor-pointer"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <Link to={`/event-details/${id}`}>
          <img
            className="rounded-t-lg h-[350px]"
            src={image}
            alt={eventName}
            width={"100%"}
          />
        </Link>
      </div>
      <div className="p-6 h-[200px] grow">
        <h5 className="mb-2 text-xl font-medium leading-tight text-color-white">
          {eventName}
        </h5>
        <p className="mb-4 text-xl text-color-gray">{price}</p>
        <Link to={`/event-details/${id}`}>
          <button
            type="button"
            className="inline-block rounded bg-[rgb(25,113,194)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-color-white  transition duration-150 ease-in-out btn shadow-none"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
