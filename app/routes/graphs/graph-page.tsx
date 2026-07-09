import {type ReactNode, useState} from "react";
import {type Edge, type Node, ReactFlow} from "@xyflow/react";
import {graph} from "~/components/lib/graph";
import {BfsDescription, DfsDescription} from "~/components/graph-page/graph-descriptions";

async function runAlgorithm(mode: "dfs" | "bfs", setVisited: (nodes: string[]) => void) {
    const adjacencyList = new Map<string, string[]>();

    graph.edges.forEach(edge => {
        adjacencyList.set(edge.source, [...(adjacencyList.get(edge.source) ?? []), edge.target]);
        adjacencyList.set(edge.target, [...(adjacencyList.get(edge.target) ?? []), edge.source]);
    });

    const stack: string[] = [];
    const visited = new Set<string>();

    stack.push("1");

    while(stack.length > 0) {
        const current = (mode == "dfs" ? stack.pop() : stack.shift());
        if (!current) continue;

        if (!visited.has(current)) {
            visited.add(current);
            stack.push(...(adjacencyList.get(current) ?? []));
            setVisited([...visited]);
            await new Promise(r => setTimeout(r, 225));
        }
    }
}

export default function GraphPage() {
    const [visitedNodes, setVisitedNodes] = useState<string[] | null>(null);
    const [mode, setMode] = useState<"dfs" | "bfs">("dfs")

    const styledNodes = graph.nodes.map(node => ({
        ...node,
        style: visitedNodes?.includes(node.id) ? { background: '#4ade80', color: 'black' } : {}
    }));

    return <>
        <h1 className="text-3xl font-bold">{mode == "dfs" ? "Depth First Search" : "Breadth First Search"}</h1>

        <div className="flex gap-2 items-center mt-5">
            <button
                className={mode === "dfs" ? "border border-green-300" : "border"}
                onClick={() =>
                    {
                        setVisitedNodes(null);
                        setMode("dfs");
                    }}>
                DFS
            </button>
            <button
                className={mode === "bfs" ? "border border-green-300" : "border"}
                onClick={() =>
                {
                    setVisitedNodes(null);
                    setMode("bfs");
                }}>
                BFS
            </button>
            <button className="border" onClick={() => {
                setVisitedNodes(null);
                runAlgorithm(mode, setVisitedNodes);
            }}>
                Start
            </button>
        </div>

        <div style={{ height: 500, width: '100%' }} className="w-full">
            <ReactFlow
                nodes={ styledNodes }
                edges={ graph.edges }
                fitView
                fitViewOptions={{ padding: 0.3, maxZoom: 1.2, minZoom: 1.2 }}
            />
        </div>

        {mode === "dfs" ? <DfsDescription /> : <BfsDescription />}
    </>
}