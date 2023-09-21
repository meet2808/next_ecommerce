'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsXLg, BsPlus, BsDash, BsFillTrashFill } from "react-icons/bs";
import OpenCart from "./OpenCart";
import EmptyCart from "../../../public/empty.png";
import Book from "../../../public/book2.png";

const CartModel = ({ quantity }) => {
    const [isModelOpen, setIsModelOpen] = useState(false)

    return (
        <div className="overflow-hidden">
            <button onClick={() => { setIsModelOpen(true) }}>
                <OpenCart quantity={quantity} />
            </button>

            <div
                className={`fixed flex flex-col right-0 top-0 h-full bg-white md:w-96 sm:w-full shadow-xl z-50 transition-transform transform backdrop-blur-2xl ${isModelOpen ? 'overflow-hidden' : 'translate-x-full'
                    }`}
            >

                <div className="flex flex-row items-center">
                    <h1 className="absolute top-6 left-5 font-bold text-xl">My Cart</h1>

                    <button className="absolute top-5 right-4 border border-neutral-200 rounded-sm px-4" onClick={() => { setIsModelOpen(false) }}>
                        <BsXLg size={18} className="h-11 font-bold" />
                    </button>
                </div>

                {quantity ? (
                    <div className="flex flex-col mt-20 justify-between p-1 h-full overflow-hidden">
                        <ul className="flex-grow overflow-auto py-4">
                            <li className="border-b border-neutral-300 mx-2 my-1">
                                <div className="flex flex-row gap-3 px-2 py-2">
                                    <div>
                                        <Image src={Book} className="w-[150px] h-[140px]" />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <span className="text-md">How to win friends and Influence people</span>
                                        <span>₹100</span>
                                        <div className="flex flex-row items-center justify-between ">
                                            <div className="flex flex-row items-center gap-5 border border-neutral-200 rounded-full py-2 px-4">
                                                <button><BsDash size={25} /></button>
                                                <span>1</span>
                                                <button><BsPlus size={25} /></button>
                                            </div>

                                            <button><BsFillTrashFill /></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="flex flex-col gap-2 py-5 px-2">
                            <div className="flex flex-row items-center justify-between">
                                <span>Total</span>
                                <span>₹400</span>
                            </div>

                            <Link href="/checkout">
                                <button className="relative flex w-[300px] items-center m-auto justify-center bg-blue-600 p-2 tracking-wide rounded-full text-white hover:opacity-90" onClick={() => setIsModelOpen(false)}>
                                    <span>Proceed To Checkout</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Image src={EmptyCart} alt="Empty Cart" className="absolute top-20 left-10 h-[300px] w-[300px]" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartModel;