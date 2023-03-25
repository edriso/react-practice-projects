import { useState } from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const updateItem = [...items, item];
    setItems(updateItem);
    toast.success("Item added to the list!");
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
  const deleteItem = (itemID) => {
    const updateItems = items.filter((item) => item.id !== itemID);
    setItems(updateItems);
    toast.success("Item deleted!");
  };

  return (
    <>
      <main className="section-center">
        <Form addItem={addItem} />
        <ItemList items={items} checkItem={checkItem} deleteItem={deleteItem} />
      </main>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
