import { useState } from "react";

export function Form({ handleGenerate }) {
  const [amount, setAmount] = useState(1);

  return (
    <form className="lorem-form" onSubmit={(e) => handleGenerate(e, amount)}>
      <label htmlFor="paragraphsCount">Paragraphs:</label>
      <input
        type="number"
        name="paragraphsCount"
        id="paragraphsCount"
        min="1"
        max="9"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit" className="btn">
        Generate
      </button>
    </form>
  );
}
