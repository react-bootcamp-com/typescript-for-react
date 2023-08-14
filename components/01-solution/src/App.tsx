import React from "react";

export default function App() {
  const person = {
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    width: 50,
    height: 50,
  };

  return <Person {...person} />;
}

export type Props = {
  name: string;
  avatar: string;
  width: number;
  height: number;
};

// Add a props type annotation
const Person = (props: Props) => {
  return (
    <div className="p-8 flex items-center">
      <img
        src={props.avatar}
        alt={props.name}
        className="flex-shrink-0 rounded-full"
        style={{ width: props.width, height: props.height }}
      />
      <span className="ml-3 block truncate font-bold">{props.name}</span>
    </div>
  );
};
