import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsDetail from "./BookingsDetail";

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
    {bookingsDetails.map(bookingsDetail => <BookingsDetail key={bookingsDetail._id} bookingsDetail={bookingsDetail}></BookingsDetail>)}

    </tbody>

    
  </table>
</div>
    </div>
  );
};

export default BookingsDetails;
