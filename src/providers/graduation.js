import { createContext } from "react";

export const GraduationContext = createContext();

export const GraduationProvider = ({children}) => {
    
    return (
        <GraduationContext.Provider>
            {children}
        </GraduationContext.Provider>
    )
}
