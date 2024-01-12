export default function Todo({ todo, isCompleted }) {

    return (
        <div className="Todo flex">
            <h2 onClick={() => isCompleted(todo.id)} className={`${todo.completed ? "text-green-400 line-through font-bold text-xl ml-1 cursor-pointer" : "text-white font-bold text-xl ml-1 cursor-pointer"}`}>
                {todo.title}
            </h2>
            <button onClick={(e) => {
                e.target.parentElement.remove();
            }} className="btn-danger ml-1">❌</button>
        </div>
    );
}