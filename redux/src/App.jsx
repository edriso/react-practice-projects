import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
      {isOpen && <Modal />}
    </main>
  );
}
export default App;
