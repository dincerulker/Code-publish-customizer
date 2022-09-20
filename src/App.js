import React, { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Editor from "./components/Editor";
import Highlighter from "./components/Highlighter";

import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";



function App() {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("");


  const changeThemeHandler = (event) => {
    setTheme(event.target.value);
  }

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <div className="output-style">
        <Editor
          placeHolder="Type your code here..."
          onChange={inputChangeHandler}
        />
        <Dropdown
          onChange={changeThemeHandler}
          data={themes}
        />
        <Highlighter  theme={themes[theme]}>
          {input}
        </Highlighter>
      </div>
    </div>
  );
}

export default App;
