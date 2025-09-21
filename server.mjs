// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import globalErr from './middleware/globalErr.mjs';
import log from './middleware/loggingMiddleware.mjs';

// Setup
dotenv.config()
const app = express();
const PORT = 3000;

// DB Connection
connectDB();

// Middleware
app.use(express.json())

// Routes

//Global Error Handling Middleware
app.use(globalErr);
app.use(log);

// Server Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
});