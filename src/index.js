// 1. Import React and React library

import React from "react";
import ReactDom from "react-dom/client";

// 2 . Get reference with id root

const el = document.getElementById("root");

// 3. Tell react to get controll of that elements

const root = ReactDom.createRoot(el);

// 4. Create Components

function App() {
  // You can pass props as varible using curl

  const inputType = "number";
  const minValue = 5;

  return (
    <input
      type={inputType}
      min={minValue}
      style={{ border: "3px solid red" }}
    />
  );
}

// 5 . Show components into the screen

root.render(<App />);
