import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    console.log(date, name, email, slot, phone);
    setTreatment(null)
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
          <h3 className="text-lg font-bold">{name}</h3>
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
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="email"
              type="email"
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
