
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

export function QuickSortDescription() {
    return <p className="p-8 w-175">
        Quick sort works by picking a pivot element. In this implementation the last element of the array.
        It then splits the array so that everything smaller than the pivot moves to the left, and everything larger moves to the right.
        The pivot is now in its correct final position.
        <br/><br/>

        This process is applied recursively to the left and right sides, each time picking a new pivot and rearranging around it.
        This continues until every portion has one or zero elements, at which point the array is fully sorted.
        <br/><br/>

        Quick sort is most of the times very fast, unless the array is already sorted.
        <br/><br/>

        <b className="text-green-500">Average time complexity: O(n log n) (good)</b>
        <br/>
        <b className="text-red-500">Worst case time complexity: O(n^2) (bad — already sorted array)</b>
    </p>
}