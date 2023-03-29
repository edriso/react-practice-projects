import { createContext, useState } from "react";

export const GlobalContext = createContext();

function AppContext({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, isModalOpen, setIsModalOpen }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;
