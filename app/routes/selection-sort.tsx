import {motion} from "motion/react";
import {Fragment, useEffect, useState} from "react";

export default function SelectionSortPage() {
    // Tbs meaning "To be sorted"
    const [tbsArray, setTbsArray] = useState<{ id: number, value: number }[]>([]);
    const [activeIndices, setActiveIndices] = useState<number[]>([]);

    useEffect(() => {
        setTbsArray(generateRandomArray());
    }, []);

    return <>
        <h1 className="text-3xl font-bold">Selection Sort</h1>
        <ul className="flex items-center gap-0 pt-5">
            {tbsArray.map((item, index) => (
                <Fragment key={item.id}>
                    <motion.li
                        layout
                        className={`w-12 h-12 border border-[#222222] list-none flex items-center justify-center text-sm font-mono
                            ${activeIndices.includes(index) ? 'bg-green-300 text-black' : 'bg-white text-black'}`}
                    >
                        {item.value}
                    </motion.li>
                </Fragment>
            ))}
        </ul>

        <button
            className="border mt-10 mr-5"
            onClick={() => selectionSort(tbsArray)}>Sort Array
        </button>

        <button
            className="border"
            onClick={() => setTbsArray(generateRandomArray())}>Randomize Array
        </button>

        <p className="p-8 w-175">
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
    </>

    async function selectionSort(arr: { id: number, value: number }[]) {
        let sorted = [...arr];
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

            setTbsArray([...sorted]);
            setActiveIndices([]);
        }
    }

    function generateRandomArray() {
        return Array.from({length: 10}, (_, i) => ({
            id: i,
            value: Math.floor(Math.random() * 100)
        }));
    }
}