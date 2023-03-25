import { Form } from "./components/Form";
import { ColorsSection } from "./components/ColorsSection";
import { useState } from "react";
import Values from "values.js";
import { nanoid } from "nanoid";

const App = () => {
  const [colors, setColors] = useState([]);

  const generateColors = (color) => {
    const colorsValues = new Values(color).all(10);

    let colorsArr = [];
    for (color of colorsValues) {
      colorsArr.push({
        id: nanoid(),
        hex: color.hex,
        percent: color.weight,
        type: color.type,
      });
    }

    setColors(colorsArr);
  };

  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <Form generateColors={generateColors} />
      </section>
      <ColorsSection colors={colors} />
    </main>
  );
};
export default App;
