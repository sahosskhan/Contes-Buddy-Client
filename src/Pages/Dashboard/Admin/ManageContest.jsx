import Swal from "sweetalert2";
import useMyContest from "../../../Hooks/Contest/useMyContest";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../components/Loader";
import SubManage from "./SubManage";
import { Helmet } from "react-helmet-async";

const ManageContest = () => {
    const axiosSecure = useAxiosSecure();
    const {myContest, refetch, isLoading}= useMyContest();
    const MakeApprove = (id) =>{

        axiosSecure.patch(`/contest-patch/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
                icon: "success",
                title: "Successfully!",
                text: "Wow! Contest has been approved 🫡",
                confirmButtonText: "Done",
              });
            refetch()
          }
        });
        }
        const handleDelete = (id) => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(
                `https://contes-buddy-server.vercel.app/contest-delete/${id}`,
                {
                  method: "DELETE",
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire(
                      "Deleted!",
                      "Contest has been deleted.😭",
                      "success"
                    );
                  }
                  refetch()
                });
            }
          });
        };










    if (isLoading){
        return <Loader/>
    }
    if(myContest.length === 0){
        return <div className=" flex flex-col justify-center items-center min-h-screen">
    
        <h1 className="text-red-500 font-semibold text-4xl text-center">
            😭Sorry, Yet Creator Don&apos;t Add Contest!</h1>
      </div>
    }
    return (
        <>
        <Helmet>
        <title>Contest Management | Contes Buddy</title>
      </Helmet>
        <div className='container mx-auto px-4 sm:px-8'>
        <h1 className="text-3xl text-center"><i className="fa-regular fa-rectangle-list"></i> Total Contest: <span className="text-red-500">{myContest.length}</span> </h1>
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                    Contest Name
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                    Contest Category
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                    Registration Fee
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                   Contest Deadline
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                   Creator
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                    Action
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
              {myContest?.map((items) => (
    <SubManage key={items._id} items={items} handleDelete={handleDelete}
    MakeApprove={MakeApprove}></SubManage>
    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  
    </>
    );
};

export default ManageContest;