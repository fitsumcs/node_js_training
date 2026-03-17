import { z } from "zod"

export const UserSchema = z.object(
{
   name : z.string().min(3) ,
   age : z.number().min(18) ,
   email: z.string().email(),
   password: z.string().min(8),
   phoneNumber:z.string().optional(),  //adding optional field
   role : z.string().default("guest"),  // adding a field with default value -> it means it is optional 
   address : z.object(                                                        //nested object
      {
            city : z.string(),
            country:z.string()
      }),
   intereset : z.array( z.object({ name:z.string() , category:z.string() }))  // array 
});