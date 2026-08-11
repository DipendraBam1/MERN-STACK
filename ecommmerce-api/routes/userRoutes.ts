// const express = require("express");
import express from "express";
import getUserList from "../controllers/userController";
const Router = express.Router();

Router.get("/api/users", getUserList);

// module.exports = Router;
export default Router;