import Img from "../../../../public/book2.png";
import Book1 from "../../../../public/book2.png";
import Image from "next/image";
import { ProductCard } from "@/components";

const Page = () => {
    return (
        <div>
            <section className="flex md:flex-row mx-4 border rounded bg-white">
                <div className="py-5">
                    <Image src={Img} className="relative" height={470} />
                </div>

                {/* Production Description */}
                <div className="flex flex-col gap-6 py-10">

                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-medium capitalize">How to win friends and influence people</h1>
                        <span className="px-2 py-2 w-[118px] rounded-3xl bg-blue-600 text-white text-base">₹ 100.00 RS</span>
                        <span className="text-gray-700">Self-improvement</span>

                    </div>

                    <hr />
                    <div>
                        <span className="text-md uppercase">Product Description</span>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="flex flex-row gap-x-56">
                            <div className="flex flex-col">
                                <div className="capitalize text-black">author</div>
                                <div className="capitalize text-sm">dale carnegie</div>
                            </div>

                            <div className="flex flex-col">
                                <div className="capitalize text-black">isbn</div>
                                <div className="capitalize text-sm">9780099590088</div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-60">
                            <div className="flex flex-col">
                                <div className="capitalize text-black">language</div>
                                <div className="capitalize text-sm">english</div>
                            </div>

                            <div className="flex flex-col">
                                <div className="capitalize text-black">edition</div>
                                <div className="capitalize text-sm">1st edition</div>
                            </div>
                        </div>

                        <button className="relative flex w-[300px] items-center justify-center bg-blue-600 p-4 tracking-wide text-white hover:opacity-90">
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="flex flex-col mx-4 mt-7 gap-5">
                <div>
                    <h3 className="font-bold text-2xl">Related Products</h3>
                </div>

                <div className="grid md:grid-cols-5 gap-5">
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                </div>
            </section>
        </div>
    )
}

export default Page;