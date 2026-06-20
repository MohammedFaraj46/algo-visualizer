import {Fragment, type ReactNode, useState} from "react";
import type {ArrayItem, SetIndices} from "~/components/lib/types";
import {motion} from "motion/react";

interface Props {
    algorithm: (toBeFoundItem: ArrayItem, array: ArrayItem[], setIndices: SetIndices, setFoundIndex: (index: number) => void) => Promise<void>;
    title: string;
    description: ReactNode;
}

export default function SearchPage({ algorithm, title, description }: Props) {
    const array: ArrayItem[] = Array.from({ length: 20 }, (unused, i) => ({
        id: i,
        value: i + 1
    }));
    const [activeIndices, setActiveIndices] = useState<number[]>([]);
    const [target, setTarget] = useState<number | null>(null);
    const [foundIndex, setFoundIndex] = useState<number | null>();
    const [error, setError] = useState<string | null>(null);

    function handleSearch() {
        // Reset the states to remove highlights from previous searches
        setError(null);
        setActiveIndices([]);
        setFoundIndex(null);

        if(target == null) {
            setError("Please enter a number");
            return;
        }

        if(target < 1 || target > 20) {
            setError("Number must be between 1 and 20");
            return;
        }

        setError(null);

        algorithm({id: target - 1, value: target}, array, setActiveIndices, setFoundIndex).then();
    }

    return <>
        <h1 className="text-3xl font-bold">{title}</h1>
        <ul className="flex items-center gap-0 pt-5">
            {array.map((item, index) => (
                <Fragment key={item.id}>
                    <motion.li
                        layout
                        className={`w-12 h-12 border border-[#222222] list-none flex items-center justify-center text-sm font-mono
                            ${index === foundIndex ? 'bg-green-300 text-black'
                            : activeIndices.includes(index) ? 'bg-yellow-300 text-black'
                                : 'bg-white text-black'}`}
                    >
                        {item.value}
                    </motion.li>
                </Fragment>
            ))}
        </ul>

        <label className="block w-full mb-1 mt-10 font-bold">Target number</label>
        <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={target ?? ""}
            onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // strip non-digits
                setTarget(value === "" ? null : Number(value));
            }}
            className="border border-[#222222] bg-white text-black px-3 py-2 mr-7 rounded-md text-sm font-mono w-40 focus:outline-none"
        />
        <button
            className="border"
            onClick={handleSearch}>
                Search
        </button>

        {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        {description}
    </>
}