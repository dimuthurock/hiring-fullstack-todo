# TODO App

A basic full-stack TODO application for the Type B Digital Talent Pool technical assessment.


## Project Structure
- `frontend/` - React frontend
- `backend/` - Node.js/Express REST API


## Technology Stack

### Frontend
- React
- JavaScript
- Vite
- CSS


### Backend
- Node.js
- Express.js


### Database
- SQL Server


## Application Features
- View TODOs
- Create a TODOs
- Edit a TODOs
- Mark TODOs as done/undone
- Delete a TODOs


## Running the Application
See the individual README files:
- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)


## Architecture
The application consists of a React frontend communicating with a
Node.js/Express REST API.

The backend persists TODO data in SQL Server.


## API

The backend expose api endpoints:
- GET    -> `/api/todos`
- POST   -> `/api/todos`
- PUT    -> `/api/todos/:id`
- PATCH  -> `/api/todos/:id/done`
- DELETE -> `/api/todos/:id`


## Assessment Notes
- This project has been developed as per the requirements mentioned in the given technical assessment.
- The implementation deliberately keeps the architecture simple and focused on the needed functionality.
