import SortPage from "~/components/sort-page/sort-page";
import {MergeSortDescription} from "~/components/sort-page/sorting-descriptions";
import type {ArrayItem} from "~/components/lib/types";

const merge = async (leftArray: ArrayItem[], rightArray: ArrayItem[]) => {
    let sorted: ArrayItem[] = [];

    // While both arrays have items, they can be sorted.
    while (leftArray.length && rightArray.length) {
        if (leftArray[0].value < rightArray[0].value) {
            sorted.push(leftArray.shift()!);
        } else {
            sorted.push(rightArray.shift()!);
        }
    }

    // Clean up leftovers
    if(leftArray.length) {
        sorted = [...sorted, ...leftArray];
    }

    if(rightArray.length) {
        sorted = [...sorted, ...rightArray];
    }

    return sorted;
}

const mergeSortAlgorithm = async (array: ArrayItem[]): Promise<ArrayItem[]> => {
    if (array.length <= 1) {
        return array;
    }

    // Divide array into two separate arrays, and call merge sort recursively on those arrays
    let midpoint = Math.floor(array.length / 2);
    let sortedLeft = await mergeSortAlgorithm(array.slice(0, midpoint));
    let sortedRight = await mergeSortAlgorithm(array.slice(midpoint));

    // When the arrays are small enough they can be merged
    return merge(sortedLeft, sortedRight);
}

async function mergeSort(toBeSortedArray: ArrayItem[], setToBeSortedArray: (array: ArrayItem[]) => void, setActiveIndices: (indices: number[]) => void) {
    const sorted = await mergeSortAlgorithm([...toBeSortedArray]);
    setToBeSortedArray(sorted);
    setActiveIndices([]);
}

export default function MergeSortPage() {
    return <SortPage
        algorithm={mergeSort}
        title="Merge Sort"
        description={<MergeSortDescription />}
    />
}