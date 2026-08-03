const express = require("express");
const  Router = express.Router();
const { signup, login } = require("../controllers/authController");

Router.post("/api/signup",signup);
Router.post("/api/login", login);

module.exports = Router;