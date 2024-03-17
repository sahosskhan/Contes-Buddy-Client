/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditCard = ({ items }) => {
  const { name, image, _id } = items;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(image);

  const onSubmit = async (data) => {
    try {
      let updatedImageUrl = imageUrl;
      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);
        

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBBAPI}`, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        if (result.data && result.data.display_url) {
          updatedImageUrl = result.data.display_url;
        } else {
          throw new Error("Failed to upload image");
        }
      }

      const username = data.username;
      const updateProfile = { username, userimage: updatedImageUrl };
      const response = await fetch(`https://contes-buddy-server.vercel.app/update-user-list/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProfile),
      });

      if (!response.ok) {
        throw new Error("Failed to update user profile");
      }

      const responseData = await response.json();
      if (responseData.modifiedCount > 0) {
        toast.success("User Profile Info Updated! 😳");
        navigate('/dashboard');
      } else {
        throw new Error("No modifications made to the user profile");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <div className="w-full mt-2 max-w-4xl p-6 m-auto mx-auto bg-red-100 rounded-lg shadow-md dark:bg-gray-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="username"
              {...register("username")}
              defaultValue={name}
              className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300  border-black "
            />
          </div>

          <div className=' p-4 mt-2 bg-white w-full  m-auto rounded-lg'>
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
                    onChange={handleFileChange}
                    hidden
                  />
                  <div className='bg-red-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-red-500'>
                    {selectedFile ? selectedFile.name : 'Upload'}
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-red-400  text-xl text-black"
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCard;
