import { SideBar, TopBar, SuperComponent } from "@/components";

const Dashboard = () => {
    return (
        <>
            <div className="w-full h-screen overflow-hidden">
                <SideBar />
                <div>
                    <TopBar />
                    <div>
                        <SuperComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;