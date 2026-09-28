# TODO App - Backend

## Overview

REST API for the TODO application.

The backend provides endpoints for creating, retrieving, updating,
completing and deleting TODO items.


## Technology Stack
- Node.js
- Express.js
- JavaScript
- SQL Server
- mssql
- dotenv


## Prerequisites
- Node.js
- npm
- SQL Server


## Setup
1. Navigate to the backend: cd backend
2. Install dependencies: npm install


## Database Setup
1. Create a SQL Server database named: Todo
2. Run the SQL script: src/database/schema.sql
   (This creates the required `Todos` table.)


## Configuration
Create a `.env` file:

PORT=5000

DB_SERVER=localhost
DB_PORT=1433
DB_DATABASE=Todo
DB_USER=your_username
DB_PASSWORD=your_password

(IMPORTANT: Update the values according to your local SQL Server configuration.)


## Run the Backend
npm run dev

The API will be available at: http://localhost:5000


## API Endpoints

-----------------------------------------------------
| Method | Endpoint            | Description        |
|--------|---------------------|--------------------|
| GET    | /api/todos          | Get all TODOs      |
| POST   | /api/todos          | Create a TODO      |
| PUT    | /api/todos/:id      | Update a TODO      |
| PATCH  | /api/todos/:id/done | Toggle done status |
| DELETE | /api/todos/:id      | Delete a TODO      |
-----------------------------------------------------


## Database
SQL Server is used instead of MongoDB.


## Error Handling
The API checks the required input and returns proper HTTP status 
codes and error messages.


## Assumptions and Limitations
- There is no authentication or user management.
- Local development requires MS SQL Server.
- Database migrations are not implemented, the database table is created with the supplied SQL script.