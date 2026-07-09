import SearchPage from "~/components/search-page/search-page";
import type {ArrayItem} from "~/components/lib/types";
import {BinarySearchDescription} from "~/components/search-page/search-descriptions";

async function binarySearch(item: ArrayItem, array: ArrayItem[], setActiveIndices: (indices: number[]) => void, setFoundIndex: (index: number) => void) {
    let low: number = 0;
    let high: number = array.length - 1;
    let mid: number;

    while (high >= low) {
        await new Promise(r => setTimeout(r, 1000));

        mid = low + Math.floor((high - low) / 2);

        setActiveIndices([low, mid, high]);

        if (array[mid].value == item.value) {
            setActiveIndices([]);
            setFoundIndex(array[mid].id);
            return;
        }

        if (array[mid].value > item.value) {
            high = mid - 1;
        }

        else {
            low = mid + 1;
        }
    }

    setActiveIndices([]);
}

export default function BinarySearchPage() {
    return <SearchPage
        algorithm={binarySearch}
        title={"Binary Search"}
        description={<BinarySearchDescription />}
    />
}