
export function SelectionSortDescription() {
    return <p className="p-8 w-175">
        When the algorithm starts, it selects the first item as the lowest number.
        Then, it traverses the array looking for a number lower than the current selection. If one is found, this item is marked.
        The search continues until the end of the array. Then the first item gets swapped with the marked item.
        <br/><br/>

        The algorithm starts again at the second item. The algorithm will check the whole array and keeps doing the same thing described above.
        <br/><br/>

        Selection sort is simple to understand and implement, with minimal memory usage.
        Its main drawback is the time complexity, making it inefficient for larger datasets.
        <br/><br/><br/>

        <b className="text-red-500">Time complexity: O(n^2) (bad)</b>
    </p>
}

export function BubbleSortDescription() {
    return <p className="p-8 w-175">
        Bubble sort compares two values and swaps them if the left value is bigger than the right value.
        When that is done, the sort moves 1 step to the right and compares again.
        <br/><br/>

        Bubble sort consists of two loops: The outer loop and inner loop.
        The inner loop does one full pass through the array, moving the largest value to the end. (N)
        <br/><br/>

        The outer loop repeats this process, each time ignoring the last element since it's already in its correct position. (N - 1)
        <br/><br/>

        Bubble sort is inefficient on large datasets, but simple to understand. It can be optimized by stopping the algorithm if no swaps occur.
        <br/><br/>

        <b className="text-red-500">Time complexity: O(n^2) (bad)</b>
    </p>
}

export function MergeSortDescription() {
    return <p className="p-8 w-175">
        Merge sort works by splitting the array in half repeatedly until each piece has only one element. A single element is always sorted by definition.
        <br/><br/>

        When an array is fully split, the pieces are repeatedly merged back together.
        During every merge the algorithm chooses the smallest element of two items, and combines both pieces into a sorted array.
        <br/><br/>

        The merging happens recursively until the whole array is sorted.
        <br/><br/>

        Merge sort is significantly more efficient on large datasets, at the cost of using extra memory.
        <br/><br/>

        <b className="text-green-500">Time complexity: O(n log n) (good)</b>
    </p>
}