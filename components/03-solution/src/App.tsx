import React from "react";

// Add type annotation for children prop
export default function App() {
  return (
    <>
      <CTAButton>
        <span>Shop Workspace</span>
      </CTAButton>
      <CTAButton>Click me</CTAButton>
    </>
  );
}

interface Props {
  children: React.ReactNode;
}

function CTAButton(props: Props) {
  return (
    <a
      href="#"
      className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
    >
      {props.children}
    </a>
  );
}
