import { useState } from "react";

export function Form({ generateColors }) {
  const [color, setColor] = useState("#645cff");

  const handleSubmit = (e) => {
    e.preventDefault();
    generateColors(color);
  };

  return (
    <form className="color-form" onSubmit={handleSubmit}>
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
