import { TYPES } from "./actions";
import cartItems from "../assets/data";

const reducer = (state, action) => {
  if (action.type === TYPES.CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === TYPES.INCREASE_ITEM) {
    const updatedCart = state.cart.filter((item) => {
      if (item.id === action.payload.id) {
        item.amount += 1;
      }
      return item;
    });
    return { ...state, cart: updatedCart };
  }

  if (action.type === TYPES.DECREASE_ITEM) {
    const updatedCart = state.cart.filter((item) => {
      if (item.id === action.payload.id && item.amount <= 1) {
        return;
      }

      if (item.id === action.payload.id) {
        item.amount -= 1;
      }
      return item;
    });
    return { ...state, cart: updatedCart };
  }

  if (action.type === TYPES.DISPLAY_ITEMS) {
    return {
      ...state,
      cart: new Map(cartItems.map((item) => [item.id, item])),
    };
  }

  if (action.type === TYPES.REMOVE_ITEM) {
    const updatedCart = state.cart.filter(
      (item) => item.id !== action.payload.id
    );

    return { ...state, cart: updatedCart };
  }

  if (action.type === TYPES.LOADING) {
    return { ...state, loading: true };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
