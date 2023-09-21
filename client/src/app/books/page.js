import { ProductCard } from "@/components";
import Book1 from "../../../public/book2.png"

const Books = () => {
    return (
        <>
            <div>
                <div className="grid md:grid-cols-5 gap-3">
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                    <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
                </div>
            </div>
        </>
    )
}

export default Books;