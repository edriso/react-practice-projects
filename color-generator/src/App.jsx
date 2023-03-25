import { Form } from "./components/Form";
import { ColorsSection } from "./components/ColorsSection";
import { useState } from "react";
// import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState([]);

  const generateColors = (color) => {
    console.log(color);
  };

  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <Form generateColors={generateColors} />
        <ColorsSection colors={colors} />
      </section>
    </main>
  );
};
export default App;
