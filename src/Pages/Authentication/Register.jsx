/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import GoogleButton from "./GoogleButton";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Shared/Logo";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [imageFileName, setImageFileName] = useState("Upload Image"); 
    const [imageFile, setImageFile] = useState([]); 
    const handleImageChange = (event) => {
        const fileName = event.target.files[0].name; // Get the file name
        setImageFileName(fileName); 
        const file = event.target.files[0];
        setImageFile(file)
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch // Watch function from useForm to watch field values
    } = useForm();
    
    const password = watch("password"); // Get the value of password field

    const onSubmit = (data) => {
        const images = imageFile;
        const formData = new FormData();
        formData.append('image', images);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBBAPI}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then((res) => res.json())
        .then((imageData) => {
            if (imageData.success) {
                const image = imageData?.data?.url;
                createUser(data.email, data.password).then((result) => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, image).then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            image: image,
                            role: 'user',
                        };
                        axiosPublic
                        .post('/users', userInfo)
                        .then((res) => {
                            if (res.data.insertedId) {
                                console.log('user created successfully');
                                reset();
                                toast.success("Wow Registration Complete! 😎");
                                navigate('/');
                            }
                        })
                        .catch((error) => console.log(error));
                    });
                });
            }
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
                <Link to='/register' className="text-red-600 dark:text-red-400 hover:underline">
                    Register
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-2xl p-6 m-auto mx-auto bg-red-100 rounded shadow-md dark:bg-gray-800">
                    <div className="flex  justify-center mx-auto">
                        <Logo/>
                    </div>
                    <div className="flex  justify-center mx-auto mt-2">
                        <h1 className="text-2xl font-bold">Welcome, Registration here!!</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div>
                            <label className="block text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Name
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 text-xl focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className=' p-2 bg-white w-full mt-6 m-auto rounded-lg'>
                            <label className="block text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                                Upload Profile Picture
                            </label>
                            <div className='file_upload px-5 py-2 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            className='text-sm cursor-pointer w-36   hidden'
                                            type='file'
                                            id='image'
                                            name='image'
                                            accept='image/*'
                                            {...register('image')}
                                            onChange={handleImageChange} 
                                            hidden
                                        />
                                        <div className='bg-red-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-red-500'>
                                            {imageFileName}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 text-xl focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <label className="block text-xl  font-semibold  text-gray-800 dark:text-gray-200">
                                    Password
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"} // Toggle password visibility based on showPassword state
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    className="block w-full px-4 py-4 pr-14 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 text-xl focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                <button
                                    type='button'
                                    onClick={togglePasswordVisibility}
                                    className='absolute top-1/2 right-4 transform -translate-y-1/2 text-rose-500 hover:text-rose-700 focus:outline-none'
                                >
                                    {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
                                </button>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                       
                        <div className="mt-4">
                            <label className="block text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Confirm Password
                            </label>
                            <div className="relative"> 
                            <input
                                type={showPassword ? "text" : "password"} // Toggle password visibility based on showPassword state
                                name="confirmPassword"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => value === password // Validate if confirm password matches password
                                })}
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 text-xl focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                               <button
                                    type='button'
                                    onClick={togglePasswordVisibility}
                                    className='absolute top-1/2 right-4 transform -translate-y-1/2 text-rose-500 hover:text-rose-700 focus:outline-none'
                                >
                                    {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
                                </button>
                                </div>
                            {errors.confirmPassword && <p className="text-red-600">Passwords do not match</p>}
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-6 py-4 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    <GoogleButton/>
                    <h1 className="flex gap-x-1 justify-center mt-5">
                        <p className="text-xl text-center font-medium  text-gray-600">
                            Already have an account?
                        </p>
                        <Link to="/login">
                            <p className="font-medium text-xl text-center  text-red-500 hover:underline">
                                Login
                            </p>
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Register;
