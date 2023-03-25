import { useState } from "react";
import { Form } from "./components/Form";
import { ColorList } from "./components/ColorList";
import Values from "values.js";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState([]);
  const [brightness, setBrightness] = useState(null);

  const generateColors = (color) => {
    try {
      setColors(new Values(color).all(10));
      setBrightness(new Values(color).getBrightness());
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form generateColors={generateColors} colorBrightness={brightness} />
      <ColorList colors={colors} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        theme="light"
      />
    </main>
  );
};
export default App;
