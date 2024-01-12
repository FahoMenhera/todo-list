import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo === ""){
            return;
        }
        addTodo(todo);
        setTodo("");
    }

    return (
        <div className="todo-form">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col mb-4"
            >
                <div className="flex flex-col">
                    <label htmlFor="item" className="text-white text-[2.6rem] font-bold mb-4 text-center">
                        Todo List
                    </label>
                    <input
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        type="text"
                        id="item"
                        className="mb-6 h-10 rounded-md shadow-input focus:outline-none px-1"
                    />
                </div>
                <div className="mb-14 h-2">
                    <button className="w-full text-xl h-10 bg-red-500 shadow-add-btn rounded-md font-bold text-white active:shadow-none active:mt-1">
                    Add
                    </button>
                </div>
            </form>
        </div>
    );
}