import { todosArray } from "./data/todosArray";
import Todos from "./component/Todos";
import Courses from "./component/Courses";
import Counter from "./component/Counter";
import ChangeTheme from "./component/ChangeTheme";
import RenderPage from "./component/Spa";
import TodosCrudApi from "./component/TodosCrudApi";
import Modaloverlay from "./component/Modal";
import ProductsListApi from "./component/ProductlistApi";
import { Routes, Route } from "react-router";
import ProductDetails from "./component/ProductDetails";
import TodosCrud from "./component/TodosCrudApi";

export default function App() {
  return (
    <Routes>
      {/* <Counter/>  
        <Courses />  
       <br />
    <br />
    <br />  
        <Todos />   */}
      {/* <ChangeTheme /> */}
      {/* <RenderPage/> */}
      {/* <TodosCrud/> */}
      {/* <Modaloverlay/> */}
      {/* <TodosCrud/> */}
      <Route path="/" element={<ProductsListApi />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/todo" element={<TodosCrudApi />} />
    </Routes>
  );
}
