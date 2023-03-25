import { Form } from "./components/Form";

const App = () => {
  const generateColor = (e, color) => {
    e.preventDefault();
    console.log(color);
  };

  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <Form generateColor={generateColor} />
      </section>
    </main>
  );
};
export default App;
