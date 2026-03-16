import { getItemsRepo, getItemByIdRepo, createItemRepo, updateItemRepo, deleteItemRepo } from "../repositories/item.repository";
//user service 
export const getItemsService = () => {


   const data = getItemsRepo();

   //Map , shape of reponse 
   const response = 
   {
     data : data, 
     status: "sucess",
     message: "Date retrived succssfully!",
     statusCode: 200,
     error: null
  }

  return response;

};

export const getItemByIdService = (id:any) => {

  const data = getItemByIdRepo(id);

  //Map , shape of reponse 
  const response = 
   {
     data : data, 
     status: "sucess",
     message: "Date retrived succssfully!",
     statusCode: 200,
     error: null
  }
  return response;

};

export const createItemService = (user:any) => {

  console.log("This is The body ");
  console.log(user);

  const data = createItemRepo(user);

  //Map , shape of reponse 
   const response = 
   {
      data : data, 
     status: "sucess",
     message: "User created!",
     statusCode: 201,
     error: null
  }

  return response;
};

export const updateItemService = (user:any) => {

  console.log("This is The body ");
  console.log(user);

  const data = updateItemRepo(user);

  //Map , shape of reponse 
   const response = 
   {
      data : data, 
     status: "sucess",
     message: "User created!",
     statusCode: 201,
     error: null
  }

  return response;
};

export const deleteItemService = (user:any) => {

  console.log("This is The body ");
  console.log(user);

  const data = deleteItemRepo(user);

  //Map , shape of reponse 
   const response = 
   {
      data : data, 
     status: "sucess",
     message: "User created!",
     statusCode: 201,
     error: null
  }

  return response;
};
