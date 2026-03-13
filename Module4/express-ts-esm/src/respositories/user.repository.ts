//user service 
export const getUsersRepo = () => {

  //Grab user list from Db
  const data = [{ id: 1, name: "John Doe" } ];
  return data;

};

export const getUserByIdRepo = (id:any) => {

  //Get the user from db by Id
  const data = { id : id, name: "John Doe" };
  return data;

};

export const createUserRepo = (user:any) => {

  //Hit the Db
  //create the user
   const data = user;
   return data;
};
