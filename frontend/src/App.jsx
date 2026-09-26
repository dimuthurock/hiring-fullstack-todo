import { useEffect, useState } from 'react';

import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

import {
    getTodos,
    createTodo,
    deleteTodo
} from './services/todoService';

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  async function loadTodos() {
      try {
          setLoading(true);
          setError('');

          const data = await getTodos();

          setTodos(data);
      } catch (err) {
          setError('Unable to load todos.');
      } finally {
          setLoading(false);
      }
  }

 async function handleSave(todoData) {
    try {
        setError('');

        const newTodo = await createTodo({
            ...todoData,
            IsDone: false
        });

        //await loadTodos();
        setTodos(current => [newTodo, ...current]);

    } catch (err) {
        setError('Unable to save the todo.');
    }
}

    //TODO
  function handleEdit(todo) {
      
  }

  function handleCancelEdit() {
     setEditingTodo(null);

  }

  //TODO
  async function handleCheckChange(todo) {
      
  }

  async function handleDelete(id) {
    const status = window.confirm(
        'Are you sure you want to delete this todo?'
    );

    if (!status) {
        return;
    }

    try {
        setError('');

        await deleteTodo(id);

        setTodos(current =>
            current.filter(todo => todo.Id !== id)
        );
    } catch (err) {
        setError('Unable to delete the todo.');
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
        <div className="app">
            <div className="container">
                <h1>Todo Manager</h1>

                <TodoCreate
                    todo={editingTodo}
                    onSave={handleSave}
                    onCancel={handleCancelEdit}
                />

                {error && (
                    <div className="error">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="loading">
                        Loading todos...
                    </div>
                ) : (
                    <TodoList
                        todos={todos}
                        onEdit={handleEdit}
                        onCheckChange={handleCheckChange}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </div>
    );
}

export default App
