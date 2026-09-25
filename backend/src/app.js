const express = require('express');
const cors = require('cors');
require('dotenv').config();
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.use('/api/todos', todoRoutes);

module.exports = app;