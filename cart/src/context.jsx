import { createContext, useContext, useReducer } from "react";
import cartItems from "./assets/data";
import reducer from "./reducer/reducer";

const AppContext = createContext();

const initialState = {
  cart: cartItems,
  loading: false,
};

const handleState = (action) => {
  console.log(action);
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, handleState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
