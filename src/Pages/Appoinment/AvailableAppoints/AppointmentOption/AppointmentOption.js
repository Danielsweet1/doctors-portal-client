import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-md">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-cyan-500 ">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center ">
          <div>
            {slots.length === 0 ? (
              <label
                htmlFor="booking-modal"
                className="btn  bg-cyan-500 hover:bg-cyan-700 border-none"
                disabled
              >
                Book Appointment
              </label>
            ) : (
              <label
                htmlFor="booking-modal"
                onClick={() => setTreatment(option)}
                className="btn  bg-cyan-500 hover:bg-cyan-700 border-none"
              >
                Book Appointment
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
