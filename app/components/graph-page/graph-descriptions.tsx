export function DfsDescription() {
    return <p className="p-8 w-175">
        DFS picks a path and follows it all the way down before trying another one. Think of a maze where you solve it by always turning left. When you reach a dead end, you backtrack.
        <br/><br/>

        It uses a stack under the hood, which is why it goes deep before wide.
        <br/><br/>

        <b className="text-yellow-500">Time complexity: O(V + E), where V is vertices and E is edges</b>
    </p>
}

export function BfsDescription() {
    return <p className="p-8 w-175">
        BFS explores all neighbors of a node before going deeper. Instead of committing to one path, every room on the same "floor" gets visited before moving to the next one.
        <br/><br/>

        It uses a queue instead of a stack, which is the only real difference from DFS in terms of implementation.
        <br/><br/>

        <b className="text-yellow-500">Time complexity: O(V + E), where V is vertices and E is edges</b>
    </p>
}