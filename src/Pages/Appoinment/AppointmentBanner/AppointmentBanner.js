import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
  return (
    <div className="my-20">
      <div
        className="hero py-8"
        style={{ background: `url(${bg})`, backgroundSize: "contain" }}
      >
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mx-auto bg-white rounded-lg p-2 shadow-lg">
            <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            />
          </div>
          <img src={chair} className=" rounded-lg " alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
