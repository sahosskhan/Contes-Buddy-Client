
import useAuth from './../../../Hooks/useAuth';
import useSubmissionContest from './../../../Hooks/Contest/useSubmissionContest';
import Loader from '../../../components/Loader';
import CardAchieve from './CardAchieve';

const Achievement = () => {
    const {user}=useAuth()
    const {submissionContest,isLoading}= useSubmissionContest();
    const filterData = submissionContest.filter(item => item.yourEmail === user?.email);
    const filterWin = filterData.filter(win => win.winingStatus === "winner");
    if(filterWin.length == 0) {
        return <div>
        <h1 className="text-4xl text-red-500 font-bold 
        min-h-screen text-center">😑There Is No Contest That You Win</h1>
            </div>
    }
    if(isLoading){
        <Loader/>
      }
    return (
        <div className="grid lg:grid-cols-2 gap-8 my-5">

        {filterWin?.map((items) => (
       <CardAchieve key={items} items={items}></CardAchieve>
     ))}
   
   
   
           </div>
    );
};

export default Achievement;