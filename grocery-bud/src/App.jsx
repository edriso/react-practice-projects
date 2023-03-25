import { useState } from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem("list", JSON.stringify(updatedItems));
    toast.success("Item added to the list!");
  };

  const checkItem = (itemID) => {
    const updatedItems = items.filter((item) => {
      if (item.id === itemID) {
        item.completed = !item.completed;
      }
      return item;
    });

    setItems(updatedItems);
    localStorage.setItem("list", JSON.stringify(updatedItems));
  };
  const deleteItem = (itemID) => {
    const updatedItems = items.filter((item) => item.id !== itemID);
    setItems(updatedItems);
    localStorage.setItem("list", JSON.stringify(updatedItems));
    toast.success("Item deleted!");
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} />
      <ItemList items={items} checkItem={checkItem} deleteItem={deleteItem} />
      <ToastContainer position="top-center" autoClose={2000} />
    </main>
  );
}

export default App;
