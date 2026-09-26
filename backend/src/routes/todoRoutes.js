const express = require('express');
const router = express.Router();

const {
    getTodos,
    createTodo,
    deleteTodo
} = require('../controllers/todoController');

//GET /api/todos
router.get('/', getTodos);

//TODO
//GET /api/todos/:id

//POST /api/todos
router.post('/', createTodo);

//TODO
//PUT /api/todos/:id

//DELETE /api/todos/:id
router.delete('/:id', deleteTodo);

module.exports = router;