import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const ManageDoctors = () => {
  const { data: doctors = [], isLoading, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const deleteDoctor = id =>{
    const proceed = window.confirm('Are You sure You Want to delete?')
    if(proceed){
        fetch(`http://localhost:5000/doctors/${id}`,{
            method: 'DELETE',
            headers:{
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                toast.success('Doctor Deleted Successful')
                refetch()
            }
        })
        
    }
  }

  if(isLoading){
    return <div className='flex justify-center h-96 items-center'>Loading...</div>
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={doctor.image}  alt=''/>
                    </div>
                  </div>
                </th>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <button onClick={()=> deleteDoctor(doctor._id)} className="btn btn-outline">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
