import { log } from "console";
import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {

   const response = 
   {
      data : [{ id: 1, name: "John Doe" }], 
      status: "sucess",
      message: "Date retrived succssfully!",
      statusCode: 200,
      error: null
  }

  res.json(response);

};

export const getUserById = (req: Request, res: Response) => {

  const { id } = req.params;
  // {k : v} {id : id} => {id}

  const response = 
   {
      data : { id : id, name: "John Doe" }, 
     status: "sucess",
     message: "Date retrived succssfully!",
     statusCode: 200,
     error: null
  }
  res.json(response);

};

export const createUser = (req: Request, res: Response) => {
  const user = req.body;

  console.log("This is The body ");
  console.log(user);

   const response = 
   {
      data : user, 
     status: "sucess",
     message: "User created!",
     statusCode: 201,
     error: null
  }

  res.status(201).json(response);
};
