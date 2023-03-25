import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([
    { text: "test", completed: true, id: nanoid() },
  ]);

  const addItem = (item) => {
    const updateItem = [...items, item];
    setItems(updateItem);
  };

  const checkItem = (itemID) => {
    const updateItems = items.filter((item) => {
      if (item.id === itemID) {
        item.completed = !item.completed;
      }

      return item;
    });

    setItems(updateItems);
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} />
      <ItemList items={items} checkItem={checkItem} />
    </main>
  );
}

export default App;
