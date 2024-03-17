/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';
import useAxiosSecure from './../../../../Hooks/useAxiosSecure';

const SubRegistered = ({items,refetch}) => {
    const axiosSecure=useAxiosSecure();
    const{_id, id, nameContest,yourSubmission, winingStatus,  paymentStatus, yourName, deadline, yourImage }=items;
    const WinnerData= {yourName, yourImage,id};
  const MakeWinner = (id) =>{

    axiosSecure.patch(`/winner-patch/${id}`,WinnerData).then((res) => {
      console.log(res.data);
      if (res.data.result.modifiedCount > 0 && res.data.result2.modifiedCount > 0) {
        Swal.fire({
            icon: "success",
            title: "Wow",
            text: "Winner Announcement Complete!🎯",
            confirmButtonText: "OK",
          });
        refetch()
      }
    });
    }

    return (
        <>
        <tr className="text-xl">
     <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
     <div className='flex items-center'>
       <div className='ml-3 w-72'>
         <p className='text-gray-900 whitespace-no-wrap'>
      {nameContest}
         </p>
       </div>
     </div>
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
     <div className='flex items-center'>
       <div className='ml-3'>
         <p className='text-gray-900 whitespace-no-wrap'>
      {yourSubmission}
         </p>
       </div>
     </div>
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
     <div className='flex items-center'>
       <div className='ml-3'>
         <p className='text-gray-900 whitespace-no-wrap'>
      {deadline}
         </p>
       </div>
     </div>
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
     <div className='flex items-center'>
       <div className='ml-3 '>
         <p className='text-gray-900 whitespace-no-wrap'>
      {yourName}
         </p>
       </div>
     </div>
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
     <div className='flex items-center'>
       <div className='ml-3'>
         <p className='text-gray-900 whitespace-no-wrap'>
      {paymentStatus}
         </p>
       </div>
     </div>
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
     <div className='flex items-center'>
       <div className='ml-3'>
         <p className='text-gray-900 whitespace-no-wrap'>
      {winingStatus}
         </p>
       </div>
     </div>
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
     <div className='flex items-center'>
       <div className='ml-3 w-44 '>
       <button  disabled={winingStatus === "winner"} onClick={() => MakeWinner(_id)}   className={`px-6 py-2 rounded-full ${winingStatus === "winner" ? 'bg-gray-300' : 'bg-green-200'} ${winingStatus === "winner" ? 'disabled' : ''}`}>Make Winner</button>
       </div>
     </div>
   </td>

  
 
 </tr>    
     </>
    );
};

export default SubRegistered;