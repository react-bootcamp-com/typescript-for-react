import React from "react";

// Fix the type annotations
const className: number =
  "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10";
const width: string = 200;
let disabled: boolean;

export default function App() {
  disabled = "false";

  return (
    <span className={className} style={{ width }} aria-disabled={disabled}>
      Badge
    </span>
  );
}
