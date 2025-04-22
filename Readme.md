# 📝 MERN Stack Task Management App

A simple Task Management Application built using the **MERN** (MongoDB, Express.js, React, Node.js) stack. This app allows users to create, read, update, and delete (CRUD) tasks with a clean UI and responsive functionality.

---

## 🚀 Features

- Create, view, edit, and delete tasks.
- Tasks include: title, description, and status (`pending` or `completed` or 'Progress').
- Built using modern stack: **React + Vite + Tailwind CSS** (frontend), **Node.js + Express + MongoDB** (backend).
- Loading indicators and toast notifications for API interactions.
- Organized codebase with modular structure and validation.

---

📦 Backend Setup (/server)
Navigate to the server directory:
    cd api

Install dependencies:
    npm install

Create a .env file:
    PORT=3000
    MONGO_URI=your_mongodb_connection_string

Start the server:
    npm run dev
    The backend will run on http://localhost:3000

💻 Frontend Setup (/client)
Navigate to the client directory:
    cd client

Install dependencies:
    npm install

Create a .env file:
    VITE_API_BASE_URL="http://localhost:3000/api"

Start the frontend:
    npm run dev

The frontend will run on http://localhost:5173.
