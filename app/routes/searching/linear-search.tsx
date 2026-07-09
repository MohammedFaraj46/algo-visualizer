import SearchPage from "~/components/search-page/search-page";
import {LinearSearchDescription} from "~/components/search-page/search-descriptions";
import type {ArrayItem} from "~/components/lib/types";

async function linearSearch(item: ArrayItem, array: ArrayItem[], setActiveIndices: (indices: number[]) => void, setFoundIndex: (index: number) => void) {
    for(let i = 0; i < array.length; i++) {
        setActiveIndices([i]);
        await new Promise(r => setTimeout(r, 150));

        if(item.value == array[i].value) {
            setFoundIndex(i);
            return;
        }
    }
}

export default function LinearSearchPage() {
    return <SearchPage
        algorithm={linearSearch}
        title={"Linear Search"}
        description={<LinearSearchDescription />}
    />
}