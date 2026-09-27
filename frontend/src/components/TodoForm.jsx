import { useEffect, useState } from 'react';

function TodoForm({ todo, onSave, onCancel }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (todo) {
            setTitle(todo.Title);
            setDescription(todo.Description || '');
        } else {
            setTitle('');
            setDescription('');
        }
    }, [todo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        onSave({
            Title: title.trim(),
            Description: description.trim()
        });

        if (!todo) {
            setTitle('');
            setDescription('');
        }
    };

    const handleCancel = () => {
        setTitle('');
        setDescription('');

        onCancel();
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title (required)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={200}
            />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={1000}
            />

            <div className='todo-form-actions'>
                <button 
                    type="submit"
                    className='update-button'>
                    {todo ? 'Update' : 'Add'}
                </button>

                {todo && (
                    <button
                        type="button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}

export default TodoForm;