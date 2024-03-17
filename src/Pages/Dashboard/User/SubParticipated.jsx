/* eslint-disable react/prop-types */
const SubParticipated = ({items}) => {
    const{nameContest,yourSubmission, winingStatus,  paymentStatus, deadline, creatorName }=items;
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
         {creatorName}
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
  
     
    
    </tr>    
        </>
    );
};

export default SubParticipated;