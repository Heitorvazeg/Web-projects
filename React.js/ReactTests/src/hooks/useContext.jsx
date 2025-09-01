import { useState } from "react";
import { createContext } from "react";

export const ContContext = createContext();

export const NumProvider = ({children}) => {
    const [num, setNum] = useState(0);

    return (
        <ContContext.Provider value={{num, setNum}}>
            {children}
        </ContContext.Provider>
    );
};