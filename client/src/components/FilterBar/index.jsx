import Link from "next/link";
import { BOOK_CATEGORIES, BOOK_AUTHORS, BOOK_LANGUAGE } from "@/utils";

const FilterBar = () => {
    return (
        <>
            <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <span className="text-sm text-neutral-500">Category</span>

                    <ul className="flex flex-col gap-2">
                        {BOOK_CATEGORIES.map((item) => (
                            <Link href={"#"} key={item.id}>
                                <li className="text-sm text-black capitalize hover:text-black hover:underline underline-offset-4">{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-sm text-neutral-500">Authors</span>

                    <ul className="flex flex-col gap-2">
                        {BOOK_AUTHORS.map((item) => (
                            <Link href={"#"} key={item.id}>
                                <li className="text-sm text-black capitalize hover:text-black hover:underline underline-offset-4">{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-sm text-neutral-500">Languages</span>

                    <ul className="flex flex-col gap-2">
                        {BOOK_LANGUAGE.map((item) => (
                            <Link href={"#"} key={item.id}>
                                <li className="text-sm text-black capitalize hover:text-black hover:underline underline-offset-4">{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default FilterBar;