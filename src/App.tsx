
import './App.css'
import AddTodo from "./components/todos/addTodo";
import { useState } from "react";
import type { Todo } from './models/todo';
import TodoItem from './components/todos/todoItem';






function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (todo: Todo): void => {
        setTodos((todos) => [...todos, todo])
        console.log(todos)
    }
    const removeTodo = (id: number): void => {
        setTodos(
            todos.filter((todo: Todo) => todo.id != id)
        )
    }
    const editTodo = (id: number, value: string): void => {
        setTodos(
            todos.map((todo: Todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        title: value
                    }
                }
                return todo
            })

        )
    }
    const toggleTodo = (id: number): void => {
         setTodos(
            todos.map((todo: Todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        is_done: ! todo.is_done
                    }
                }
                return todo
            })

        )
     }
    const total: number = todos.length

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full md:w-3/8 rounded-4xl border border-gray-100 bg-white p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                <section>
                    <header>
                        <h1 className="text-3xl mt-2 font-thin tracking-[6px] text-slate-700">
                            SILVER <span className="font-bold text-gray-400">OCEAN</span>
                        </h1>

                        <p className="pt-2 text-[12px] tracking-[4px] text-gray-400">
                            Pure Productivity
                        </p>
                    </header>
                </section>

                <section>
                    <AddTodo add={addTodo} />
                </section>

                <section className="mt-10">
                    {
                        todos?.map((todo: Todo) => (
                            <TodoItem key={todo.id} todo={todo} remove={removeTodo} edit={editTodo} toggleTodo={toggleTodo}/>
                        ))
                    }


                </section>

                <section>
                    <footer>
                        <h3 className="mt-12 text-gray-400 text-[13px]">
                            {total} Tasks Remaining
                        </h3>
                    </footer>
                </section>

            </div>
        </div >

    )
}

export default App
