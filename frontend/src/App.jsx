import { useEffect, useState } from 'react';

import TodoList from './components/TodoList';

import {
    getTodos
} from './services/todoService';

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  //TODO
  async function handleSave(todoData) {
  }

  //TODO
  async function handleCheckChange(todo) {
      
  }

  //TODO
  async function handleDelete(id) {
      
  }

  //TODO
  function handleEdit(todo) {
      
  }

  //TODO
  function handleCancelEdit() {
     
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
        <div className="app">
            <div className="container">
                <h1>Todo Manager</h1>

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
