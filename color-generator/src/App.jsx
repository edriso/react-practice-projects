import { useState } from "react";
import { Form } from "./components/Form";
import { ColorList } from "./components/ColorList";
import Values from "values.js";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState([]);

  const generateColors = (color) => {
    setColors(new Values(color).all(10));
  };

  return (
    <main>
      <Form generateColors={generateColors} />
      <ColorList colors={colors} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        theme="colored"
      />
    </main>
  );
};
export default App;
