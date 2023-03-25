import { useState } from "react";

export function Form({ generateColor }) {
  const [color, setColor] = useState("#645cff");

  return (
    <form className="color-form" onSubmit={(e) => generateColor(e, color)}>
      <input
        type="color"
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        placeholder={color}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit" className="btn" style={{ backgroundColor: color }}>
        Generate
      </button>
    </form>
  );
}
