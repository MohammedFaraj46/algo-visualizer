import NavBarButton from "~/components/navigation/navbar-button";
import {Link} from "react-router";


export default function Navbar() {
    return <div className="w-64 bg-surface bg-[#111111] border-[#222222] flex flex-col p-6">
        <h1 id="header" className="text-3xl font-bold pb-5">
            <Link to="/">AlgoVisualizer</Link>
        </h1>

        <br />
        <label>Sorting</label>
        <NavBarButton text={"Selection Sort"} link={"/selection_sort"} />
        <NavBarButton text={"Bubble Sort"} link={"/bubble_sort"} />
        <NavBarButton text={"Merge Sort"} link={"/merge_sort"} />
        <NavBarButton text={"Quick Sort"} link={"/quick_sort"} />

        <br/>
        <label>Searching</label>
        <NavBarButton text={"Linear Search"} link={"/linear_search"} />
        <NavBarButton text={"Binary Search"} link={"/binary_search"} />

        <br/>
        <NavBarButton text={"Binary Search Tree"} link={"/binary_search_tree"} />
    </div>
}