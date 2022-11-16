import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('')
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = data => {
    signIn(data.email, data.password)
    .then(res=>{
      const user = res.user
      toast.success('Successfully Logged In')
      console.log(user)
      setError('')
      navigate(from, {replace: true})
    })
    .catch(e=>{
      toast.error(e.message)
      setError(e.message)})
  }
  

  return (
    <div className="my-12 w-96 mx-auto border p-5 py-10 rounded-md shadow-lg">
      <h2 className="text-xl font-bold text-center">Login</h2>
      <p className="text-red-500">{error}</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("email")}
            required
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full "
            {...register("password")}
            required
          />
          <label className="label">
            <span className="label-text">Forget Password?</span>
          </label>
        </div>
        <input
          className="btn bg-blue-900 mt-6 w-full hover:bg-blue-700"
          type="submit"
          value="Login"
        />
      </form>
      <p className="text-center text-sm mt-3">New to Doctor's Portal? <Link to='/signup' className="text-blue-500">Create Account</Link></p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full ">Continue With Google</button>
    </div>
  );
};

export default Login;
