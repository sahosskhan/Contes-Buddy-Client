import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useUserData from "../../../Hooks/useUserData";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const EditContest = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const {userList}=useUserData();
    const [imageFileName, setImageFileName] = useState("Upload Contest Banner"); 
    const [imageFile, setImageFile] = useState([]); 
    const [image, setImage] = useState(""); 
    const handleImageChange = (event) => {
      const fileName = event.target.files[0].name; // Get the file name
      setImageFileName(fileName); 
        const file = event.target.files[0];
        setImageFile(file)
      
    };
    const FilterUserList = userList.filter(item => item.email === user?.email);
    const imageFilter = FilterUserList.map(user => user.image);
    const nameFilter = FilterUserList.map(user => user.name);
    const emailFilter = FilterUserList.map(user => user.email);
    const imageString = imageFilter.join(', '); 
const nameString = nameFilter.join(', ');
const emailString = emailFilter.join(', ');
  // console.log(data)
 const data = useLoaderData();
// console.log(data)
const {_id,nameContest,price,money,imageContest,tags,deadline,description, submission} = data;
const contestBanner = imageContest;
const {
    register,
    handleSubmit, reset
  } = useForm()
  
  const creatorName =  nameString ;
  const creatorEmail = emailString;
  const creatorImage = imageString;
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
        const ContestImage = imageData?.data?.display_url;
        setImage(ContestImage);
      }
    }); 
  const onSubmit = (data) => {
const nameContest = data.name;
const price = data.cprice;
const money = data.money;

const tags = data.tags;
const deadline = data.deadline;
const description = data.description;
const submission = data.submission; 
let imageContest = image;
if (imageContest === "") {
  imageContest = contestBanner;
}
reset({
name: "",
cprice:"",
money:"",
image:"",
tags:"",
deadline:"",
description:"",
submission:""
});
const ContestUpdate =
{creatorName, creatorEmail,creatorImage, nameContest,price,money,imageContest,tags,deadline,description, submission };
fetch(
  `https://contes-buddy-server.vercel.app/updatedContest/${_id}`,
  {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(ContestUpdate),
  }
  )
  .then((res) => res.json())
  .then((data) => {
  // console.log(data);
  if (data.modifiedCount > 0) {
    Swal.fire({
      title: "Successfully!",
      text: "Wow Contest Update Complete! 😗 ",
      icon: "success",
      confirmButtonText: "Done",
    }).then((result) => {
      if (result.isConfirmed) { 
        navigate('/dashboard/my-listing'); 
      }
    });
  }
  });
}
 
  
    return (
        <>
        <Helmet>
        <title>Edit Contest | Contes Buddy</title>
      </Helmet>
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
    <h1 className="text-3xl my-5 text-center bg-red-500 py-2 px-6 text-white rounded-lg"> <span className="text-black">{nameString},</span> Edit Your Contest Here </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-lg'>
              <label htmlFor='Name' className='block text-gray-600'>
                Contest Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md '
                name='name'
                id='name'
                type='text'
                {...register("name")}
                placeholder='Contest Name'
                required
                defaultValue={nameContest}
              />
            </div>

            <div className='space-y-1 text-lg'>
              <label htmlFor='category' className='block text-gray-600'>
               Contest Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-red-300 focus:outline-red-500 rounded-md'
                name='category'  {...register("tags")}
                defaultValue={tags}
              >
                
                  <option value="Open World">
                  Open World
                  </option>
                  <option value="Role Playing">
                  Role Playing
                  </option>
                  <option value="Action">
                    Action
                  </option>
                  <option value="Adventure">
                  Adventure
                  </option>
                  <option value="Strategy">
                  Strategy
                  </option>
                  <option value="Casual">
                  Casual
                  </option>
                  <option value="Puzzle">
                  Puzzle
                  </option>
                  <option value="Simulation">
                  Simulation
                  </option>
                  <option value="Sports">
                  Sports 
                  </option>
                  <option value="Racing">
                  Racing
                  </option>
                 
              </select>
            </div>
            
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                  <input
  className='text-sm cursor-pointer w-36 hidden' // Remove the hidden class
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

            <div className='space-y-1 text-lg'>
              <label htmlFor='deadline' className='block text-gray-600'>
                Contest Deadline
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md '
                name='deadline'
                {...register("deadline")}
                id='deadline'
                type='date'
                placeholder='Contest Deadline'
                required
                defaultValue={deadline}
              />
            </div>

          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-lg'>
              <label htmlFor='submission' className='block text-gray-600'>
                Submission Task
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md '
                name='submission'
                {...register("submission")}
                id='submission'
                type='text'
                placeholder='Submission Task'
                required
                defaultValue={submission}
              />
            </div>
       
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-lg'>
                <label htmlFor='price' className='block text-gray-600'>
                  Registration Fee
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md '
                  name='cprice'
                  id='cprice'
                  {...register("cprice")}
                  type='text'
                  placeholder='Registration Fee'
                  required
                  defaultValue={price}
                />
              </div>

              <div className='space-y-1 text-lg'>
                <label htmlFor='guest' className='block text-gray-600'>
                  Wining Prize Money
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md '
                  name='money'
                  {...register("money")}
                  id='money'
                  type='text'
                  placeholder='Wining Prize Money'
                  required
                  defaultValue={money}
                />
              </div>
            </div>


            <div className='space-y-1 text-lg'>
              <label htmlFor='description' className='block text-gray-600'>
                Contest Description
              </label>

              <textarea
                id='description'
                {...register("description")}
                className='block rounded-md focus:red-300 w-full h-40 px-4 py-3 text-gray-800  border border-red-300 focus:outline-red-500 '
                name='description'
                defaultValue={description}
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-red-500'
        >
            Save & Continue
        </button>
      </form>
    </div>

      </>
    );
};

export default EditContest;
