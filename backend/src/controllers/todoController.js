const { sql, poolPromise } = require('../database/db');

//GET /api/todos
const getTodos = async (req, res) => {
    try{
        const pool = await poolPromise;

        const result = await pool.request().query(`SELECT [Id], 
            [Title],
            [Description],
            [IsDone],
            [CreatedAt],
            [UpdatedAt]
            FROM [dbo].[Todos]
            ORDER BY [CreatedAt] DESC`);

        res.status(200).json(result.recordset);
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
const deleteTodo = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({
                message: 'Invalid todo Id'
            });
        }

        const pool = await poolPromise;

        const result = await pool
            .request()
            .input('id', sql.Int, id)
            .query(`
                DELETE FROM [dbo].[todos]
                WHERE id = @id
            `);

        res.status(200).send();
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({
            message: 'Failed to delete todo'
        });
    }
};

module.exports = {
    getTodos,
    deleteTodo
};