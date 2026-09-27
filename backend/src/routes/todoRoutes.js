const express = require('express');
const router = express.Router();

const {
    getTodos,
    createTodo,
    updateTodo,
    toggleTodo,
    deleteTodo
} = require('../controllers/todoController');

//GET /api/todos
router.get('/', getTodos);

//POST /api/todos
router.post('/', createTodo);

//PUT /api/todos/:id
router.put('/:id', updateTodo);

//PATCH /api/todos/:id/:isdone
router.patch('/:id/done', toggleTodo);

//DELETE /api/todos/:id
router.delete('/:id', deleteTodo);

module.exports = router;