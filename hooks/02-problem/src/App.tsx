import React, { useEffect, useState } from "react";

export default function App() {
  const count = useCountUp();

  return <div>{count}</div>;
}

// Fix the useEffect type error
function useCountUp(ms: number = 1000) {
  const [count, setCount] = useState(0);

  useEffect(
    () =>
      setInterval(() => {
        setCount((count) => count + 1);
      }, ms),
    [ms]
  );

  return count;
}
