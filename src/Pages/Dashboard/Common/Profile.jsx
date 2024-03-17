import useAuth from "../../../Hooks/useAuth";
import useUserData from "../../../Hooks/useUserData";
import ProfileCard from "./ProfileCard";


const Profile = () => {
    const {userList}= useUserData();
    const {user}=useAuth()
    const filterUserList = userList.filter(contest => contest.email === user?.email);
    return (
        <div  className="min-h-screen flex items-center justify-center">
            {filterUserList?.map((items) => (
    <ProfileCard key={items} items={items}/>
  
  ))}
        </div>
    );
};

export default Profile;