import NavBarButton from "~/components/navigation/navbar-button";
import {Link} from "react-router";

export default function Navbar() {
    return <div className="w-64 bg-[#111111] border-[#222222] border flex flex-col p-6">
        <h1 id="header" className="text-3xl font-bold pb-5">
            <Link to="/">AlgoVisualizer</Link>
        </h1>

        <br />
        <label>Sorting</label>
        <NavBarButton text={"Selection Sort"} link={"/selection-sort"} />
        <NavBarButton text={"Bubble Sort"} link={"/bubble-sort"} />
        <NavBarButton text={"Merge Sort"} link={"/merge-sort"} />
        <NavBarButton text={"Quick Sort"} link={"/quick-sort"} />

        <br/>
        <label>Searching</label>
        <NavBarButton text={"Linear Search"} link={"/linear-search"} />
        <NavBarButton text={"Binary Search"} link={"/binary-search"} />

        <br/>
        <label>Trees</label>
        <NavBarButton text={"Binary Search Tree"} link={"/binary-search-tree"} />

        <br/>
        <label>Graphs</label>
        <NavBarButton text={"DFS/BFS"} link={"/graph"} />
    </div>
}