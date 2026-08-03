const express = require("express");
const getUsers = require("../controllers/userController");
const Router = express.Router();

Router.get("/api/users", getUsers);

module.exports = Router;
