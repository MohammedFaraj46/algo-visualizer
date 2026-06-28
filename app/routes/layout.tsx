import { Outlet } from "react-router";
import Navbar from "~/components/navigation/navbar";

export default function Layout() {
    return (
        <div className="flex min-h-screen">
            <Navbar />
            <div className="flex-1 p-15">
                <Outlet />
            </div>
        </div>
    )
}