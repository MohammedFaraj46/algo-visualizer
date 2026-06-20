import {motion} from "motion/react";
import {Fragment, type ReactNode, useEffect, useState} from "react";
import type {SetArray, SetIndices, ArrayItem} from "~/components/lib/types";

interface Props {
    algorithm: (toBeSortedArray: ArrayItem[], setToBeSortedArray: SetArray, setIndices: SetIndices) => Promise<void>;
    title: string;
    description: ReactNode; // I was not sure if I should use ReactNode or Fragment
}

export default function SortPage({ algorithm, title, description }: Props) {
    const [tbsArray, setTbsArray] = useState<ArrayItem[]>([]);
    const [activeIndices, setActiveIndices] = useState<number[]>([]);

    useEffect(() => {
        setTbsArray(generateRandomArray());
    }, []);

    function generateRandomArray(): ArrayItem[] {
        return Array.from({ length: 10 }, (_, i) => ({
            id: i,
            value: Math.floor(Math.random() * 100)
        }));
    }

    return <>
        <h1 className="text-3xl font-bold">{title}</h1>
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

        <button className="border mt-10 mr-5" onClick={() => algorithm(tbsArray, setTbsArray, setActiveIndices)}>
            Sort Array
        </button>
        <button className="border" onClick={() => setTbsArray(generateRandomArray())}>
            Randomize Array
        </button>

        {description}
    </>
}