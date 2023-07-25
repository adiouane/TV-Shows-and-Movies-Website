"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";


export default function Submet()
{
    const {pending} = useFormStatus();

    return(
        <div>
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {pending ? "Loading..." : "Send Message"}
          </button>
        </div>
    )
}