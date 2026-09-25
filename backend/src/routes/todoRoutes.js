const express = require('express');
const router = express.Router();

const {
    getTodos
} = require('../controllers/todoController');

//GET /api/todos
router.get('/', getTodos);
//TODO
//GET /api/todos/:id
//POST /api/todos
//PUT /api/todos/:id
//DELETE /api/todos/:id

module.exports = router;