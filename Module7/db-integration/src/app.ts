import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
// CRUD

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
