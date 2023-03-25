import { nanoid } from "nanoid";
import { useState } from "react";

function Form({ addItem }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      const item = {
        id: nanoid(),
        text: text.trim(),
        completed: false,
      };
      addItem(item);
    } else {
      // error msg
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default Form;
