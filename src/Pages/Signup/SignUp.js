import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')
    const {createUser, updateUser} = useContext(AuthContext)

    const handleSignup = data => {
        createUser(data.email, data.password)
        .then(res=>{
          const user = res.user
          toast.success('Sign In Successful')
          updateProfile(data.name, data?.photo)
          console.log(user)
          setError('')
        })
        .catch(e=>setError(e.message))

    }

    const updateProfile = (name, photo) =>{
      updateUser(name, photo)
      .then(()=>{})
      .catch(e=>setError(e.message))
    }
  return (
    <div className="my-12">
      <form onSubmit={handleSubmit(handleSignup)} className="card-body w-96 mx-auto p-4 shadow-md rounded-md pb-8">
        <h2 className="font-bold text-xl text-center">Signup</h2>
        <p className="text-red-500">{error}</p>
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
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            className="input input-bordered"
            {...register("photo")}
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
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password")}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-900 hover:bg-blue-700">Signup</button>
        </div>
        <p className="text-center mt-3 text-sm">
          Already Have An Account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full ">
          Continue With Google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
