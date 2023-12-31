import React from "react";
import Swal from "sweetalert2";

const BookingsDetail = ({ bookingsDetail, handleDelete, handleConfirm }) => {
  const { _id, customerName, email, img, date, service, price, status } = bookingsDetail;
console.log(bookingsDetail);
  return (
    <>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-error"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-lg w-24 h-24">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              {/* <div className="font-bold text-lg">{customerName}</div> */}
            </div>
          </div>
        </td>
        <td>
          <p className="text-xl font-semibold">{service}</p>
          <br />
          <span className="badge badge-error p-4">
            <p className="text-xl text-white font-semibold"> {date}</p>
          </span>
        </td>
        <td>
          <p className="text-lg text-orange-600 font-semibold">${price}</p>
        </td>
        <th>
         {
          status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :  <button onClick={()=> handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
         }
        </th>
      </tr>
    </>
  );
};

export default BookingsDetail;
