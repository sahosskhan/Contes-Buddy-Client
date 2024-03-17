import MenuItem from "../MenuItem";
import { MdLibraryAdd } from "react-icons/md";
import { FaRectangleList } from "react-icons/fa6";
import { MdTask } from "react-icons/md";
const CreatorMenu = () => {
    return (
        <>
                  <MenuItem
        icon={MdLibraryAdd }
        label='Add Contest'
        address='add-contest'
      />
                  <MenuItem
        icon={FaRectangleList }
        label='My Listing'
        address='my-listing'
      />
                  <MenuItem
        icon={MdTask }
        label='Submissions'
        address='submissions-registered'
      />
        </>
    );
};

export default CreatorMenu;