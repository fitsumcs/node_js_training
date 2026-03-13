import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next : NextFunction) => 
{
    const request = req;
    console.log("Request METHOD", request.method);
    console.log("Request URL", request.url);

    //Update 
    // req. requestTime = Date.now(); 
    next();
};