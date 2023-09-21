'use client'
import { usePathname } from "next/navigation"
import { BiCart, BiSolidUser } from "react-icons/bi";
import Search from "./Search";
import MobileView from "./MobileView"
import Link from "next/link";
import { CartModel } from "@/components";

const Navbar = () => {
    const pathName = usePathname();

    if (pathName === "/dashboard/") {
        return (<></>)
    } else {
        return (
            <nav className="relative py-4 px-5 flex items-center justify-between">
                <div className="block flex-none md:hidden">
                    <MobileView />
                </div>

                {/* Logo Section */}
                <div className="uppercase font-bold ml-5 md :mr-0">Bookmart</div>

                {/* Search Field */}
                <div className="hidden first-line:relative justify-center w-[550px] md:flex ">
                    <Search />
                </div>

                {/* Links Section */}
                <ul className="flex items-center justify-between gap-5">
                    <li>
                        <Link href={"/books"} className="hidden text-[20] h-full text-neutral-500 text-sm md:flex hover:text-black hover:underline underline-offset-4">All</Link>
                    </li>

                    <li>
                        <Link href={"#"} className="hidden text-[20] h-full text-neutral-500 text-sm md:flex hover:text-black hover:underline underline-offset-4">Contact Us</Link>
                    </li>
                    <li >
                        <CartModel quantity={1} />
                    </li>
                    <li>
                        <Link href={"/account"} className={`text-[20] h-full text-black-500 text-sm`}>
                            <BiSolidUser size={25} />
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar