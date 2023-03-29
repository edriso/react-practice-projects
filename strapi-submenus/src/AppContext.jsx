import { createContext, useState } from "react";
import { useContext } from "react";

const GlobalContext = createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        pageId,
        setPageId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);
