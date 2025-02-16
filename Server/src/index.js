import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { swaggerSpec, swaggerUi } from "./config/swagger.js";
import userRoutes from "./routes/v1/userRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

const SERVER_URL = `http://localhost:${PORT}`;

app.use(express.json());

// Routes
app.use("/v1/users", userRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server running at ${SERVER_URL}`);
});
