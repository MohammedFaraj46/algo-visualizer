import SortPage from "~/components/sort-page";
import {MergeSortDescription} from "~/components/sorting-descriptions";

type SortItem = { id: number, value: number };

const merge = () => {

}

async function mergeSort(toBeSortedArray: SortItem[], setToBeSortedArray: (arr: SortItem[]) => void, setActiveIndices: (indices: number[]) => void) {
    let sorted = [...toBeSortedArray];
    let size = sorted.length;

    if (size < 2) return;

    const middleIndex = Math.floor(size / 2);
    const leftArray = sorted.slice(0, middleIndex);
    const rightArray = sorted.slice(middleIndex);


}

export default function SelectionSortPage() {
    return <SortPage
        algorithm={mergeSort}
        title="Merge Sort"
        description={<MergeSortDescription />}
    />
}