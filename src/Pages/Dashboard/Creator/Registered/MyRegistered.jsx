import { Helmet } from "react-helmet-async";
import useSubmissionContest from "../../../../Hooks/Contest/useSubmissionContest";
import useAuth from "../../../../Hooks/useAuth";
import Loader from "../../../../components/Loader";
import SubRegistered from "./SubRegistered";


const MyRegistered = () => {
    const {submissionContest,refetch,isLoading} =useSubmissionContest();
    const {user}=useAuth()
    const filterSubmission= submissionContest.filter(submissionContest => submissionContest.creatorEmail === user?.email )
      if(isLoading){
        <Loader/>
      }

      if(filterSubmission.length == 0){
        return <div>
    <h1 className="text-4xl text-red-500 font-bold min-h-screen text-center">😑There Is No Contest That You Participate</h1>
        </div>
      }
    return (
        <>
        <Helmet>
        <title>Submission | Contes Buddy</title>
      </Helmet>
        <div className='container mx-auto px-4 sm:px-8'>
        <h1 className="text-3xl text-center"><i className="fa-regular fa-rectangle-list"></i> Total Participated Contest: <span className="text-red-500">{filterSubmission.length}</span> </h1>
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
                    Submitted Task
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                   Contest Deadline
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3  bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                   Participant Name
                  </th>
              
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                    Payment Status
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-lg  font-normal'
                  >
                   Achievement Status
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
              {filterSubmission?.map((items) => (
    <SubRegistered key={items._id} items={items} refetch={refetch}></SubRegistered>
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

export default MyRegistered;