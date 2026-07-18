import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { todosArray } from "./data/todosArray";
import Todos from "./component/Todos";
import Courses from "./component/Courses";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
<App/>
  </BrowserRouter>
);
