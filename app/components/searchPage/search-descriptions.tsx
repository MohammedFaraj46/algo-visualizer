export function LinearSearchDescription() {
    return <p className="p-8 pt-15 w-175">
        Linear search just checks every element one by one until it finds the target. No tricks, just brute force.
        <br/><br/>

        Works on any array, sorted or not, but can be slow on large datasets since it might have to check everything.
        <br/><br/>

        <b className="text-yellow-500">Time complexity: O(n) (not great, not terrible)</b>
    </p>
}

export function BinarySearchDescription() {
    return <p className="p-8 pt-15 w-175">
        Binary search cuts the search space in half each step. Check the middle, is it too high? Ignore the right half. Is it too low? Ignore the left half. Repeat until the element is found.
        <br/><br/>

        Only works on sorted arrays, but when it does it's really fast. A million elements takes at most 20 steps.
        <br/><br/>

        <b className="text-green-500">Time complexity: O(log n) (great)</b>
    </p>
}