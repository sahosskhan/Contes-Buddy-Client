import MenuItem from "../MenuItem";
import { MdManageAccounts } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
const AdminMenu = () => {
    return (
        <>
                  <MenuItem
        icon={MdManageAccounts}
        label='Manage User'
        address='manage-user'
      />
                    <MenuItem
        icon={MdManageHistory}
        label='Manage Contest'
        address='manage-contest'
      />
        </>
    );
};

export default AdminMenu;