import { Plus } from "lucide-react"

import { useState, type SetStateAction } from "react";
import type { Todo } from "../../models/todo";

interface props {
    add: (todo: Todo) => void
}

const AddTodo: React.FC<props> = ({ add }) => {

    const [input, setInput] = useState<string>("")

    const submitHandler: React.SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (input) {
            add({
                id: Date.now(),
                title: input,
                is_done: false
            })
        }

        setInput("")
        console.log("added")
    }
    return (
        <form className="mt-4" onSubmit={submitHandler}>
            <div className="relative">
                <input
                    className="w-full rounded-[18px] border border-slate-100 bg-white px-4 py-4 pr-16 text-slate-600 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-200/60"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What is your next goal?"
                />
                <button
                    type="submit"
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-gray-800 text-white transition hover:bg-gray-700 active:scale-95"
                >
                    <Plus size={19} />
                </button>
            </div>
        </form>
    )
}


export default AddTodo;