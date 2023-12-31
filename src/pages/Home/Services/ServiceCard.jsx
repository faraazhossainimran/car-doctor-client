import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service);
    const {_id, title, img, price} = service
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl w-5/6 h-[300px]"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions">
            <h3 className="text-xl font-semibold text-[#FF3811]">Price: ${price}</h3>
            <p className="text-xl font-semibold text-[#FF3811]"><Link to={`http://localhost:5173/bookings/${_id}`}>| Buy</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
