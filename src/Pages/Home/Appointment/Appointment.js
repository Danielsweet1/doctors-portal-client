import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import Button from "../../../Components/Button/Button";
const Appointment = () => {
  return (
    <div className="my-40">
      <div
        className="hero h-[455px]"
        style={{ background: `url(${appointment})` }}
      >
        <div className="hero-content grid grid-cols-1 md:grid-cols-2">
          <img src={doctor} className="-mt-44 hidden md:block" alt="" />
          <div className="text-white px-3">
            <p className="text-lg font-bold text-cyan-500">Appointment</p>
            <h1 className="text-3xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
