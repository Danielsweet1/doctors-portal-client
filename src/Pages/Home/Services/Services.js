import React from "react";
import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";

const Services = () => {
  return (
    <div className="my-20">
        <div className="text-center">
            <p className="font-semibold text-xl mb-3 text-cyan-500">Our Services</p>
            <h5 className="text-3xl mb-5">Services We Provide</h5>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="text-center  p-5 rounded-md shadow-md">
          <img className="mx-auto" src={img1} alt="" />
          <div>
            <h3 className="font-semibold mt-3">Fluoride Treatment</h3>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="text-center shadow-md p-5 rounded-md">
          <img className="mx-auto" src={img2} alt="" />
          <div>
            <h3 className="font-semibold mt-3">Cavity Filling</h3>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="text-center shadow-md p-5 rounded-md">
          <img className="mx-auto" src={img3} alt="" />
          <div>
            <h3 className="font-semibold mt-3">Teeth Whitening</h3>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
