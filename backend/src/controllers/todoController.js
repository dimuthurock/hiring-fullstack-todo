const { sql, poolPromise } = require('../db');

//GET /api/todos
const getTodos = async (req, res) => {
    try{
        const pool = await poolPromise;

        const result = await pool.request().sql(`SELECT [Id], 
            [Title],
            [Description],
            [IsDone],
            [CreatedAt],
            [UpdatedAt],
            FROM [dbo].[Todos]
            ORDER BY [CreatedAt] DESC`);

        res.status(200).json(result.result);
    }
    catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({
            message: 'Failed to fetch todos'
        });
    }
};

//TODO
//GET /api/todos/:id
//POST /api/todos
//PUT /api/todos/:id
//DELETE /api/todos/:id