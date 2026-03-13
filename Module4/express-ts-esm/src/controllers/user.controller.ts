import { Request, Response } from "express";

import { getUsersService, getUserByIdService, createUserService } from "../services/user.service.js";

export const getUsers = (req: Request, res: Response) => {

  const response = getUsersService();

  res.json(response);

};

export const getUserById = (req: Request, res: Response) => {

  const { id } = req.params;
  // {k : v} {id : id} => {id}
  //Validation
  const response = getUserByIdService(id);

  res.json(response);

};

export const createUser = (req: Request, res: Response) => {
  const user = req.body;
  
  //Validation 
  // console.log("This is The body ");
  // console.log(user);

   const response = createUserService(user);

  res.status(201).json(response);
};
