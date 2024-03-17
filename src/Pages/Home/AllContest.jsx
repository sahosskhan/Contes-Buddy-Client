import { useForm } from "react-hook-form";
import Loader from "../../components/Loader";
import useMyContest from "../../Hooks/Contest/useMyContest";
import { useState } from "react";
import Card from "./Card";


const AllContest = () => {
    const [tagText, setTagText] = useState("");
    const [searchText, setSearchText] = useState("");
    const {
        register,
        handleSubmit,
    } = useForm();


    const onSubmit = (data) => {
        const nameData = data.name;
        setSearchText(nameData)
    };

    const handleSelectChange = (e) => {
        const selectedTag = e.target.value;
        setTagText(selectedTag)
    };
    const {myContest,  isLoading}= useMyContest();
    const addedFilterContest = myContest.filter(item => item.status === 'approved');
if (isLoading){
    return <Loader/>
}
// console.log(tagText)
// console.log(searchText)
let ContestFilter = addedFilterContest;


if (tagText !== "") {
    ContestFilter = ContestFilter.filter(contest => contest.tags.toLowerCase().includes(tagText.toLowerCase()));
}

if (searchText !== "") {
    ContestFilter = ContestFilter.filter(contest => contest.nameContest.toLowerCase().includes(searchText.toLowerCase()));
}



    return (
        
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mb-16'>
  
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex lg:flex-row md:flex-row flex-col lg:justify-around md:justify-around items-center gap-5 container mx-auto">
               <div className="flex lg:w-[30%] md:w-[50%] w-[90%] justify-center items-center">
               <select
                        className='w-full px-4 py-3 border-4 border-red-500 focus:outline-red-500 rounded-md rounded-r-none'
                        name='category' {...register("tags")}
                        onChange={handleSelectChange}// Set value on select change
                    >
                   <option value="">
                 All
                  </option>
                   <option value="Open World">
                  Open World
                  </option>
                  <option value="Role Playing">
                  Role Playing
                  </option>
                  <option value="Action">
                    Action
                  </option>
                  <option value="Adventure">
                  Adventure
                  </option>
                  <option value="Strategy">
                  Strategy
                  </option>
                  <option value="Casual">
                  Casual
                  </option>
                  <option value="Puzzle">
                  Puzzle
                  </option>
                  <option value="Simulation">
                  Simulation
                  </option>
                  <option value="Sports">
                  Sports 
                  </option>
                  <option value="Racing">
                  Racing
                  </option>
                    </select>
                    <h1 className="w-full bg-red-500 py-[13.5px] rounded-l-none px-5 text-center rounded-md text-white text-xl font-bold">Category</h1>
               </div>

                 <div className="flex lg:w-[30%] md:w-[50%] w-[90%] ">
                 <input
                        className='w-full px-4 py-3 text-gray-800 border-4 rounded-r-none border-red-500 focus:outline-red-500 rounded-md'
                        name='name'
                        id='name'
                        type='text'
                        {...register("name")}
                        placeholder='Contest Name'
                        required
                    />

                    <button type="submit" className="px-6 py-2  rounded-l-none bg-red-500 rounded-md text-white text-xl font-bold">Search</button>
                 </div>
                </form>
            </div>
{(ContestFilter.length === 0)?<div className=" flex flex-col justify-center items-center min-h-screen">
    
    <h1 className="text-red-500 font-semibold text-4xl text-center">
        😭Sorry, No Contest Found!</h1>
    </div>
    :<div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8'>
{ContestFilter.map(ContestFilter => (
            <Card key={ContestFilter._id} ContestFilter={ContestFilter} />
          ))}
    
</div>}





        </div>
    );
};

export default AllContest;
