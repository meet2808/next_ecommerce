
import { AiFillDashboard } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { FiUsers, FiLogOut } from "react-icons/fi";

export const SIDEBAR_LINKS = [
    {
        id : 1,
        icons : <AiFillDashboard size={20} />,
        text : "Dashboard",
        path : "/panel"
    },
    {
        id : 2,
        icons : <BsFillBoxFill size={20} />,
        text : "Products",
        path : "/panel/products"
    },
    {
        id : 3,
        icons : <FiUsers size={20} />,
        text : "Users",
        path : "/panel/users"
    },
]