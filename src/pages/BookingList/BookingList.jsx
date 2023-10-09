import { useEffect } from "react";
import { useState } from "react";
import { getEvents } from "../../utils/saveBookedEvent";
import MyBooking from "../../components/MyBooking/MyBooking";

const BookingList = () => {
  const [myEvents, setMyEvents] = useState([]);
  useEffect(() => {
    const events = getEvents();
    setMyEvents(events);
  }, []);

  let content=null;
  if(myEvents.length>0){
    content=myEvents.map(event=><MyBooking event={event} key={event.id}/>)
  }
  else{
    content=<div className="text-2xl text-color-white text-center">No Booking Event !</div>
  }
  return (
    <div className="min-h-[70vh] grid place-content-center my-8 lg:my-0">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center">
            {content}
        </div>
    </div>
  );
};

export default BookingList;
