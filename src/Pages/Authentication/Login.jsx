/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import GoogleButton from "./GoogleButton";
import { TbFidgetSpinner } from 'react-icons/tb';
import Logo from "../../Shared/Logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const { signIn,  loading,} = useContext(AuthContext);
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();      
    const onSubmit = data => {
        // console.log(data);
        // console.log(data.email);
        // console.log(data.password);
        signIn(data.email, data.password)
        .then((result) => {
          // console.log(result.user);
          toast.success("Wow Login Successful! 😎");
          navigate(location?.state ? location?.state : "/");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.message +" " + "Oops! Invalid Password." +"😭");
        });
    };
    return (
  <div>
<div className="flex justify-center text-2xl mb-10 mt-5 items-center py-4 overflow-x-auto whitespace-nowrap">
    <Link to="/" className="text-gray-600 dark:text-gray-200">
    Home
    </Link>
    

    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
    <i className="fa-solid text-base fa-chevron-right"></i>
    </span>

    <Link to='/login' className="text-red-600 dark:text-red-400 hover:underline">
        Login
    </Link>
</div>
          <div className="flex justify-center items-center  ">

                                 <div className="w-full max-w-xl p-6 m-auto mx-auto bg-red-100 rounded shadow-md dark:bg-gray-800">
    <div className="flex  justify-center mx-auto">
      <Logo/>
    </div>

<div className="flex  justify-center mx-auto mt-2">
<h1 className="text-2xl font-bold">Welcome, Login here!!</h1>
</div>
<form  onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 form-control">
                <label className="block mb-2 text-xl  font-semibold text-gray-600 dark:text-gray-200">
                  Email Address
                </label>
                <input
                {...register("email", { required: true })}
                  name="email"
                  className="block w-full px-4 py-4 text-xl text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
                  {errors.email && <span className="text-red-600">Email is required</span>}
              </div>

              <div className="mt-4 form-control">
                <div className="flex justify-between">
                  <label className="block mb-2 text-xl  font-semibold text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                </div>
                <div className="relative"> 
                <input
                  {...register("password", { required: true })} 
                  name="password"
                  className="block w-full px-4 py-4 text-xl text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type={showPassword ? "text" : "password"}
                  
                />

<button
                                    type='button'
                                    onClick={togglePasswordVisibility}
                                    className='absolute top-1/2 right-4 transform -translate-y-1/2 text-rose-500 hover:text-rose-700 focus:outline-none'
                                >
                                    {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
                                </button>

</div>
                {errors.password && <span className="text-red-500"><i className="fa-solid fa-triangle-exclamation"></i>Password is required</span>}
              </div>
              <div className="mt-6 form-control">
                <button className="w-full px-6 py-4  text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Login'
              )}
                </button>
              </div>
            </form>

<GoogleButton/>
<h1 className="flex gap-x-1 justify-center mt-3">
      <p className="text-xl text-center font-medium  text-gray-600">
      Do not have an account?
          </p>
          <Link to="/register">
          <p className="font-medium text-xl text-center  text-red-500 hover:underline">
          Register
            </p>
            </Link>
      </h1>
</div> 
        </div>
  </div>
    );
};

export default Login;