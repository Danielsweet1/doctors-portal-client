import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
  const imgHostKey = process.env.REACT_APP_imgbb_key

  const {data: speclities = [], isLoading} = useQuery({
    queryKey: ['specilty'],
    queryFn: async()=>{
        const res =await fetch('http://localhost:5000/appointmentSpeclity')
        const data = await res.json()
        return data;
    }

  })

  if(isLoading){
    return <div className='flex justify-center h-96 items-center'>Loading...</div>
  }


  const handleAddDoctor = (data) => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
    fetch(url,{
        method: 'POST',
        body: formData
    })
    .then(res=>res.json())
    .then(imgData=>{
        if(imgData.success){
        const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url
        }
        fetch('http://localhost:5000/doctors',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Doctor added Successfully')
                navigate('/dashboard/managedoctors')
            }
        })
        }
    })
    .catch(e=>console.log(e))
  };

  return (
    <div className="m-3">
      <h2 className="text-3xl font-bold">Add A Doctor</h2>
      <div className="my-12">
        <form
          onSubmit={handleSubmit(handleAddDoctor)}
          className="card-body w-96  p-4 shadow-md rounded-md pb-8"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Specilty</span>
            </label>
            <select {...register('specialty')} className="select select-bordered w-full">
             {
                speclities.map(specilty => <option key={specilty._id} value={specilty.name}>{specilty.name}</option>)
             }
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered"
              {...register("image")}
              required
            />
          </div>
          <input
            className="input input-bordered mt-3 text-white bg-blue-900 hover:bg-blue-700 w-full"
            type="submit"
            value="Add a Doctor"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
