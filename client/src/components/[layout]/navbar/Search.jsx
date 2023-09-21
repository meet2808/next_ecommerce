import { BiSearch } from "react-icons/bi";

const Search = () => {
    return (
        <div className="relative w-full ">
            <input type="text" placeholder="Search Books By Name, Author or ISBN" className="w-full rounded-md h-10 p-4 border text-sm text-black placeholder:text-neutral-500" />

            <div className="absolute top-0 right-4">
                <BiSearch className="h-10" />
            </div>
        </div>

        // </div>
    )
}
export default Search;