import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, { id: crypto.randomUUID(), title: todo, completed: false }]);
    }

    const isCompleted = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    return (
        <div className="todo-wrapper">
            <TodoForm addTodo={addTodo} />
            <h1 className=" text-white font-bold text-[2.2rem] mb-2">Items</h1>
            {todos.map((todo, index) => {
                return <Todo todo={todo} key={index} isCompleted={isCompleted} />
            })}
        </div>
    )
}
