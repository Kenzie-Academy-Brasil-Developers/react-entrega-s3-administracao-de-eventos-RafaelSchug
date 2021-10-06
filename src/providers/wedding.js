import { createContext } from "react";

export const WeedingContext = createContext();

export const WeedingProvider = ({children}) => {
    
    return (
        <WeedingContext.Provider>
            {children}
        </WeedingContext.Provider>
    )
}

