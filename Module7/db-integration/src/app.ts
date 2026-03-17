import "dotenv/config";
const express = require("express");
import { Request, Response, NextFunction } from 'express';
import { errorHandler } from './middleware/error.middleware';

const { PrismaClient } = require("@prisma/client");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");

// PostgreSQL connection
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Add it to your .env file.");
}
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool, { schema: "users" });
const prisma = new PrismaClient({ adapter });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // middleware to parse JSON

// Health check
app.get("/", (req:Request, res:Response, next:NextFunction) => res.json({ message: "alive" }));

// Get all users
app.get("/users", async (req:Request, res:Response, next:NextFunction) => {
  try {
    const users = await prisma.user.findMany({ include: { posts: true } });
    res.json(users);
  } catch (e) {
    next(e);
  }
});

// Get user by ID
app.get("/users/:id", async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const user = await prisma.user.findUnique({ where: { id }, include: { posts: true } });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (e) {
    next(e);
  }
});

// Create user
app.post("/users", async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ message: "name and email required" });

    const user = await prisma.user.create({ data: { name, email } });
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

// Update user
app.put("/users/:id", async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    const data = {};
    if (name !== undefined) data.name = name;
    if (email !== undefined) data.email = email;

    if (Object.keys(data).length === 0) return res.status(400).json({ message: "No valid fields to update" });

    const user = await prisma.user.update({ where: { id }, data });
    res.json(user);
  } catch (e) {
    next(e);
  }
});

// Delete user (and posts)
app.delete("/users/:id", async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = Number(req.params.id);
    // Delete posts first to maintain FK constraint
    await prisma.post.deleteMany({ where: { authorId: id } });
    await prisma.user.delete({ where: { id } });
    res.json({ message: "User deleted" });
  } catch (e) {
    next(e);
  }
});

// Error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
