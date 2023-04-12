import { TYPES } from "./actions";
// import cartItems from "../assets/data";

const reducer = (state, action) => {
  if (action.type === TYPES.CLEAR_CART) {
    return { ...state, cart: [] };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
