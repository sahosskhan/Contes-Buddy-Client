import { Link } from "react-router-dom";
import useMyContest from "../../../Hooks/Contest/useMyContest";
import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../components/Loader";
import SingleContest from "./SingleContest";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyContest = () => {
    const {user} = useAuth()
    const {myContest, refetch, isLoading}= useMyContest();
if (isLoading){
    return <Loader/>
}
const filteredContests = myContest.filter(contest => contest.creatorEmail === user?.email);
// console.log(filteredContests)
if(filteredContests.length === 0){
    return <div className=" flex flex-col justify-center items-center min-h-screen">

    <h1 className="text-red-500 font-semibold text-4xl text-center">
        😭Sorry, You Have No Contest <br /> That Is Created By You!</h1>
        <Link to='/dashboard/add-contest'>
<button className="px-6 py-2 bg-red-500 text-xl my-5 rounded-lg text-white">Go Back To Add Contest</button>
</Link>
  </div>;
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
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Contest has been deleted.",
                "success"
              );
            }
            refetch()
          });
      }
    });
  };



    return (
        <>
        <Helmet>
        <title>My Listing | Contes Buddy</title>
      </Helmet>
            <div className='container mx-auto px-4 sm:px-8'>
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
                  {filteredContests?.map((items) => (
        <SingleContest key={items._id} items={items} handleDelete={handleDelete}></SingleContest>
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

export default MyContest;