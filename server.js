// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');


dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware

app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/recipes', recipeRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe Manager API');
});

// Error Handling Middleware (Optional for unhandled routes)
app.use((req, res) => {
  res.status(404).json({ message: 'Route Not Found' });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/api/recipes`));
