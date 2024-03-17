/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useUserData from "../../../Hooks/useUserData";
import useSubmissionContest from './../../../Hooks/Contest/useSubmissionContest';

const Registration = ({ data }) => {
  const { _id, deadline, price, submission, pcount, winingStatus, winnerName, winnerImage } = data;
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());
  const { user } = useAuth();
  const { userList } = useUserData();
  const FilterUserList = userList.filter((item) => item.email === user?.email);
  const RoleFilter = FilterUserList.map((user) => user.role);

  const {submissionContest} =useSubmissionContest();

    const filterSubmission= submissionContest.filter(submissionContest => submissionContest.yourEmail === user?.email )
   
    const idArray = filterSubmission.map(item => item.id);
    console.log(idArray);
    
    const isUIDInArray = idArray.includes(_id);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function calculateRemainingTime() {
    const targetDateString = deadline;
    const targetDate = new Date(targetDateString);
    const currentDate = new Date();
    const difference = targetDate - currentDate;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  const targetDateString = deadline;
  const targetDate = new Date(targetDateString);
  const currentDate = new Date();

  const handleRegister = () => {
    if (RoleFilter.includes('creator') || RoleFilter.includes('admin')) {
      Swal.fire({
        icon: "warning",
        title: "Sorry Not Available",
        text: "Only user can register contest ",
        confirmButtonText: "OK",
      });
    } 
    else if (targetDate <= currentDate) {
      Swal.fire({
        icon: "warning",
        title: "Sorry Not Available",
        text: "You can't register this contest due to deadline over",
        confirmButtonText: "OK",
      });
    } 
    else if (isUIDInArray) {
      Swal.fire({
        icon: "warning",
        title: "Sorry Not Available",
        text: "You Already Registered This Contest",
        confirmButtonText: "OK",
      });
    }
    
    
    
    else {
      window.location.href = `/single-contest-registration/${_id}`;
    }
  };

  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-red-50'>
      <div className="text-lg text-red-500 p-5  font-semibold text-center">
        <i className="fa-solid fa-clipboard-list"></i> {submission}
      </div>

      <hr />
      {winingStatus === 'winner' && (
        <div>
          <div
            className='
                  text-xl 
                  font-semibold 
                  flex 
                  lg:flex-row
                  md:flex-row
                  flex-col 
                  items-center
                   justify-center my-2
                  gap-2
                '
          >
            <div>Win by {winnerName}</div>

            <img
              className='rounded-full'
              height='80'
              width='80'
              alt='Avatar'
              src={winnerImage}
            />
          </div>
        </div>
      )}
{winingStatus !== 'winner' && 
<>
      {targetDate <= currentDate ? (
       <div className="mx-4">
       <h1 className="text-3xl bg-red-300 px-2 rounded py-2 my-4 text-center text-black font-bold">
         <i className="fa-regular fa-face-dizzy"></i> This Contest Is Expired
       </h1>
     </div>
      ) : (
           <div className='flex justify-center'>
           <div>
             <div>
               <h1 className="text-2xl text-center font-semibold text-red-500 ">
                 Submission Deadline <i className="fa-solid fa-clock-rotate-left"></i>
               </h1>
               <div className="flex justify-around m-5 gap-6 rounded-xl bg-red-200 px-5 py-2">
                 <div className="text-center">
                   <div className="text-4xl font-bold">{remainingTime.days}</div>
                   <div className="text-xl font-medium">Days</div>
                 </div>
                 <div className="text-center">
                   <div className="text-4xl font-bold">{remainingTime.hours}</div>
                   <div className="text-xl font-medium">Hours</div>
                 </div>
                 <div className="text-center">
                   <div className="text-4xl font-bold">{remainingTime.minutes}</div>
                   <div className="text-xl font-medium">Minutes</div>
                 </div>
                 <div className="text-center">
                   <div className="text-4xl font-bold">{remainingTime.seconds}</div>
                   <div className="text-xl font-medium">Seconds</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
      )}
</>






} 
      <hr />
      {winingStatus === 'winner' ? (
        ""
      ) : (
        <div className='flex justify-center items-center p-4'>
          <button onClick={handleRegister} className="px-10 w-full py-3 rounded-md font-semibold text-white text-xl bg-red-500">
            Registration
          </button>
        </div>
      )}

      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div><i className="fa-solid fa-ticket"></i> Registration Fee</div>
        <div>$ {price}</div>
      </div>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div><i className="fa-solid fa-people-group"></i> Current Participants</div>
        <div> {pcount}</div>
      </div>
    </div>
  );
};

export default Registration;
