import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption/AppointmentOption";

const AvailableAppoints = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP')

  const { data: appointmentOptions = [],refetch } = useQuery({
    queryKey: ["appointmentOptions",date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then((res) =>
        res.json()
      ),
  });

  return (
    <div className="my-16">
      <h2 className="text-center font-bold text-xl text-cyan-500">
        Available Appointments on {format(selectedDate, "PP")}
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoints;
