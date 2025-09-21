// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import globalErr from './middleware/globalErr.mjs';
import log from './middleware/loggingMiddleware.mjs';
import userRoutes from './routes/userRoutes.mjs';
import gameRoutes from './routes/gameRoutes.mjs'

// Setup
dotenv.config()
const app = express();
const PORT = 3000;

// DB Connection
connectDB();

// Middleware
app.use(express.json())

// Routes
app.use('/api/user', userRoutes);
app.use('/api/game', gameRoutes);


//Global Error Handling Middleware
app.use(globalErr);
app.use(log);

// Server Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
});