"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <section style={{ background: "#eeeeee" }}>
      <h3>Client Component</h3>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </section>
  );
}
