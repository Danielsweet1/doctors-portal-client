import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
  const data = useLoaderData();
  const { treatment, appointmentDate, slot, price } = data;
  return (
    <div className="m-5">
      <h2 className="text-3xl font-bold mb-3">Payment for {treatment}</h2>
      <p className="text-xl">
        You have to pay ${price} for the Appointment on {appointmentDate} at{" "}
        {slot}
      </p>
      <div className="w-96 border shadow my-16 py-12 px-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
