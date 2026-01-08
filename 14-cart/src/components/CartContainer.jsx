import { useGlobalContext } from "../context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, totalCost, clearCart } = useGlobalContext();

  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>No items!</h2>
          <h4 className="empty-cart">Your cart is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your cart</h2>
      </header>

      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
