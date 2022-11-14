import React from "react";

const TestimonialCard = ({ review }) => {
  const { name, img, comment, location } = review;
  return (
    <div className="border shadow p-6 rounded">
      <p>{comment}</p>
      <div className="flex justify-start items-center mt-3">
        <div className="avatar">
          <div className="w-12 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img alt="" src={img} />
          </div>
        </div>{" "}
        <div>
          <p className="font-bold">{name}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
