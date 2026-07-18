import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function TodosCrudApi() {
  const [editIndex, setEditIndex] = useState(null);
  const [title, setTitle] = useState("");
const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState(() => {
  //   const savedTodos = localStorage.getItem("todos");

  //   return savedTodos
  //     ? JSON.parse(savedTodos)
  //     : [
  //         { title: "html", completed: true },
  //         { title: "css", completed: true },
  //         { title: "js", completed: true },
  //         { title: "react", completed: false },
  //       ];
  // });
  useEffect(() => {
    // localStorage.setItem("todos", JSON.stringify(todos));
    axios
      .get("http://localhost:3000/api/todo")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !title.trim()) {
      toast.error("title is required", {
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }

    if (editIndex === null) {
      axios
        .post("http://localhost:3000/api/todo", {
          title,
          completed: false,
        })
        .then((res) => {
          setTodos([...todos, res.data.todo]);
          clear();
        })
        .catch((err) => console.log(err));
    } else {
  axios
    .put(`http://localhost:3000/api/todo/${editIndex}`, {
      title,
      completed: e.target.status_check.checked,
    })
    .then((res) => {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = res.data.todo;

      setTodos(updatedTodos);
      clear();
    })
    .catch((err) => console.log(err));
}
  };

  const clear = () => {
    setTitle("");
    setEditIndex(null);
  };

const deleteTodo = (index) => {
  axios
    .delete(`http://localhost:3000/api/todo/${index}`)
    .then(() => {
      setTodos(todos.filter((_, i) => i !== index));

      if (editIndex === index) {
        clear();
      }
    })
    .catch((err) => console.log(err));
};

  const toggleStauts = (index) => {
    let oldTodos = [...todos];

    oldTodos[index] = {
      title: todos[index].title,
      completed: !todos[index].completed,
    };

    setTodos(oldTodos);
  };

  return (
    <div style={{ marginLeft: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          required
          value={title}
          id="title"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button>{editIndex === null ? "add" : "edit"}</button>
        {title && <button onClick={clear}>clear</button>}
      </form>
      <ul style={{ listStyle: "none" }}>
        {todos.map((el, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={el.completed}
              onChange={(e) => {
                toggleStauts(index);
              }}
            />
            <span
              style={{ textDecoration: el.completed ? "line-through" : "" }}
            >
              {el.title}
            </span>
            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                setTitle(el.title);
                setEditIndex(index);
              }}
            >
              edit
            </button>
          </li>
        ))}
      </ul>

      {editIndex !== null && (
        <>
          <div className="backdrop" onClick={clear}></div>
          <div className="modal" style={{ border: "1px solid" }}>
            <p>Edit Todos</p>
            <button className="close" onClick={clear}>
              x
            </button>
            <form onSubmit={handleSubmit}>
              <input
                required
                value={title}
                id="title"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <br />
              <br />
<input
  type="checkbox"
  name="status_check"
  id="status-check"
  defaultChecked={todos[editIndex]?.completed}
/>
              <label htmlFor="status-check"> Mark as completed</label>
              <br />
              <br />
              <button>{editIndex === null ? "add" : "edit"}</button>
              {title && <button onClick={clear}>clear</button>}
            </form>
          </div>
        </>
      )}

      <ToastContainer />
    </div>
  );
}

export default TodosCrudApi;
