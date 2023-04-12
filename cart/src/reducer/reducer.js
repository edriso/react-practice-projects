import { TYPES } from "./actions";
import cartItems from "../assets/data";

const reducer = (state, action) => {
  if (action.type === TYPES.CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === TYPES.REMOVE_ITEM) {
    // created new instance to not mutate the state
    const updatedCart = new Map(state.cart);
    updatedCart.delete(action.payload.id);
    return { ...state, cart: updatedCart };
  }

  if (action.type === TYPES.INCREASE_ITEM) {
    const itemId = action.payload.id;
    const updatedCart = new Map(state.cart);
    const item = updatedCart.get(itemId);
    // item.amount += 1; // this increased amount by 2 due to React.StrictMode
    const newItem = { ...item, amount: item.amount + 1 };

    updatedCart.set(itemId, newItem);
    return { ...state, cart: updatedCart };
  }

  if (action.type === TYPES.DECREASE_ITEM) {
    const itemId = action.payload.id;
    const updatedCart = new Map(state.cart);
    const item = updatedCart.get(itemId);
    if (item.amount <= 1) {
      updatedCart.delete(itemId);
    } else {
      const newItem = { ...item, amount: item.amount - 1 };
      updatedCart.set(itemId, newItem);
    }

    return { ...state, cart: updatedCart };
  }

  if (action.type === TYPES.DISPLAY_ITEMS) {
    return {
      ...state,
      cart: new Map(cartItems.map((item) => [item.id, item])),
    };
  }

  if (action.type === TYPES.LOADING) {
    return { ...state, loading: true };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
