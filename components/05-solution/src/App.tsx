import React, { ComponentProps } from "react";

// Add the right type annotation to pass native HTML props to Button component
export default function App() {
  return (
    <form className="max-w-sm p-8">
      <div className="col-span-full">
        <label
          htmlFor="about"
          className="block text-sm font-medium leading-6 text-black"
        >
          About
        </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full rounded-md border-2 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-400">
          Write a few sentences about yourself.
        </p>
      </div>
      <Button type="submit" className="mt-4 text-white">
        Save
      </Button>
    </form>
  );
}

function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      type={props.type}
      className={`${props.className} rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {props.children}
    </button>
  );
}
