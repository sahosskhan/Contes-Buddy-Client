/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ProfileCard = ({items}) => {
    const {image, name, email, role } = items;
    const inputString = role;
  const modifiedString = inputString ? inputString.charAt(0).toUpperCase() + inputString.slice(1) : '';
    return (
        <>
             <div  className="max-w-4xl h-80 px-8 py-6 rounded-lg shadow-md bg-red-100 dark:text-gray-100">
<div className="flex justify-end items-end">
<Link to='edit-profile'>
      <button className="px-6 py-1 font-semibold text-lg rounded-lg bg-red-500"><i className="fa-solid fa-user-pen"></i> Edit</button>
 </Link>
</div>
{/* details */}
 <div className="flex flex-col justify-center items-center mt-3 ">
 <img
            src={image}
            alt=""
            className="h-32 rounded-lg"
          />
        
        <div className="flex flex-col justify-center items-center mt-3 ">
            <h2 className="text-2xl text-black font-bold">{name}</h2>
            <p className="text-lg text-gray-500  font-medium">
            <i className="fa-solid fa-id-badge"></i> {modifiedString}, Contes Buddy
            </p>
          <p className="text-red-400 font-semibold text-xl">
            <i className="fa-solid  fa-envelope"></i> {email}
          </p>
        </div>
 </div>
  


      </div>   
        </>
    );
};

export default ProfileCard;