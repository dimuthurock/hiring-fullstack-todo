function TodoItem({ todo, onEdit, onCheckChange, onDelete }) {
    return (
        <div className={`todo-item ${todo.IsDone ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.IsDone}
                onChange={() => onCheckChange(todo)}
            />

            <div className="todo-content">
                <div className="todo-title">
                    {todo.Title}
                </div>

                {todo.Description && (
                    <div className="todo-description">
                        {todo.Description}
                    </div>
                )}
            </div>

            <div className="todo-actions">
                <button onClick={() => onEdit(todo)}>
                    Edit
                </button>

                <button
                    className="delete-button"
                    onClick={() => onDelete(todo.Id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;