"use client"
import { FaUsers, FaShoppingCart, FaRupeeSign, FaRegEye, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdPendingActions } from "react-icons/md";
import { SalesChart, ProfitChart } from "@/components";

const Admin = () => {
    return (
        <>
            <>
                <div className="grid grid-cols-4 place-items-center">
                    <div className="bg-white px-8 py-3 w-56 h-36 rounded-sm border border-stroke shadow-default flex flex-col items-start">
                        <span className="bg-slate-200 p-3 rounded-full text-primary">
                            <FaRegEye size={20} />
                        </span>

                        <span className="mt-5 flex items-end justify-between">
                            <div>
                                <h4 className="text-2xl font-bold">₹35,6K</h4>
                                <span className="text-xs font-medium text-gray-500">Total Views</span>
                            </div>

                            <div className="flex items-center gap-6 self-end">
                                <span className="flex items-center text-sm self-end gap-1 text-green-500">0.43% <span><FaArrowUp /></span></span>
                            </div>
                        </span>


                    </div>

                    <div className="bg-white px-8 py-3 w-56 h-36 rounded-sm border border-stroke shadow-default flex flex-col items-start">
                        <span className="bg-slate-200 p-3 rounded-full text-primary">
                            <FaShoppingCart size={20} />
                        </span>

                        <span className="mt-5 flex items-end justify-between">
                            <div>
                                <h4 className="text-2xl font-bold">₹42,5K</h4>
                                <span className="text-xs font-medium text-gray-500">Total Profit</span>
                            </div>

                            <div className="flex items-center gap-6 self-end">
                                <span className="flex items-center text-sm self-end gap-1 text-green-500">4.35% <span><FaArrowUp /></span></span>
                            </div>
                        </span>


                    </div>

                    <div className="bg-white px-8 py-3 w-56 h-36 rounded-sm border border-stroke shadow-default flex flex-col items-start">
                        <span className="bg-slate-200 p-3 rounded-full text-primary">
                            <FiShoppingBag size={20} />
                        </span>

                        <span className="mt-5 flex items-end justify-between">
                            <div>
                                <h4 className="text-2xl font-bold">₹42,5K</h4>
                                <span className="text-xs font-medium text-gray-500">Total Product</span>
                            </div>

                            <div className="flex items-center gap-6 self-end">
                                <span className="flex items-center text-sm self-end gap-1 text-green-500">4.35% <span><FaArrowUp /></span></span>
                            </div>
                        </span>


                    </div>

                    <div className="bg-white px-8 py-3 w-56 h-36 rounded-sm border border-stroke shadow-default flex flex-col items-start">
                        <span className="bg-slate-200 p-3 rounded-full text-primary">
                            <FaShoppingCart size={20} />
                        </span>

                        <span className="mt-5 flex items-end justify-between">
                            <div>
                                <h4 className="text-2xl font-bold">₹42,5K</h4>
                                <span className="text-xs font-medium text-gray-500">Total Profit</span>
                            </div>

                            <div className="flex items-center gap-6 self-end">
                                <span className="flex items-center text-sm self-end gap-1 text-green-500">4.35% <span><FaArrowUp /></span></span>
                            </div>
                        </span>


                    </div>
                </div>

                <div className="flex mt-4 px-6">
                    <div className="bg-white flex-1 mr-4 rounded-sm border border-stroke shadow-default px-3 py-4">
                        <span className="font-bold">Total Sales</span>
                        <SalesChart />
                    </div>

                    <div className="bg-white rounded-sm border border-stroke shadow-default px-3 py-4">
                    <span className="font-bold">Total Profit</span>
                        <ProfitChart />
                    </div>
                </div>

                {/* <div className="mt-4 grid grid-cols-3">
                    <div className="col-span-2">
                        <div className="bg-white px-8 py-3 w-full h-36 rounded-sm border border-stroke shadow-default flex flex-col items-start">
                            <SalesChart />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-white px-8 py-3 w-full h-36 rounded-sm border border-stroke shadow-default flex flex-col items-start">
                            <ProfitChart />
                        </div>
                    </div>
                </div> */}

            </>
        </>
    )
}

export default Admin;