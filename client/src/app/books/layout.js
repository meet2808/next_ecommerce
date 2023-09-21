import { FilterBar } from "@/components"

export default function BooksLayout({ children }) {
    return (
        <>
            <div className="flex md:flex-row sm:flex-col p-4 gap-14">
                {/* Filter section for Book Category */}
                <FilterBar />
                {children}
            </div>
        </>
    )
}