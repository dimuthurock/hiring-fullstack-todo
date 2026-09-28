USE Master;
GO

IF DB_ID('Todo') IS NULL
BEGIN
    CREATE DATABASE Todo;
END
ELSE
BEGIN
    PRINT '''Todo'' database has already created.';
END
GO

USE Todo;
GO

IF OBJECT_ID('dbo.Todos', 'U') IS NULL
BEGIN
    CREATE TABLE Todos
    (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        Title NVARCHAR(200) NOT NULL,
        Description NVARCHAR(1000) NULL,
        IsDone BIT NOT NULL DEFAULT 0,
        CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
        UpdatedAt DATETIME2 NULL
    );
END
ELSE
BEGIN
    PRINT '''Todos'' table has already created.';
END
GO