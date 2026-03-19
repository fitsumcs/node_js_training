//Rest Principle Comes 

import { Router } from "express";

import { getItems, getItemById, createItem, updateItem,deleteItem } from "../controllers/item.controller";
import { validate  } from "../middelware/validate.middleware";
import { CreateItemSchema, UpdateItemSchema } from "../schema/item.schema";

const router = Router();

/**
 * @openapi
 * /items:
 *   get:
 *     summary: Get all items
 *     description: Returns a list of all items
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               - id: "101"
 *                 name: "Laptop"
 *                 isInStore: true
 *                 amountInStore: 7
 *               - id: "102"
 *                 name: "Mouse"
 *                 isInStore: true
 *                 amountInStore: 30
 */
router.get("/", getItems);   

router.get("/:id", getItemById);                                          
router.post("/", validate(CreateItemSchema), createItem);                 
router.put("/:id", validate(UpdateItemSchema), updateItem);               
router.delete("/:id", deleteItem);                                        


export default router
