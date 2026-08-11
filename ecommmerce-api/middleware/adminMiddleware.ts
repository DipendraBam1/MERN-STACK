import { NextFunction, Request, Response } from "express";

function authorizeAdmin(req:Request, res:Response, next:NextFunction) {
  if(req.user) {
   if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Only Admin can create category",
    });
  }
  next();
}}
export default authorizeAdmin;