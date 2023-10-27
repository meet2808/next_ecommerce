import Link from "next/link";
import { SIDEBAR_LINKS } from "@/utils";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
    return (
        <>
            <div className="bg-primary-blue text-white flex flex-col w-64 gap-4 p-5 h-screen">

                {/* SideBar Header */}
                <h1 className="font-bold text-4xl">Admin</h1>

                {/* SideBar Links section */}
                <ul className="flex flex-col gap-2 px-4">
                    {SIDEBAR_LINKS?.map((item) => (
                        <Link href={item.path} key={item.id}>
                            <li className="flex items-center gap-3 text-xl">
                                <span>{item.icons}</span>
                                <span>{item.text}</span>
                            </li>
                        </Link>
                    ))} 
                </ul>

                {/* SideBar Logout Button */}
                <div className="flex gap-3 items-center justify-self-end px-4 ">
                    <FiLogOut size={20} />
                    <span>Log Out</span>
                </div>       
            </div>
        </>
    )
}
export default SideBar;