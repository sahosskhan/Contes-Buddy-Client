/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const AllPost = ({items}) => {
    const {userName, userPhoto, formattedTime, formattedDate, userEmail,  userTopic, userImage, userPost, userRole} = items || {};
    return (

        <div>
           <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img className=" w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={userImage}alt=""/>

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <div className="flex items-center mt-6">
                    <img className="object-cover object-center w-14 h-14 rounded-full" src={userPhoto}alt=""/>

                    <div className="mx-4">
                        <h1 className="text-base font-semibold text-black dark:text-gray-200">{userName}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400"> @{userEmail}</p>
                    </div>
                </div>
                <h1 className="block mt-4 text-3xl font-bold text-black dark:text-white">
                    {userTopic}
                </h1>

                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 ">
                 {userPost}
                </p>

<div className="flex lg:flex-row flex-col justify-between">
<p className="text-lg text-black mt-6"><i className="fa-solid fa-cloud-arrow-up"></i><span> {formattedTime}, <span> {formattedDate}</span></span></p>

<div className="flex gap-5 mt-3"> 
<button className="bg-green-100 rounded-xl text-xl px-4 py-2 flex justify-center items-center gap-2 text-green-500">
<i className="fa-solid fa-heart"></i>  Interested
</button>

<button className="bg-red-100 rounded-xl text-xl px-4 py-2 flex justify-center items-center gap-2 text-red-500">
<i className="fa-solid fa-thumbs-down"></i>  Not Interested
</button>

</div>
</div>

            </div>


        </div> 
        </div>

    );
};

export default AllPost;