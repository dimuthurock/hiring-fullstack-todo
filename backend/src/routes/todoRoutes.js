const express = require('express');
const router = express.Router();

const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

//GET /api/todos
router.get('/', getTodos);

//TODO
//GET /api/todos/:id

//POST /api/todos
router.post('/', createTodo);

//PUT /api/todos/:id
router.put('/:id', updateTodo);

//DELETE /api/todos/:id
router.delete('/:id', deleteTodo);

module.exports = router;