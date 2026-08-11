// const express = require("express");
import express from "express";

const  Router = express.Router();
import { signup, login } from "../controllers/authController";

Router.post("/api/signup",signup);
Router.post("/api/login", login);

// module.exports = Router;
export default Router;