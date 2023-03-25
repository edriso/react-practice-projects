import { Form } from "./components/Form";
import { ColorsSection } from "./components/ColorsSection";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState([]);

  const generateColor = (e, color) => {
    e.preventDefault();
    console.log(color);
  };

  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <Form generateColor={generateColor} />
        <ColorsSection colors={colors} />
      </section>
    </main>
  );
};
export default App;
