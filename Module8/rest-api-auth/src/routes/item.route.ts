//Rest Principle Comes 

import { Router } from "express";

import { getItems, getItemById, createItem, updateItem,deleteItem } from "../controllers/item.controller";
import { validate  } from "../middelware/validate.middleware";
import { CreateItemSchema, UpdateItemSchema } from "../schema/item.schema";

const router = Router();

router.get("/", getItems);                                                //List of Items
router.get("/:id", getItemById);                                          //Get Item by Id
router.post("/", validate(CreateItemSchema), createItem);                 //Create Item
router.put("/:id", validate(UpdateItemSchema), updateItem);               //Update Item
router.delete("/:id", deleteItem);                                        //Delete Item


export default router
