import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);

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
  return (
    <div>
      <h2 className="text-2xl">My Appointments</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{booking.name}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
