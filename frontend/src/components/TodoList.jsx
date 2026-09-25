import TodoItem from './TodoItem';

function TodoList({ todos, onEdit, onCheckChange, onDelete }) {
    if (todos.length === 0) {
        return (
            <div className="empty-state">
                No todos found.
            </div>
        );
    }

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEdit={onEdit}
                    onCheckChange={onCheckChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TodoList;