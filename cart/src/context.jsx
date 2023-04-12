import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer/reducer";
import { TYPES } from "./reducer/actions";
import { getTotals } from "./utils";
import cartItems from "./assets/data";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const initialState = {
  cart: new Map(),
  loading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: TYPES.REMOVE_ITEM, payload: { id } });
  };

  const increaseItem = (id) => {
    dispatch({ type: TYPES.INCREASE_ITEM, payload: { id } });
  };

  const decreaseItem = (id) => {
    dispatch({ type: TYPES.DECREASE_ITEM, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: TYPES.LOADING });
    let items = [];
    try {
      const response = await fetch(url);
      items = await response.json();
    } catch (error) {
      items = cartItems;
    }
    dispatch({
      type: TYPES.DISPLAY_ITEMS,
      payload: { items: new Map(items.map((item) => [item.id, item])) },
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
