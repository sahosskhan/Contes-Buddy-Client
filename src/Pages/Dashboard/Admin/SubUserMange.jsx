/* eslint-disable react/prop-types */

const SubUserMange = ({users,MakeAdmin,MakeUser,MakeCreator}) => {
    return (
  <>
  {users.map((user, index) => (
  <tr className="text-xl" key={user._id}>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <div className='flex items-center'>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
            {index + 1}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={user?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <div className='flex items-center'>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {user?.name}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>
        {user.role === "admin" && (
                      "Admin"
                    ) 
                    }
                       {user.role === "user" && (
                      "User"
                    ) 
                    }
                     {user.role === "creator" && (
                      "Creator"
                    ) 
                    }
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>
        {user.role === "admin"&&(   <button
                        className=" py-2 px-6 text-xl rounded-lg text-black font-bold bg-black/20"
                      >
                        Already Admin
                      </button>)}
                      {user.role === "user"&&(   <button
                      onClick={() => MakeCreator(user)}
                        className="py-2 px-6 text-xl rounded-lg text-white bg-red-500"
                      >
                        Make Creator
                      </button>)}
                   
{user.role ==="creator"&&( 
<button  onClick={() => MakeAdmin(user)}
                        className="py-2 px-6 text-xl rounded-lg text-white bg-red-500">
                          Make Admin</button>)}
                      

        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
        <p className='text-gray-900 whitespace-no-wrap'>
        {user.role === "user"&&(   <button
                       onClick={() => MakeAdmin(user)}
                        className="py-2 px-6 text-xl rounded-lg text-white bg-red-500"
                      >
                        Make Admin
                      </button>)}

                      {user.role ==="creator"&&( 
<button  onClick={() => MakeUser(user)}
                        className="py-2 px-6 text-xl rounded-lg text-white bg-red-500">
                          Make User</button>)}
        </p>
      </td>
    
    </tr> 
   ))}
  </>   
    );
};

export default SubUserMange;