const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); 

const port = 3000;

let todos = [
  {
    title: "mern",
    completed: true,
  },
  {
    title: "QA",
    completed: true,
  },
];

app.get("/api/todo", (req, res) => {
  res.json(todos);
});

app.post("/api/todo", (req, res) => {
  todos.push(req.body);
  res.json({ todo: req.body });
});

app.put("/api/todo/:index", (req, res) => {
  todos[req.params.index] = req.body;
  res.json({ todo: req.body });
});

app.delete("/api/todo/:index", (req, res) => {
  todos.splice(req.params.index, 1);
  res.json({ message: "deleted" });
});

app.listen(port, () => {
  console.log("server listening");
});