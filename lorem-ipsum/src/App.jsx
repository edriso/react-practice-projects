import { useState } from "react";
import { Form } from "./components/Form";
import { LoremText } from "./components/LoremText";
import data from "./data";

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);

  const handleGenerate = (e, amount) => {
    e.preventDefault();
    const textArr = data.slice(0, parseInt(amount));
    setParagraphs(textArr);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>

      <Form handleGenerate={handleGenerate} />

      <LoremText paragraphs={paragraphs} />
    </section>
  );
};
export default App;
