import React, { useEffect, useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  // Autofocus input using useEffect
  // Add appropriate type to useRef
  useEffect(() => {
    inputRef.current;
  });

  return <input ref={inputRef} placeholder="Focus me" />;
}
