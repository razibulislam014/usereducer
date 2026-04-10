import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input placeholder="Add Task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
