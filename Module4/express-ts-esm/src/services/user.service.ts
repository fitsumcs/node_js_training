import { getUsersRepo, getUserByIdRepo, createUserRepo } from "../respositories/user.repository";
//user service 
export const getUsersService = () => {


   const data = getUsersRepo();

   //Map , shape of reponse 
   const response = 
   {
     data : data, 
     status: "sucess",
     message: "Date retrived succssfully!",
     statusCode: 200,
     error: null
  }
  console.log("This is The response ");
  return response;

};

export const getUserByIdService = (id:any) => {

  const data = getUserByIdRepo(id);

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

export const createUserService = (user:any) => {

  console.log("This is The body ");
  console.log(user);

  const data = createUserRepo(user);

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
