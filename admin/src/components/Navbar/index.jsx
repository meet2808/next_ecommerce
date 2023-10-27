import { BiBell, BiSearch } from "react-icons/bi";

const Navbar = () => {
    return (
        <>
            <header className="sticky top-0 z-999 flex p-5 bg-white drop-shadow-1">
                {/* Container which contains search bar and notification section */}
                <div className="flex flex-grow items-center justify-between">
                    {/* Search Bar with Search icon */}
                    <div className="flex justify-center items-center">
                        {/* Search Icon */}
                        <BiSearch size={25} />

                        {/* Search Input Box */}
                        <input
                            type="text"
                            placeholder="Type to search..."
                            className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
                        />
                    </div>

                    {/* contains notification icon */}
                    <div className="flex items-center relative cursor-pointer">
                        {/* Notification Icon */}
                        <BiBell size={25} />

                        {/* Notification Count */}
                        <span className="text-xs fixed right-3 top-1 bg-red-600 py-1 px-2 rounded-2xl text-white">1</span>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Navbar;