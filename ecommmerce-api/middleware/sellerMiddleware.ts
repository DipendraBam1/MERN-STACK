import express, { Request,NextFunction, Response } from "express";

function authorizeSeller(req:Request, res:Response, next:NextFunction) {
  if(req.user){
   if (req.user.role !== "seller") {
    return res.status(403).json({
      message: "Only sellers can create products",
    });
  }
  next();
}
}
export default authorizeSeller;