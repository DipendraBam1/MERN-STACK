import { Request,Response } from "express";
import User from "../models/User";

const getUserList = async (req:Request, res:Response) => {
  const users = await User.findAll();
  res.send(users);
 }
export default getUserList;