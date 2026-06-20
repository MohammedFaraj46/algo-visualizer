import SortPage from "~/components/sortPage/sort-page";
import {QuickSortDescription} from "~/components/sortPage/sorting-descriptions";
import type {ArrayItem} from "~/components/lib/types";

const partition = async (array: ArrayItem[], startIdx: number, endIdx: number, setToBeSortedArray: (array: ArrayItem[]) => void, setActiveIndices: (indices: number[]) => void) => {
    let pivot = array[endIdx];
    let i = startIdx - 1;

    for(let j = startIdx; j <= endIdx - 1; j++) {
        setActiveIndices([i, j, endIdx]);
        setToBeSortedArray([...array]);
        await new Promise(r => setTimeout(r, 250));

        if(array[j].value < pivot.value) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    i++;
    let temp = array[i];
    array[i] = array[endIdx];
    array[endIdx] = temp;

    return i;
}

const quickSortAlgorithm = async (array: ArrayItem[], low: number, high: number, setToBeSortedArray: (array: ArrayItem[]) => void, setActiveIndices: (indices: number[]) => void) => {
    // Check if there is nothing to sort
    if (low >= high) {
        return array;
    }

    // Split the arrays and recursively sort them
    let pivotIndex = await partition(array, low, high, setToBeSortedArray, setActiveIndices);
    await quickSortAlgorithm(array, low, pivotIndex - 1, setToBeSortedArray, setActiveIndices);
    await quickSortAlgorithm(array, pivotIndex + 1, high, setToBeSortedArray, setActiveIndices);

    return array;
}

async function quickSort(toBeSortedArray: ArrayItem[], setToBeSortedArray: (array: ArrayItem[]) => void, setActiveIndices: (indices: number[]) => void) {
    const sorted = await quickSortAlgorithm([...toBeSortedArray], 0, toBeSortedArray.length - 1, setToBeSortedArray, setActiveIndices);
    setToBeSortedArray(sorted);
    setActiveIndices([]);
}

export default function QuickSortPage() {
    return <SortPage
        algorithm={quickSort}
        title="Quick Sort"
        description={<QuickSortDescription />}
    />
}