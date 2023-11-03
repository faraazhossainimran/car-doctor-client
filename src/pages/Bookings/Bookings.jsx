import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Bookings = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;
  const {user} = useContext(AuthContext)
  const handleBookService = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email || form.email.value;
    const due = form.due.value;
    const booking = {
        customerName: name,
        email, 
        img,
        date, 
        service: title,
        service_id: _id,
        price: price
    }
    fetch('http://localhost:5000/bookings', {
      method: "POST", 
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      Swal.fire(
        'Booked!',
        'Your request is succesfully added!',
        'success'
      )
    })
    console.log(booking);
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center py-12">CheckOut: {title}</h1>
    <form onSubmit={handleBookService}>
    <div className="grid grid-cols-2 gap-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            placeholder="Date"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input
            type="text"
            name="due"
            defaultValue={`$ ${price}`}
            className="input input-bordered w-full"
          />
        </div>
        
      </div>
      <input type="submit" value='Order confirm' className="btn btn-active btn-primary w-full my-8"></input>
    </form>
    </div>
  );
};

export default Bookings;
