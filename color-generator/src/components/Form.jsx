import { useEffect, useState } from "react";
import Values from "values.js";

export function Form({ generateColors }) {
  const [color, setColor] = useState("#645cff");
  const [brightness, setBrightness] = useState(
    new Values("#645cff").getBrightness()
  );

  const handleChange = (e) => {
    setColor(e.target.value);
    setBrightness(new Values(color).getBrightness());
  };

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
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={color}
          value={color}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color, color: brightness > 75 && "#000" }}
        >
          Generate
        </button>
      </form>
    </section>
  );
}
