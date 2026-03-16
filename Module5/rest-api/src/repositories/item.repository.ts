//user service 
export const getItemsRepo = () => {

  //Grab user list from Db
  const data = [{ id: 1, name: "John Doe" } ];
  return data;

};

export const getItemByIdRepo = (id:any) => {

  //Get the user from db by Id
  const data = { id : id, name: "John Doe" };
  return data;

};

export const createItemRepo = (user:any) => {

  //Hit the Db
  //create the user
   const data = user;
   return data;
};

export const updateItemRepo = (user:any) => {

  //Hit the Db
  //create the user
   const data = user;
   return data;
};

export const deleteItemRepo = (user:any) => {

  //Hit the Db
  //create the user
   const data = user;
   return data;
};
