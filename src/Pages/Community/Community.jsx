import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import AddPost from "./AddPost";
import AllPost from "./AllPost";
import useCommunity from "../../Hooks/Contest/useCommunity";
import imgNo from '../../assets/placeholder.jpg'
import Container from "../../Components/Container";
import { Helmet } from "react-helmet-async";



const Community = () => {
    const {userList}= useUserData();
    const {user}=useAuth()
    const filterUserList = userList.filter(contest => contest.email === user?.email);
    const imageFilter = filterUserList.map(user => user.image);
    const imageString = imageFilter.join(', '); 

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
      setIsOpen(false);
    };

    const upload = useCommunity();

    return (
<div>
<Helmet>
        <title>Community | Contes Buddy</title>
      </Helmet>
<Container>

<section className="" onClick={() => setIsOpen(true)}>
        <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-2 px-10 mt-10">
          <img className="rounded-full w-14" src={imageString? imageString :imgNo} alt="User avatar" />
          <h1 className='w-1/2 px-4 py-3 text-gray-800 bg-red-100 rounded-full '>Share Us, What&apos;s on your mind?</h1>
        </div>
      </section>


      <div className="flex justify-center items-center mx-6 flex-col mb-24">
        {upload?.map((items) => (
          <AllPost key={items} items={items}></AllPost>
        ))}
      </div>


      <AddPost closeModal={closeModal}
        isOpen={isOpen} />
  
</Container>
</div>
    );
};

export default Community;