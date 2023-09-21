'use client'
import Image from "next/image";
import Link from "next/link";

const ProductCard = (props) => {
    const { img, bookTitle, price } = props;
    return (
        <Link href="/book/123">
            <div
                className="flex flex-col md:h-[300px] md:[400px]-full h-[500px] w-full sm:p-5 p-5 overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black"
            >
                <Image src={img} alt={bookTitle} className="object-cover" />

                <div className="md:mt-2 sm:mt-7 flex-col item-center justify-center">
                    <p className="text-xl text-black-500 text-center">{bookTitle}</p>
                    <p className="font-bold text-center">₹{price}</p>
                </div>
            </div>
        </Link>

    )
}

export default ProductCard;