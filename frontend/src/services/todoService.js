const API_URL = 'http://localhost:5000/api/todos';

export async function getTodos() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }

    return response.json();
}

export async function deleteTodo(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Failed to delete the todo');
    }
}