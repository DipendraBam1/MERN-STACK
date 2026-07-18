// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function TodosCrud() {
//   const [showModal, setShowModal] = useState(false);
//   const [editTitle, setEditTitle] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [title, setTitle] = useState("");
//   const [todos, setTodos] = useState([
//     { title: "html", status: "Pending" },
//     { title: "css", status: "Pending" },
//     { title: "js", status: "Pending" },
//   ]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title.trim()) {
//       toast.error("Title is required", {
//         position: "bottom-center",
//         theme: "colored",
//       });
//       return;
//     }

//     if (editIndex === null) {
//       setTodos([
//         ...todos,
//         {
//           title,
//           status: "Pending",
//         },
//       ]);
//       setTitle("");
//     } else {
//       const updatedTodos = [...todos];
//       updatedTodos[editIndex].title = title;
//       setTodos(updatedTodos);
//       clear();
//     }
//   };

//   const clear = () => {
//     setTitle("");
//     setEditIndex(null);
//   };

//   const deleteTodo = (indexToDelete) => {
//     setTodos(todos.filter((_, index) => index !== indexToDelete));
//   };

//   const editTodo = (index) => {
//     setEditIndex(index);
//     setEditTitle(todos[index].title);
//     setShowModal(true);
//   };
//   const saveEdit = () => {
//     if (!editTitle.trim()) {
//       toast.error("Title is required");
//       return;
//     }

//     const updatedTodos = [...todos];
//     updatedTodos[editIndex].title = editTitle;
//     setTodos(updatedTodos);
//     setShowModal(false);
//     setEditIndex(null);
//     setEditTitle("");
//   };
//   const toggleStatus = (index) => {
//     const updatedTodos = [...todos];

//     updatedTodos[index].status =
//       updatedTodos[index].status === "Pending" ? "Completed" : "Pending";

//     setTodos(updatedTodos);
//   };
//   return (
//     <div className="todo-container">
//       <h2>Todo CRUD App</h2>

//       <form onSubmit={handleSubmit} className="todo-form">
//         <input
//           type="text"
//           value={title}
//           placeholder="Enter Todo"
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <button type="submit" className="add-btn">
//           {editIndex === null ? "Add" : "Update"}
//         </button>

//         {title && (
//           <button type="button" className="clear-btn" onClick={clear}>
//             Clear
//           </button>
//         )}
//       </form>

//       <ul className="todo-list">
//         {todos.map((todo, index) => (
//           <li key={index} className="todo-item">
//             <div className="todo-left">
//               <input type="checkbox" />
//               <span>{todo.title}</span>
//               <span>{todo.status}</span>
//             </div>

//             <div className="todo-actions">
//               <button
//                 type="button"
//                 className="edit-btn"
//                 onClick={() => editTodo(index)}
//               >
//                 Edit
//               </button>

//               <button
//                 type="button"
//                 className="delete-btn"
//                 onClick={() => deleteTodo(index)}
//               >
//                 Delete
//               </button>
//               <button
//                 type="button"
//                 className="status-btn"
//                 onClick={() => toggleStatus(index)}
//               >
//                 Toggle
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {showModal && (
//         <div className="overlay">
//           <div className="modalOverlay">
//             <button className="close" onClick={() => setShowModal(false)}>
//               ×
//             </button>

//             <h3>Edit Todo</h3>

//             <input
//               type="text"
//               value={editTitle}
//               onChange={(e) => setEditTitle(e.target.value)}
//               placeholder="Edit Todo"
//             />

//             <button type="button" className="save-btn" onClick={saveEdit}>
//               Save Changes
//             </button>
//           </div>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default TodosCrud;
// import React from "react";
// import { useState } from "react";
// export default function TodosCrud() {
//   const [input, setInput] = useState("");
//   const [items, setItems] = useState([]);

//   const [showModal, setShowModal] = useState(false);
//   const [editInput, setEditInput] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   const addItems = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     setItems([...items, input]);
//     setInput("");
//   };
//   const deleteItems = (index) => {
//     let oldItems = [...items];
//     oldItems.splice(index, 1);
//     setItems(oldItems);
//   };
//   const editItems = (index) => {
//     const oldItmes = [...items];
//     setEditIndex(index);
//     setEditInput(items[index]);
//     setShowModal(true);
//   };
//     const saveEdit = () => {
//     const updatedItems = [...items];
//     updatedItems[editIndex] = editInput;

//     setItems(updatedItems);
//     setShowModal(false);
//     setEditInput("");
//     setEditIndex(null);
//   };
//   return (
//     <>
//       <form onSubmit={addItems}>
//         <input
//           type="text"
//           value={input}
//           placeholder="Enter item to add"
//           onChange={(e) => {
//             setInput(e.target.value);
//           }}
//         />
//         <button>Add</button>
//       </form>
//       <ul>
//         {items.map((el, index) => (
//           <li key={index}>
//             {el}{" "}
//             <button
//               onClick={() => {
//                 editItems(index);
//               }}
//             >
//               edit
//             </button>{" "}
//             <button
//               onClick={() => {
//                 deleteItems(index);
//               }}
//             >
//               delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       {showModal &&(
//         <div className="modalOverlay">
//           <div className="modal">
//             <h2>Edit to</h2>
//             <input type="text" value={editInput} onChange={(e)=>{
//               setEditInput(e.target.value)
//             }}/>
//             <button onClick={()=>{
//               saveEdit(editIndex)
//             }}>save</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
