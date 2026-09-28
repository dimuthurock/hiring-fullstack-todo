# TODO App - Frontend

## Overview
React frontend for the TODO application.

The application allows users to:
- View TODO items
- Create a TODO
- Edit a TODO
- Mark a TODO as done/undone
- Delete a TODO


## Technology Stack
- React
- JavaScript
- Vite
- CSS


## Prerequisites
- Node.js
- npm
- Running backend API


## Setup
1. Clone the repository: git clone <repository-url>
2. Navigate to the frontend: cd frontend
3. Install dependencies: npm install


## Configuration
- Create a `.env` file: 
VITE_API_URL=http://localhost:5000/api

(IMPORTANT: Update the URL if the backend is running on a different port.)


## Run the Application
npm run dev

The application will be available at: http://localhost:5173


## Features

### View TODOs
- Displays all TODO items retrieved from the backend.

### Create a TODO
- Allows user to create a TODO item with a required title and optional description.

### Edit a TODO
- Allows user to update an existing TODO item.

### Toggle as Done / Undone
- Allows user to mark a TODO item as completed or incomplete.

### Delete a TODO
- Allows user to remove a TODO item.


## Error Handling
The application displays appropriate messages when API requests fail.


## Assumptions and Limitations

- The application does not support user identification.
- Uses one TODO list for evaluation.
- TODO operations require the backend API to be running.
- The frontend expects the configured API URL to be reachable.
