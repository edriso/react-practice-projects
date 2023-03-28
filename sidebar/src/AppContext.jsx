import { createContext, useState } from "react";

export const GlobalContext = createContext();

function AppContext({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ showSidebar, setShowSidebar, showModal, setShowModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;
