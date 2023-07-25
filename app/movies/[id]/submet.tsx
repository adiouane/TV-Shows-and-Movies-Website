"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";


export default function Submet()
{
    const {pending} = useFormStatus();

    return(
        <div>
            <button type="submit" className="w-full rounded-md bg-yellow-400 text-black p-2 mt-2 hover:bg-yellow-500 transition duration-300 ease-in-out">
                {pending ? "Loading..." : "Submit"}
            </button>
        </div>
    )
}