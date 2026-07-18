import { todosArray } from "../data/todosArray";
import Button from "./Button";
function Todos() {
  return (
    <>
      <h1>Todos List</h1>
      <table className="tbl">
        <thead>
          <th>ID</th>
          <th>Todo</th>
          <th>Completed</th>
          <th>User ID</th>
          <th>Status</th>
        </thead>
        <tbody>
          {todosArray.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.todo}</td>
                <td>
                  {/* <span className={`status ${!todo.completed? "pending":""}`}></span> */}
                  <span
                    style={{
                      background: todo.completed ? "green" : "red",
                      color: "white",
                      padding: "3px 8px",
                      borderRadius: "5px",
                    }}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </span>
                </td>
                <td>{todo.userId}</td>
                <td>
                  {/* <button className="btn Edit">Edit</button> */}
                  <Button size="sm" label="Edit"></Button>
                  <Button size="lg" label="Delete"></Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Todos;
