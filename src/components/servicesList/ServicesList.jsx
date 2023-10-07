import { useEffect, useState } from "react";
import Service from "./Service";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-color-background py-20 border-y-2 border-color-border">
      <h1 className="text-4xl font-semibold text-color-white text-center">
        Our <span className="text-color-blue">Services</span>
      </h1>
      <p className="text-center text-lg text-color-gray font-semibold leading-7 mt-2">
      We provide birthday services
      </p>
      <div className="max-w-[1600px] mx-auto px-4 lg:px-0 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
