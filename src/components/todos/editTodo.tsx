import React, { useState, type Dispatch, type SetStateAction } from 'react'
import { Circle, CheckCircle2, Trash2, Pencil ,Check } from "lucide-react";
import type { Todo } from '../../models/todo';

interface Props {
    todo: Todo,
    remove: (id: number) => void,
    edit : (id:number , value:string) => void;
    status : Dispatch<SetStateAction<boolean>>
}

const EditTodo: React.FC<Props> = ({ remove, todo , edit , status}) => {

    const [input, setInput] = useState<string>(todo.title)

    const editHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const submitHandler:React.SubmitEventHandler<HTMLFormElement> =(e )=>{
        e.preventDefault()
        
        if (input != ""){
            edit(todo.id , input)
            setInput("")
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="w-full mt-2 flex justify-between items-center  rounded-[18px]  h-15 bg-white px-4 py-4  text-slate-600 outline-none transition hover:border-slate-200 border border-slate-100 ">
                <div className=" items-center flex">
                    <Circle /> <input onChange={editHandler} value={input} className='pl-3 ml-3 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400' />
                </div>
                <div className="items-center flex justify-items-start">
                    <button type="button" className="text-slate-400 hover:text-red-500 transition cursor-pointer px-3" onClick={() => remove(todo.id)}>
                        <Trash2 size={17} />
                    </button>
                    <button type="submit" className="text-green-400  transition cursor-pointer px-3" onClick={()=> status(false)}>
                        <Check size={17} />
                    </button>
                </div>
            </div>
        </form>
    )
}


export default EditTodo;