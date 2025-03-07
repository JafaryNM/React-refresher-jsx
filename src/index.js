// 1. Import React and React library

import React from "react";
import ReactDom from 'react-dom/client'

// 2 . Get reference with id root

const el = document.getElementById('root');

// 3. Tell react to get controll of that elements

const root = ReactDom.createRoot(el)

// 4. Create Components 

function App(){
  return <div>
    <h1>Hi there react js</h1>
  </div>
}

// 5 . Show components into the screen 

root.render(<App/>)
