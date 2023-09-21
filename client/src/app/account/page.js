'use client'
import Image from "next/image";
import Book from "../../../public/book2.png";

const Page = () => {
    return (
        <>
            <div>
                <h1 className="text-[30px] font-bold pl-4">Hello, Meet</h1>

                <div className="mx-auto w-1/2 overflow-hidden">
                    <h1 className="text-[20px]">My Orders</h1>
                    <hr />

                    <div className="mt-4 overflow-auto">
                        <span>August 15, 2023</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;