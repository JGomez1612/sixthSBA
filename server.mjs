// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';

// Setup
dotenv.config()
const app = express();
const PORT = 3000;

// DB Connection
connectDB();

// Middleware

// Routes

//Global Error Handling Middleware

// Server Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
});