/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import useUserData from "../../Hooks/useUserData";
import useAuth from "../../Hooks/useAuth";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Swal from "sweetalert2";
const AddPost = ({ closeModal, isOpen}) => {

  const { user } = useAuth();
  const { userList } = useUserData();
  const FilterUserList = userList.filter((item) => item.email === user?.email);
  const RoleFilter = FilterUserList.map((user) => user.role);
  const RoleString =  RoleFilter.join(', ');
  const newText = RoleString.charAt(0).toUpperCase() + RoleString.slice(1);
    const filterUserList = userList.filter(contest => contest.email === user?.email);
    const imageFilter = filterUserList.map(user => user.image);
    const nameFilter = filterUserList.map(user => user.name);
    const imageString = imageFilter.join(', '); 
const nameString = nameFilter.join(', ');

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();

const currentTime = new Date();

let hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const meridiem = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${meridiem}`;

    const {
        register,
        handleSubmit, reset, 
        formState: { errors },
      } = useForm()

      const [selectedFile, setSelectedFile] = useState(null);
      const [fileButtonText, setFileButtonText] = useState("Upload");

      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setFileButtonText(event.target.files[0].name);
      };
    




      const onSubmit = async (data) => {
        try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);
            
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBBAPI}`, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        if (result.data && result.data.display_url) {
         const updatedImageUrl = result.data.display_url;
    
            const userName = nameString;
            const userPhoto = imageString; 
            const userEmail = user?.email;
            const userTopic = data.topic;
            const userPost = data.post;
            const userImage = updatedImageUrl;
            console.log(userImage, updatedImageUrl);
            const userRole = newText;
            reset({
                topic: "",
                image: "",
                post: "",
            });
    
            const PostAdd = {
                userName,
                userPhoto,
                userEmail,
                formattedTime,
                formattedDate,
                userTopic,
                userPost,
                userImage,
                userRole
            } || {};
            

            fetch(
              "https://contes-buddy-server.vercel.app/add-community-post",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(PostAdd),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    title: "Successfully!",
                    text: "Your Post Uploaded",
                    icon: "success",
                    confirmButtonText: "Done",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.reload();
                    }
                  });
                }
              });

            } else {
              throw new Error("Failed to upload image");
            }
          }      

        }


        
        catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <Transition appear show={isOpen}  as={Fragment}>
        <Dialog as='div' className='relative z-10'  onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>
  
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium text-center leading-6 text-gray-900'
                  >
                    Review Info Before Reserve
                  </Dialog.Title>

                  <div className="border-4 border-dashed border-red-500 p-10 m-5">
        <div className="flex justify-start items-center mx-auto my-5 gap-5">
                       
          <div className="flex ">
            <img className="rounded-full w-14" src={imageString} />
          </div>
        
                            <h1 className="text-xl font-semibold">{nameString}</h1>
                            </div>
        
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
            <div className='space-y-1 text-lg '>
                      <input
                        className='w-full px-4 py-3 text-gray-800 border-2 border-red-400 focus:outline-red-600 rounded-md '
                        name='topic'
                        type='text'
                        {...register("topic",{ required: true })}
                        placeholder='Add Topic Name Which You Want To Share.'
                  
                      />
                       {errors.name && <span className="text-red-600">Write Topic name is required for post</span>}
                    </div>
        
            <div className='space-y-1 text-lg  mt-5 '>
                      <textarea
                                 {...register("post", { required: true })}
                        className='block rounded-md focus:red-300 w-full h-44 px-4 py-3 text-gray-800  border-2 border-red-400 focus:outline-red-600'
                        name='post'
                        placeholder="Share Us, What's on your mind?"
                      ></textarea>
                        {errors.name && <span className="text-red-600">Write Something is required for post</span>}
        
                    </div>
        
                    <div className='mt-5 px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                        <div className='flex flex-col w-max mx-auto text-center'>
                          <label>
                            <input
                              className='text-sm cursor-pointer w-36   hidden'
                              type='file'
                              name='image'
                              accept='image/*'
                              {...register('image')}
                              hidden
                              onChange={handleFileChange}
                              
                            />
                            
                            <div className='bg-red-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-red-500'>
                            <i className="fa-regular fa-image"></i> {fileButtonText}
                            </div>
                          </label>
                        </div>
                      </div>
              
                    <button
                  type='submit'
                  className='w-full text-xl p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-red-500'
                >
                    Share Your Post
                </button>
            </form>
            </div>


            <button
                  onClick={closeModal}
                  className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-900"
                >
                  {/* Close button icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
       
    );
};

export default AddPost;