import SortPage from "~/components/sort-page/sort-page";
import {BubbleSortDescription} from "~/components/sort-page/sorting-descriptions";
import type {ArrayItem} from "~/components/lib/types";

async function bubbleSort(toBeSortedArray: ArrayItem[], setToBeSortedArray: (arr: ArrayItem[]) => void, setActiveIndices: (indices: number[]) => void) {
    let sorted = [...toBeSortedArray];
    let size = sorted.length;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - 1; j++) {
            setActiveIndices([j, j + 1]);
            await new Promise(r => setTimeout(r, 225));

            if (sorted[j].value > sorted[j + 1].value) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;

                setToBeSortedArray([...sorted]);
            }
        }
    }

    setActiveIndices([]);
}

export default function BubbleSortPage() {
    return <SortPage
        algorithm={bubbleSort}
        title="Bubble Sort"
        description={<BubbleSortDescription />}
    />
}