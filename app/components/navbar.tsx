import NavBarButton from "~/components/navbar-button";
import {Link} from "react-router";


export default function Navbar() {
    return <div className="w-64 bg-surface bg-[#111111] border-[#222222] flex flex-col p-6">
        <h1 id="header" className="text-3xl font-bold pb-5">
            <Link to="/">AlgoVisualizer</Link>
        </h1>

        <NavBarButton text={"Selection Sort"} link={"/selection_sort"} />
        <NavBarButton text={"Bubble Sort"} link={"/bubble_sort"} />
        <NavBarButton text={"Merge Sort"} link={"/merge_sort"} />
    </div>
}