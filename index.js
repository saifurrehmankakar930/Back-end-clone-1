import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

// GET all todos


app.get("/", (req, res) => {
  res.send("Backend start wowa ");
});





app.get("/todos", (req, res) => {
  res.json(todos);
});

// ADD todo
app.post("/todos", (req, res) => {
  const { title } = req.body;

  const newTodo = {
    id: Date.now(),
    title,
  };

  todos.push(newTodo);

  res.json(newTodo);
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  todos = todos.filter((t) => t.id !== id);

  res.json({ message: "Deleted" });
});

// EDIT todo
app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title } = req.body;

  todos = todos.map((todo) =>
    todo.id == id ? { ...todo, title } : todo
  );

  res.json({ message: "Updated" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
