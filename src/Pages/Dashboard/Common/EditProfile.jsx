import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useUserData from "../../../Hooks/useUserData";
import EditCard from './EditCard';

const EditProfile = () => {
    const {userList}= useUserData();
    const {user}=useAuth()
    const filterUserList = userList.filter(contest => contest.email === user?.email);
  
   
    return (
        <div>
          <Helmet>
        <title>Edit Profile | Contes Buddy</title>
      </Helmet>
          {filterUserList?.map((items) => (
    <EditCard key={items} items={items}/>
  
  ))}
        </div>
    );
};

export default EditProfile;