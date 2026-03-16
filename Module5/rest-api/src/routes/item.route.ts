//Rest Principle Comes 

import { Router } from "express";

import { getItems, getItemById, createItem, updateItem,deleteItem } from "../controllers/item.controller";

const router = Router();

router.get("/", getItems);           //List of Items
router.get("/:id", getItemById);     //Get Item by Id
router.post("/", createItem);        //Create Item
router.put("/:id", updateItem);         //Update Item
router.delete("/:id", deleteItem);   //Delete Item


export default router
