import MenuItem from "../MenuItem";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
const UserMenu = () => {
    return (
        <>
              <MenuItem
        icon={BsFillBookmarkCheckFill}
        label='My Participated'
        address='my-participated'
      />  
              <MenuItem
        icon={GrAchievement}
        label='My Achievement'
        address='my-achievement'
      />  
        </>
    );
};

export default UserMenu;