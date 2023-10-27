import { Navbar, SideBar } from "@/components";

export default function AdminLayout({ children }) {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex flex-col flex-grow">
                    <Navbar />
                    <div className="bg-primary-bg flex-grow p-4">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}