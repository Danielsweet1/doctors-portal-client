import React from "react";
import banner from "../../../assets/images/appointment.png";

const ContractUs = () => {
  return (
    <div
      className="my-40 p-5 rounded-lg text-white"
      style={{ background: `url(${banner})` }}
    >
      <div className="text-center">
        <p className="font-bold text-cyan-500">Contract Us</p>
        <p className="text-3xl">Stay Connected With Us</p>
      </div>
      <form className="w-64 mx-auto mt-4">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-64 mb-3"
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="input w-64 mb-3"
        />
        <br />
        <textarea className="textarea w-64 mb-3" placeholder="Your Message"></textarea>
        <br />
        <div className="text-center">
          <button className="btn bg-cyan-600 hover:bg-cyan-700 px-8 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContractUs;
