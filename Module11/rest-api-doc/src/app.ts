import express from "express";

import itemRoutes from "./routes/item.route"

import swaggerUi from "swagger-ui-express";
import swaggerJSDocSpec from "./config/swagger-jsdoc";
import swaggerYamlSpec from "./config/swagger-yaml";



const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/items", itemRoutes);

//yml version
app.use("/api-docs/yaml",swaggerUi.serveFiles(swaggerYamlSpec),swaggerUi.setup(swaggerYamlSpec));
//swager 
app.use("/api-docs", swaggerUi.serveFiles(swaggerJSDocSpec),  swaggerUi.setup(swaggerJSDocSpec));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger running at http://localhost:${PORT}/api-docs`);
  console.log(`Swagger running at http://localhost:${PORT}/api-docs/yaml`);

});
