import express from "express";

import userRoutes from "./routes/user.routes";
import { logger } from "./middleware/logger";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(logger);         //This will log ur request 

// Routes
app.use("/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
