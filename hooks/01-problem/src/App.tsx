import React, { useState } from "react";

// Add the appropriate types to todos
export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState();

  function addTodo() {
    if (text) {
      setTodos([...todos, { id: Date.now(), text }]);
      setText("");
    }
  }

  return (
    <div className="max-w-sm p-8">
      <h1 className="text-2xl font-bold pb-4">Todos</h1>
      <ul className="space-y-2 pb-4">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <div className="col-span-full mt-2">
        <textarea
          id="todo"
          name="todo"
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="block w-full rounded-md border-2 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          value={text}
        />
      </div>
      <button
        type="button"
        onClick={addTodo}
        className="mt-8 text-white rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  );
}
