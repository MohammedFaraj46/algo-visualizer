import SortPage from "~/components/sort-page";
import {SelectionSortDescription} from "~/components/sorting-descriptions";

type SortItem = { id: number, value: number };

async function selectionSort(toBeSortedArray: SortItem[], setToBeSortedArray: (arr: SortItem[]) => void, setActiveIndices: (indices: number[]) => void) {
    let sorted = [...toBeSortedArray];
    let size = sorted.length;

    for (let i = 0; i < size - 1; i++) {
        let min_idx = i;

        for (let j = i + 1; j < size; j++) {
            setActiveIndices([i, min_idx, j]);
            await new Promise(r => setTimeout(r, 150));

            if (sorted[j].value < sorted[min_idx].value) {
                min_idx = j;
            }
        }

        let temp = sorted[i];
        sorted[i] = sorted[min_idx];
        sorted[min_idx] = temp;

        setToBeSortedArray([...sorted]);
        setActiveIndices([]);
    }
}

export default function SelectionSortPage() {
    return <SortPage
        algorithm={selectionSort}
        title="Selection Sort"
        description={<SelectionSortDescription />}
    />
}