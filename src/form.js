import { useState } from "react";
import "./App.css";

export function Form({ addFunc }) {
  let [text, setText] = useState("");
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        addFunc(text);
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
}
