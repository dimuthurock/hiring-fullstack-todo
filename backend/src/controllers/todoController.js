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

//POST /api/todos
const createTodo = async (req, res) => {
    try {
        const { Title, Description, IsDone = false } = req.body;

        if (!Title || !Title.trim()) {
            return res.status(400).json({
                message: 'Title is required'
            });
        }

        const pool = await poolPromise;

        const result = await pool
            .request()
            .input('Title', 
                sql.NVarChar(200), 
                Title.trim())
            .input(
                'Description',
                sql.NVarChar(sql.MAX),
                Description?.trim() || null
            )
            .input('IsDone', 
                sql.Bit, 
                IsDone)
            .query(`
                INSERT INTO [dbo].[Todos]
                    ([Title], [Description], [IsDone])
                OUTPUT
                    INSERTED.Id,
                    INSERTED.Title,
                    INSERTED.Description,
                    INSERTED.IsDone,
                    INSERTED.CreatedAt
                VALUES
                    (@Title, @Description, @IsDone)
            `);

        res.status(201).json(result.recordset[0]);
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({
            message: 'Failed to create todo'
        });
    }
};

//PUT /api/todos/:id
const updateTodo = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({
                message: 'Invalid todo Id'
            });
        }

        const { Title, Description, IsDone = false } = req.body;

        if (!Title || !Title.trim()) {
            return res.status(400).json({
                message: 'Title is required'
            });
        }

        if (typeof IsDone !== 'boolean') {
            return res.status(400).json({
                message: 'Completed must be a boolean'
            });
        }

        const pool = await poolPromise;

        const result = await pool
            .request()
            .input('Id', 
                sql.Int, 
                id)
            .input('Title', 
                sql.NVarChar(200), 
                Title.trim())
            .input(
                'Description',
                sql.NVarChar(sql.MAX),
                Description?.trim() || null
            )
            .input('IsDone', 
                sql.Bit, 
                IsDone)
            .query(`
                UPDATE [dbo].[Todos]
                SET    
                    [Title] = @Title,
                    [Description] = @Description, 
                    [IsDone] = @IsDone,
                    [UpdatedAt] = GETUTCDATE()
                 OUTPUT
                    INSERTED.Id,
                    INSERTED.Title,
                    INSERTED.Description,
                    INSERTED.IsDone,
                    INSERTED.CreatedAt
                WHERE (Id = @Id)
            `);

        res.status(200).json(result.recordset[0]);
    } catch (error) {
        console.error('Error editing todo:', error);
        res.status(500).json({
            message: 'Failed to edit todo'
        });
    }
};

//PATCH /api/todos/:id/:isdone
const toggleTodo = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({
                message: 'Invalid todo Id'
            });
        }

        const { IsDone } = req.body;

        if (typeof IsDone !== 'boolean') {
            return res.status(400).json({
                message: 'Completed must be a boolean'
            });
        }

        const pool = await poolPromise;

        const result = await pool
            .request()
            .input('Id', 
                sql.Int, 
                id)
            .input('IsDone', 
                sql.Bit, 
                IsDone)
            .query(`
                UPDATE [dbo].[Todos]
                SET    
                    [IsDone] = @IsDone,
                    [UpdatedAt] = GETUTCDATE()
                 OUTPUT
                    INSERTED.Id,
                    INSERTED.Title,
                    INSERTED.Description,
                    INSERTED.IsDone,
                    INSERTED.CreatedAt
                WHERE (Id = @Id)
            `);

        if (result.recordset.length === 0) {
            return res.status(404).json({
                message: 'Todo not found'
            });
        }

        res.status(200).json(result.recordset[0]);
    } catch (error) {
        console.error('Error patching todo status:', error);
        res.status(500).json({
            message: 'Failed to patch todo status'
        });
    }
};

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
    createTodo,
    updateTodo,
    toggleTodo,
    deleteTodo
};