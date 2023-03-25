import { useEffect, useState } from "react";

export function Form({ colorBrightness, generateColors }) {
  const [color, setColor] = useState("#645cff");

  const handleSubmit = (e) => {
    e.preventDefault();
    generateColors(color);
  };

  useEffect(() => {
    generateColors(color);
  }, []);

  return (
    <section className="container">
      <h4>Color Generator</h4>

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
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: color,
            color: colorBrightness > 75 && "#000",
          }}
        >
          Generate
        </button>
      </form>
    </section>
  );
}
