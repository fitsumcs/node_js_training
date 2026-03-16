import { Request, Response } from "express";

import { getItemsService, getItemByIdService, createItemService, updateItemService, deleteItemService  } from "../services/item.service";


export const getItems = (req: Request, res: Response) => {

  const response = getItemsService();

  res.json(response);

};

export const getItemById = (req: Request, res: Response) => {

  const { id } = req.params;
  // {k : v} {id : id} => {id}
  //Validation
  const response = getItemByIdService(id);

  res.json(response);

};

export const createItem = (req: Request, res: Response) => {
  const user = req.body;
  
  //Validation 
  // console.log("This is The body ");
  // console.log(user);

   const response = createItemService(user);

  res.status(201).json(response);
};

export const updateItem = (req: Request, res: Response) => {
  const user = req.body;
  
  //Validation 
  // console.log("This is The body ");
  // console.log(user);

   const response = updateItemService(user);

  res.status(201).json(response);
};

export const deleteItem = (req: Request, res: Response) => {
  const user = req.body;
  
  //Validation 
  // console.log("This is The body ");
  // console.log(user);

   const response = deleteItemService(user);

  res.status(201).json(response);
};

