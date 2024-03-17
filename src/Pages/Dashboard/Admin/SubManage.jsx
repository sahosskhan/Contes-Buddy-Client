/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SubManage = ({items, MakeApprove, handleDelete}) => {
    const {_id,status, creatorName, nameContest,price,tags,deadline, } = items || {};
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
         {tags}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <div className='flex items-center'>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
            {price}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>{deadline}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>
        {creatorName}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap '>           
{status}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>
       <button disabled={status==="approved"}  onClick={() => MakeApprove(_id)} className={`px-6 py-2 rounded-full ${status === "approved" ? 'bg-gray-300' : 'bg-green-200'} ${status === "approved" ? 'disabled' : ''}`}>Approve</button>
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>
       <button disabled={status === "approved"} onClick={() => handleDelete(_id)}className={`px-6 py-2 rounded-full ${status === "approved" ? 'bg-gray-300' : 'bg-red-200'} ${status === "approved" ? 'disabled' : ''}`}>Delete</button>
        </p>
      </td>
    
    </tr>    
        </>
    );
};

export default SubManage;