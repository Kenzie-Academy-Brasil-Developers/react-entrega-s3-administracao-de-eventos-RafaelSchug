import { createContext, useContext, useState } from "react";

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({children}) => {
    
    const [confraternizationList, setConfraternizationList] = useState([]);

    const addToConfraternizationList = (item) => {
        setConfraternizationList([...confraternizationList, item])
        console.log('adding to confrat list');
    }

    const removeFromConfraternizationList = (item) => {
        console.log('removing from confrat list');
    }

    return (
        <ConfraternizationContext.Provider value={{confraternizationList, addToConfraternizationList, removeFromConfraternizationList}}>
            {children}
        </ConfraternizationContext.Provider>
    )
}

export const useConfraternization = () => useContext(ConfraternizationContext);