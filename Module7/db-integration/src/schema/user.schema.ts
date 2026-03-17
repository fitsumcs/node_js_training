import { z } from "zod"

export const UserSchema = z.object(
{
   name : z.string().min(3).transform(val => val.toUpperCase()) ,
   age : z.number().min(18) ,
   email: z.string().email(),
   password: z.string().min(8),
   phoneNumber:z.string().optional(),  //adding optional field
   confirmPassword: z.string().optional(),
   role : z.string().default("guest"),  // adding a field with default value -> it means it is optional 
   address : z.object(                                                        //nested object
      {
            city : z.string(),
            country:z.string().refine(val => val.startsWith("Eth") , { error : "Must Be Ethiopia" })
      }),
   intereset : z.array( z.object({ name:z.string() , category:z.string() })),  // array 
   uuid: z.uuid(),
   website: z.url(),
   birthDate:z.iso.date(),

}).refine(data => data.password === data.confirmPassword, { error : "Password does not match!"});