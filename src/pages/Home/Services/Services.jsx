import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
      console.log(services);
  }, []);
  return (
    <div className="container mx-auto">
      <div>
        <h3 className="text-xl font-bold text-[#FF3811] mb-6 text-center">
          Our Services
        </h3>
        <h1 className="text-3xl font-bold mt-2 text-center">
          Our Service Area
        </h1>
        <p className="text-lg mt-2 text-center mt-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br></br>words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {services.map(service => <ServiceCard service={service}></ServiceCard>)}
      </div>
    </div>
  );
};

export default Services;
