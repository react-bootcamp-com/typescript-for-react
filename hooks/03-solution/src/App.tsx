import React, { useEffect, useRef } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Autofocus input using useEffect
  // Add appropriate type to useRef
  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Focus me" />;
}
