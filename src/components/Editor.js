import "./Editor.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import "./Highlighter.css";

const Editor = (props) => {
  return (
      <textarea
        className="editor"
        placeholder={props.placeHolder}
        onChange={props.onChange}
      ></textarea>
  );
};

export default Editor;