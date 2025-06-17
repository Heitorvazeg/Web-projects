import { createContext, useState } from "react";

export const VisibilityContext = createContext();
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [app, setApp] = useState(null); 

  return (
    <AppContext.Provider value={{ app, setApp }}>
      {children}
    </AppContext.Provider>
  );
};

export const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <VisibilityContext.Provider value={{ isVisible, setIsVisible }}>
        {children}
    </VisibilityContext.Provider>
  );
};