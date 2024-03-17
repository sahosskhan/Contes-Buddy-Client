import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SubUserMange from "./SubUserMange";


const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const MakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} 😎 is now admin`)
      }
    });
  };

  const MakeCreator = (user) => {
    axiosSecure.patch(`/users/creator/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} 😎 is now Creator`)
      }
    });
  };

  const MakeUser = (user) => {
    axiosSecure.patch(`/users/user/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} 😎 is now user`)
      }
    });
  };

  return (
<>
        <div className='container mx-auto px-4 sm:px-8'>
<h1 className="text-3xl text-center"><i className="fa-solid fa-users"></i> Total User: <span className="text-red-500">{users.length}</span> </h1>

          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                      >
                        Serial
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                      >
                        Image
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                      >
                        Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                      >
                       Email
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                      >
                       Role
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                      >
                        Action
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <SubUserMange users={users} MakeCreator={MakeCreator}  MakeUser={MakeUser}  MakeAdmin={MakeAdmin} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>




</>
  );
};

export default ManageUser;