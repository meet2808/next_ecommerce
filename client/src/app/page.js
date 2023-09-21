import Image from "next/image";
import Poster from "../../public/Poster.jpg";
import Book1 from "../../public/book2.png";
import { ProductCard, Hero } from "@/components";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col px-5 gap-3">
          <h1 className="text-black font-medium text-xl">Popular Books For you</h1>
          <div className="grid md:grid-cols-5 gap-5">
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
          </div>
        </div>

        <div className="flex flex-col px-5 gap-3">
          <h1 className="text-black font-medium text-xl">New arrivals For you</h1>
          <div className="grid md:grid-cols-5 gap-5">
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
            <ProductCard img={Book1} bookTitle={"Do it Today"} price={100} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home;
