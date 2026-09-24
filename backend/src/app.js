const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.use('/api/todos', todoRoutes);

module.exports = app;