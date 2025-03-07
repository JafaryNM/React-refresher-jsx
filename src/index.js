// 1. Import React and React library

import React from "react";
import ReactDom from "react-dom/client";

// 2 . Get reference with id root

const el = document.getElementById("root");

// 3. Tell react to get controll of that elements

const root = ReactDom.createRoot(el);

// 4. Create Components

function App() {
  let message = "Hello message";
  // React can show on curl braces only number, string
  // React can treat array, and undefined , null  return nothing
  // React will raised an errors if you  return {objectValue}
  // You can return direct value of react from curl 

  let messageLength = 5;



  if (Math.random() > 0.5) {
    message = "Another message";
  }

  return (
    <div>
      <h1>
        {message} {messageLength}
      </h1>
      <p>{new Date().toDateString()}</p>
    </div>
  );
}

// 5 . Show components into the screen

root.render(<App />);
