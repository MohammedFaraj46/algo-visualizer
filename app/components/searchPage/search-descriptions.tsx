export function LinearSearchDescription() {
    return <p className="p-8 pt-15 w-175">
        Linear search just checks every element one by one until it finds the target. No tricks, just brute force.
        <br/><br/>

        Works on any array, sorted or not, but can be slow on large datasets since it might have to check everything.
        <br/><br/>

        <b className="text-yellow-500">Time complexity: O(n) (not great, not terrible)</b>
    </p>
}