import Image from "next/image";
import HeroImg from "../../../public/hero3.png";

const Hero = () => {
    return (
        <div className="flex flex-row">
            <div className="w-[400px] h-[100px]">
                <Image src={HeroImg} alt="Hero Section" className="object-fit"  />
            </div>

            <div className="self-center">
                <p className="text-6xl font-bold text-sky-900">Read Novels,Journals, and Non-Fiction you like</p>
                <p className="text-neutral-400 text-lg">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>

    )
}

export default Hero;