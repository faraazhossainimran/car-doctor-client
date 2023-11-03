import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsDetail from "./BookingsDetail";
import Swal from "sweetalert2";

const BookingsDetails = () => {
  const { user } = useContext(AuthContext);
  const [bookingsDetails, setBookingsDetails] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookingsDetails(data);
      });
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete your bookings?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Not Now`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remainingBookings = bookingsDetails.filter(booking => booking._id !== id)
            setBookingsDetails(remainingBookings)
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="container mx-auto">
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-lg">
        <th>
        </th>
        <th>Service Image</th>
        <th>Service</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {bookingsDetails.map(bookingsDetail => <BookingsDetail key={bookingsDetail._id} handleDelete={handleDelete} bookingsDetail={bookingsDetail}></BookingsDetail>)}

    </tbody>

    
  </table>
</div>
    </div>
  );
};

export default BookingsDetails;
