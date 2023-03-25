import { Form } from "./components/Form";
import { ColorList } from "./components/ColorList";
import { useState } from "react";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState([]);

  const generateColors = (color) => {
    setColors(new Values(color).all(10));
  };

  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <Form generateColors={generateColors} />
      </section>

      <ColorList colors={colors} />
    </main>
  );
};
export default App;
