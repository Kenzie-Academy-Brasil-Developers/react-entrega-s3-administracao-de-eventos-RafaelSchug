import { createContext } from "react";

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({children}) => {
    

    return (
        <ConfraternizationContext.Provider>
            {children}
        </ConfraternizationContext.Provider>
    )
}