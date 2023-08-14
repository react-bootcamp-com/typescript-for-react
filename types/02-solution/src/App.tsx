import React from "react";

const options: Array<string> = ["United States", "Canada", "Mexico"];

interface Location {
  id: string;
  name: string;
  defaultValue: string;
  disabled: boolean;
}

const location: Location = {
  id: "location",
  name: "location",
  defaultValue: "Canada",
  disabled: false,
};

// Add the appropriate type annotations
export default function App() {
  return (
    <div>
      <label
        htmlFor={location.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Location
      </label>
      <select
        id={location.id}
        name={location.name}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
        defaultValue={location.defaultValue}
        disabled={location.disabled}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
