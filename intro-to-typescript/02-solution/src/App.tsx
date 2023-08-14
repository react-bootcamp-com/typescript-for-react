import React from "react";

export default function App() {
  return (
    <input
      // What type does "size" expect?
      size={10}
      // What type does "onChange" expect?
      onChange={(event) => {
        event.target.value;
      }}
    />
  );
}
