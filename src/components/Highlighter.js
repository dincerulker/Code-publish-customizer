import SyntaxHighlighter from "react-syntax-highlighter";
import "./Highlighter.css";

import React from "react";

const Highlighter = (props) => {
  return (
    <SyntaxHighlighter
      style={props.theme}
      className="highlighter"
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export default Highlighter;
