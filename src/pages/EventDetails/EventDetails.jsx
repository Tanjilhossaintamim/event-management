import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveEvent } from "../../utils/saveBookedEvent";
import { AuthContex } from "../../provider/AuthProvider";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const { setModalOpen, setModalMessage } = useContext(AuthContex);
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        const displayedEvent = data?.find((event) => event.id == id);
        setEvent(displayedEvent);
      });
  }, [id]);

  const handelSaveEvent = () => {
    const isSaved = saveEvent(event);
    if (!isSaved) {
      setModalMessage("Sorry! You Already Booked This Event !");
      setModalOpen(true);
      setTimeout(() => {
        setModalMessage("");
        setModalOpen(false);
      }, 2000);
    } else {
      setModalMessage("Event Booked Successfully !");
      setModalOpen(true);
      setTimeout(() => {
        setModalMessage("");
        setModalOpen(false);
      }, 2000);
    }
  };
  const { id: eventId, eventName, details, image, price } = event || {};
  let content = null;
  if (eventId) {
    content = (
      <>
        <img src={image} alt="" className="rounded border-2 border-green-500" />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">{eventName}</h1>
          <h6 className="text-xl font-semibold">{price}</h6>
          <p className="text-color-gray text-justify">{details}</p>
          <button
            onClick={handelSaveEvent}
            className="inline-block rounded bg-[rgb(25,113,194)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-color-white  transition duration-150 ease-in-out btn shadow-none"
          >
            Book Now
          </button>
        </div>
      </>
    );
  } else {
    content = (
      <div className="text-center text-2xl text-color-white">Not Found !</div>
    );
  }
  document.title = eventName || "Event Details";
  return (
    <div className="py-10 text-color-white grid place-content-center">
      <div className="max-w-[1600px] min-h-[80vh] mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">
        {content}
      </div>
    </div>
  );
};

export default EventDetails;
