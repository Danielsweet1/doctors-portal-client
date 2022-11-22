import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    const{treatment, appointmentDate, slot,price } = data
    return (
        <div className='m-5'>
            <h2 className="text-3xl font-bold mb-3">Payment for {treatment}</h2>
            <p className="text-xl">You have to pay ${price} for the Appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;