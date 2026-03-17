import { z } from "zod"

// Base schema 
const BaseEntity = z.object(
    {
         id: z.number(), 
         createdAt: z.date(), 
         updatedAt: z.date() 
    }
);

 // Extend base
 const User = BaseEntity.extend(
    { 
        name: z.string(),
        email: z.string().email() 
 });

 // Pick/Omit
 const UserCreate = User.omit(
    { 
        id: true, 
        createdAt: true, 
        updatedAt: true 
    });

 // Merge 
const AdminUser = User.merge(
    z.object(
    {
          role: z.literal('admin'),
          permissions: z.array(z.string()) 
    }
 ));