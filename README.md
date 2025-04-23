# StudyMate - Learning Platform

StudyMate is a full-stack application that allows users to share and access study materials. The platform includes user authentication, role-based access control, and a modern UI.

## Project Structure

The project consists of two main parts:

1. **Backend (Node.js + Express + MongoDB)**
   - Located in the `studymate-backend` directory
   - RESTful API with JWT authentication
   - MongoDB database with Mongoose ODM

2. **Frontend (React)**
   - Located in the `studymate` directory
   - Built with React and Vite
   - Uses React Router for navigation
   - Context API for state management

## Features

- User authentication (register, login, logout)
- Role-based access control (user, admin)
- Protected routes
- User profile management
- Study material upload and download
- Admin dashboard

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd studymate-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/studymate
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   JWT_COOKIE_EXPIRE=30
   ```

4. Start the server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd studymate
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variable:
   ```
   VITE_API_URL=http://localhost:5000/api/v1
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login a user
- `POST /api/v1/auth/admin/login` - Login an admin user
- `GET /api/v1/auth/me` - Get current user details
- `GET /api/v1/auth/logout` - Logout user

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cors
- dotenv

### Frontend
- React
- React Router
- Axios
- Context API
- Vite

## License

This project is licensed under the ISC License. 