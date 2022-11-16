import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate,setTreatment,refetch }) => {
  const { name: treatmentName, slots } = treatment;
  const {user}= useContext(AuthContext)
  const date = format(selectedDate, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patientName:name,
      email,
      slot,
      phoneNumber:phone
    }
    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        setTreatment(null)
        toast.success('Appointment Confirmed')
        refetch()
      }
      else{
        toast.error(data.message)
      }
    })
  
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="py-4 grid grid-cols-1 gap-5">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
              required
            />
            <input
              name="email"
              type="email"
              disabled
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
            <input
              className="w-full btn bg-blue-900 hover:to-blue-800 text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
