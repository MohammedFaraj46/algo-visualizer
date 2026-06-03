
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
        Lorem ipsum
    </p>
}