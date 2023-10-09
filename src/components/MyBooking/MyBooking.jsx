import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MyBooking = ({ event }) => {
  const { id, eventName, price, image } = event || {};
  return (
    <div className="w-[312px] h-auto lg:w-[630px] md:ml-10 lg:ml-0 lg:h-200px rounded-lg flex flex-col lg:flex-row lg:items-center text-color-white bg-[#0B1120] border border-color-border">
      <div className="w-full lg:w-[220px] h-[200px] relative ">
        <img
          src={image}
          alt={eventName}
          className="w-full h-full object-cover rounded-t-lg lg:rounded-t-none"
        />
      </div>
      <div className="ml-5 py-5 lg:py-0 ">
        <h1 className="text-2xl font-semibold mb-2 w-full">{eventName}</h1>
        <h3 className="text-[16px] font-semibold mb-2">${price}</h3>
        <Link to={`/event-details/${id}`}>
          <button className="inline-block rounded bg-[rgb(25,113,194)] px-6 pb-2 pt-2.5  font-medium uppercase leading-normal text-color-white  transition duration-150 ease-in-out btn text-xs shadow-none">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyBooking;

MyBooking.propTypes = {
  event: PropTypes.object,
};
