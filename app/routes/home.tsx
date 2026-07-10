import { Link } from "react-router";

export default function Home() {
    return (
        <main className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-3">AlgoVisualizer</h1>
            <p className="text-[#667] mb-12">
                A visual reference for common algorithms and data structures.
                Pick a category below or use the sidebar to jump straight to an algorithm.
            </p>

            <div className="grid grid-cols-2 gap-6">
                <div className="border border-[#222222] rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-2">Sorting</h2>
                    <p className="text-sm text-[#667] mb-4">
                        Algorithms that reorder elements in a list. Covers selection, bubble, merge, and quick sort. Each has a different tradeoff between speed and simplicity.
                    </p>
                    <Link to="/selection-sort" className="text-sm font-semibold">
                        Start with Selection Sort →
                    </Link>
                </div>

                <div className="border border-[#222222] rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-2">Searching</h2>
                    <p className="text-sm text-[#667] mb-4">
                        Algorithms that find a target value in a list. Linear search checks everything. Binary search cuts the problem in half each step.
                    </p>
                    <Link to="/linear-search" className="text-sm font-semibold">
                        Start with Linear Search →
                    </Link>
                </div>

                <div className="border border-[#222222] rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-2">Trees</h2>
                    <p className="text-sm text-[#667] mb-4">
                        A Binary Search Tree stores values so that searching, inserting, and deleting are fast. Build one yourself and search through it.
                    </p>
                    <Link to="/binary-search-tree" className="text-sm font-semibold">
                        Try the BST →
                    </Link>
                </div>

                <div className="border border-[#222222] rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-2">Graphs</h2>
                    <p className="text-sm text-[#667] mb-4">
                        Graph traversal algorithms explore a network of connected nodes. Compare how DFS and BFS visit nodes in a completely different order.
                    </p>
                    <Link to="/graph" className="text-sm font-semibold">
                        Explore DFS & BFS →
                    </Link>
                </div>
            </div>
        </main>
    );
}