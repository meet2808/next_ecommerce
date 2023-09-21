'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
    const pathName = usePathname();

    if(pathName === "/dashboard/") {
        return (<></>)
    } else {
        return (
            <footer className="mt-4 border-t-red-300">
                <hr />
                <div className="flex flex-col gap-6 px-6 py-9 sm:px-0 sm:py-0 mt-5">
                    <div className="flex md:flex-row sm:flex-col gap-20 sm:gap-8 md:px-20 justify-center">
                        <div className="uppercase font-bold ml-5 md:mr-0">Bookmart</div>

                        <div className="sm:ml-5">
                            <ul className="flex md:flex-row sm:flex-col gap-5">
                                <li>
                                    <Link href="/" className="text-[20] h-full text-neutral-500 text-sm md:flex hover:text-black hover:underline underline-offset-4">Home</Link>
                                </li>

                                <li>
                                    <Link href="#" className=" text-[20] h-full text-neutral-500 text-sm md:flex hover:text-black hover:underline underline-offset-4">About</Link>
                                </li>

                                <li>
                                    <Link href="#" className=" text-[20] h-full text-neutral-500 text-sm md:flex hover:text-black hover:underline underline-offset-4">Terms & Conditions</Link>
                                </li>

                                <li>
                                    <Link href="#" className=" text-[20] h-full text-neutral-500 text-sm md:flex hover:text-black hover:underline underline-offset-4">Shipping & Return Policy</Link>
                                </li>

                                <li>
                                    <Link href="#" className=" text-[20] h-full text-neutral-500 text-sm md:flex hover:text-black hover:underline underline-offset-4">Privacy Policy</Link>
                                </li>

                                <li>
                                    <Link href="#" className=" text-[20] h-full text-neutral-500 text-sm md:flex hover:text-black hover:underline underline-offset-4">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="m-2 text-neutral-500 text-[15px] flex md:flex-row sm:flex-col gap-5 justify-center sm:m-auto">
                        <span>© 2023 Inc. All rights reserved.</span>
                        <span className="block sm:hidden">|</span>
                        <span className="sm:text-center">Designed By Meet</span>
                    </div>
                </div>
            </footer>
        )
    }    
}

export default Footer;