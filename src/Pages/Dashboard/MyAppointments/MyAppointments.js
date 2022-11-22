import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointments = () => {
  const { user, loading, setLoading } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="text-2xl mb-4 text-center">My Appointments</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length &&
              bookings.map((booking, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{booking.name}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-outline ">Pay</button>
                      </Link>
                    )}
                    {booking.paid && <span>Paid</span>}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
