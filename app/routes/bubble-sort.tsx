import SortPage from "~/components/sort-page";
import {BubbleSortDescription} from "~/components/sorting-descriptions";

type SortItem = { id: number, value: number };

async function bubbleSort(toBeSortedArray: SortItem[], setToBeSortedArray: (arr: SortItem[]) => void, setActiveIndices: (indices: number[]) => void) {
    return;
}

export default function SelectionSortPage() {
    return <SortPage
        algorithm={bubbleSort}
        title="Bubble Sort"
        description={<BubbleSortDescription />}
    />
}