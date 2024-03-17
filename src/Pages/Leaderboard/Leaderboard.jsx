import useSubmissionContest from "../../Hooks/Contest/useSubmissionContest";
import Loader from "../../components/Loader";


const Leaderboard = () => {
    const {submissionContest,isLoading}= useSubmissionContest();
    const filterWin = submissionContest.filter(win => win.winingStatus === "winner");
    if(filterWin.length == 0) {
        return <div>
        <h1 className="text-4xl text-red-500 font-bold 
        min-h-screen text-center">😑There Is No Contest That You Win</h1>
            </div>
    }
    console.log(filterWin)
    if(isLoading){
        <Loader/>
      }

      const leaderboardMap = filterWin.reduce((acc, curr) => {
        const key = curr.yourName + curr.yourEmail;
        if (!acc[key]) {
          acc[key] = {
            name: curr.yourName,
            email: curr.yourEmail,
            image: curr.yourImage,
            totalMoney: 0
          };
        }
        acc[key].totalMoney += parseInt(curr.money);
        return acc;
      }, {});
    
      // Convert the map to an array
      const leaderboardArray = Object.values(leaderboardMap);
    
      // Sort the array by totalMoney in descending order
      leaderboardArray.sort((a, b) => b.totalMoney - a.totalMoney);





    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-red-400 border-b border-gray-200 text-white  text-left text-2xl  font-bold'
                    >
                     Position
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-red-400 border-b border-gray-200 text-white text-left text-2xl  font-bold'
                    >
                     Winner Profile
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-red-400  border-b border-gray-200 text-white  text-left text-2xl  font-bold'
                    >
                    Winner Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-red-400  border-b border-gray-200 text-white  text-left text-2xl  font-bold'
                    >
                    Total Wining Amount
                    </th>
               
                  </tr>
                </thead>
                <tbody>
                {leaderboardArray.map((item, index) => (
                       <tr key={index} className="text-xl">

                       <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
                       <div className='flex items-center'>
                         <div className='ml-3 '>
                           <p className='text-gray-900 whitespace-no-wrap'>
                        {index+1}
                           </p>
                         </div>
                       </div>
                     </td>

                     <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
                       <div className='flex items-center'>
                         <div className='ml-3 '>
                          <img className="h-14 rounded-full" src={item.image} alt="" />
                         </div>
                       </div>
                     </td>


                     <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
                       <div className='flex items-center'>
                         <div className='ml-3 '>
                           <p className='text-gray-900 whitespace-no-wrap'>
                           {item.name}
                           </p>
                         </div>
                       </div>
                     </td>


                     <td className='px-5 py-5 border-b border-gray-200 bg-white text-text-base'>
                       <div className='flex items-center'>
                         <div className='ml-3 '>
                           <p className='text-gray-900 whitespace-no-wrap'>
                        {item.totalMoney} $
                           </p>
                         </div>
                       </div>
                     </td>
                    
                   
                   </tr>
          ))}     </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> 
    );
};

export default Leaderboard;