import {ReactFlow} from "@xyflow/react";
import { type Node, type Edge } from '@xyflow/react';
import BSTNode from "~/components/lib/bst-node";
import {useRef, useState} from "react";

export default function BinarySearchTreePage() {
    const [addNumber, setAddNumber] = useState<number | null>();
    const [searchNumber, setSearchNumber] = useState<number | null>();

    const [searchPath, setSearchPath] = useState<number[]>();

    const rootRef = useRef<BSTNode | null>(null);
    const [nodes, setNodes] = useState<Node[]>();
    const [edges, setEdges] = useState<Edge[]>();

    function convertToFlow(node: BSTNode | null, x: number, y: number, offset: number, nodes: Node[], edges: Edge[], searchPath: number[], parentId?: string) {
        if(node) {
            nodes.push({
                id: node.value.toString(),
                position: { x, y },
                data: { label: node.value },
                style: searchPath.includes(node.value) ? { background: '#4ade80' } : {}
            });

            if(parentId) {
                edges.push({
                    id: parentId + "-" + node.value.toString(),
                    source: parentId,
                    target: node.value.toString(),
                });
            }
        }

        if(node?.left) {
            convertToFlow(node.left, x - offset, y + 100, offset * 0.5, nodes, edges, searchPath, node.value.toString());
        }

        if(node?.right) {
            convertToFlow(node.right, x + offset, y + 100, offset * 0.5, nodes, edges, searchPath, node.value.toString());
        }
    }

    return <>
        <h1 className="text-3xl font-bold">Binary Search Tree</h1>

        <div className="mt-10 space-y-5">
            <div>
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={addNumber ?? ""}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // strip non-digits
                        setAddNumber(value === "" ? null : Number(value));
                    }}
                    className="border border-[#222222] bg-white text-black px-3 py-2 mr-7 rounded-md text-sm font-mono w-40 focus:outline-none"
                />
                <button
                    className="border"
                    onClick={() => {
                        if(addNumber) {
                            if (!rootRef.current) {
                                rootRef.current = new BSTNode(addNumber);
                            } else {
                                rootRef.current.insert(addNumber);
                            }
                        }

                        const newNodes: Node[] = [];
                        const newEdges: Edge[] = [];
                        convertToFlow(rootRef.current, 0, 0, 200, newNodes, newEdges, searchPath ?? []);
                        setNodes(newNodes);
                        setEdges(newEdges);
                    }}>
                    Add
                </button>
            </div>

            <div>
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={searchNumber ?? ""}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // strip non-digits
                        setSearchNumber(value === "" ? null : Number(value));
                    }}
                    className="border border-[#222222] bg-white text-black px-3 py-2 mr-7 rounded-md text-sm font-mono w-40 focus:outline-none"
                />
                <button
                    className="border"
                    onClick={() => {
                        if(searchNumber) {
                            const path = rootRef.current?.search(searchNumber) ?? [];
                            setSearchPath(path);

                            const newNodes: Node[] = [];
                            const newEdges: Edge[] = [];
                            convertToFlow(rootRef.current, 0, 0, 200, newNodes, newEdges, path);
                            setNodes(newNodes);
                            setEdges(newEdges);
                        }
                    }}>
                    Search
                </button>
            </div>
        </div>

        <div style={{ height: 500, width: '100%' }} className="w-full">
            <ReactFlow
                nodes={nodes ?? []}
                edges={edges ?? []}
                fitView
                fitViewOptions={{ padding: 0.3, maxZoom: 1.2, minZoom: 1.2 }}
            />
        </div>
    </>
}