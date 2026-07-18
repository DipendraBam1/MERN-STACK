import { useState } from "react";
import Button from "./Button";
export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
     <Button onClick={increment} size="lg" rounded="rounded" label="increment"></Button>
     <Button onClick={decrement} size="lg" label="decrement"></Button>
    </>
  );
}




















