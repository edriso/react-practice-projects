import { createContext, useContext, useReducer } from "react";
import cartItems from "./assets/data";
import reducer from "./reducer/reducer";
import { TYPES } from "./reducer/actions";

const AppContext = createContext();

const initialState = {
  cart: new Map(cartItems.map((item) => [item.id, item])),
  loading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleState = (actionType) => {
    dispatch({ type: actionType });
  };

  return (
    <AppContext.Provider value={{ ...state, handleState, TYPES }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
