import { createContext, useContext, useState } from "react";

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({children}) => {
    
    const [confraternizationList, setConfraternizationList] = useState([]);

    const addToConfraternizationList = (item) => {
        setConfraternizationList([...confraternizationList, item])
    }

    const removeFromConfraternizationList = (item) => {
        const filteredList = confraternizationList.filter(confList => confList.id !== item.id);
        setConfraternizationList(filteredList);
    }

    return (
        <ConfraternizationContext.Provider value={{confraternizationList, addToConfraternizationList, removeFromConfraternizationList}}>
            {children}
        </ConfraternizationContext.Provider>
    )
}

export const useConfraternization = () => useContext(ConfraternizationContext);