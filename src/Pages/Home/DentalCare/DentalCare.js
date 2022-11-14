import React from "react";
import img from '../../../assets/images/treatment.png'
import Button from "../../../Components/Button/Button";

const DentalCare = () => {
  return (
    <div className="my-40">
      <div className="hero">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src={img}
            className=" rounded-lg shadow-2xl mx-auto w-[450px] "
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
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

export default DentalCare;
