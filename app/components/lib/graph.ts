// Hardcoded graph for DFS/BFS
export const graph = {
    nodes: [
        { id: "1", position: { x: 200, y: 0 }, data: { label: "1" } },
        { id: "2", position: { x: 100, y: 100 }, data: { label: "2" } },
        { id: "3", position: { x: 300, y: 100 }, data: { label: "3" } },
        { id: "4", position: { x: 50, y: 200 }, data: { label: "4" } },
        { id: "5", position: { x: 150, y: 200 }, data: { label: "5" } },
    ],
    edges: [
        { id: "1-2", source: "1", target: "2", type: "straight" },
        { id: "1-3", source: "1", target: "3", type: "straight" },
        { id: "2-4", source: "2", target: "4", type: "straight" },
        { id: "2-5", source: "2", target: "5", type: "straight" },
    ]
}