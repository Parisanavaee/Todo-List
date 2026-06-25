import type React from "react";
import { Circle, CheckCircle2, Trash2, Pencil } from "lucide-react";
import type { Todo } from "../../models/todo";
import { useState } from "react";
import EditTodo from "./editTodo";


interface Props {
    todo: Todo,
    remove: (id: number) => void,
    edit: (id: number, value: string) => void,
    toggleTodo : (id: number) => void
}

const TodoItem: React.FC<Props> = ({ todo, remove, edit, toggleTodo }) => {

    const [editStatus, setEditStatus] = useState<boolean>(false)


    return (
        <>
            {
                !editStatus ?
                    <div className="w-full mt-2 flex justify-between items-center  rounded-[18px]  h-15 bg-white px-4 py-4  text-slate-600 outline-none transition hover:border-slate-200 border border-slate-100 ">
                        <div className=" items-center flex">
                            {todo.is_done   ? <CheckCircle2 className="text-green-400" onClickCapture={() => toggleTodo(todo.id)}/> : <Circle onClickCapture={() => toggleTodo(todo.id)} />}  <p className='pl-3 text-gray-700'>{todo.title}</p>
                        </div>
                        <div className="items-center flex justify-items-start">
                            <button type="button" className="text-slate-400 hover:text-red-500 transition cursor-pointer px-3" onClick={() => remove(todo.id)}>

                                <Trash2 size={17} />

                            </button>
                            <button type="button" className="text-slate-400 hover:text-green-300 transition cursor-pointer px-3" onClick={() => setEditStatus(true)}>
                                <Pencil size={17} />
                            </button>
                        </div>
                    </div>
                    :
                    <EditTodo remove={remove} todo={todo} edit={edit} status={setEditStatus} />
            }
        </>
    )
}

export default TodoItem;