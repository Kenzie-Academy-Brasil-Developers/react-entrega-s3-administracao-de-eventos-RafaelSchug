import { createContext, useContext, useState } from "react";

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({children}) => {
    
    const [confraternizationList, setConfraternizationList] = useState([]);

    const addToConfraternizationList = (item) => {
        const isItemIncluded = confraternizationList.some(product => product.id === item.id);

        if(!isItemIncluded) {
            setConfraternizationList([...confraternizationList, {...item, quantity: 1}])
        } else {
            const newList = confraternizationList.map(product => product.id === item.id ? {...product, quantity: product.quantity + 1} : product)
            setConfraternizationList(newList)
        }
        
    }

    const removeFromConfraternizationList = (item) => {
        const filteredList = confraternizationList.map(product => product.id === item.id ? {...product, quantity: product.quantity -1} : product ).filter(product => product.quantity !== 0);
        setConfraternizationList(filteredList);
    }

    return (
        <ConfraternizationContext.Provider value={{confraternizationList, addToConfraternizationList, removeFromConfraternizationList}}>
            {children}
        </ConfraternizationContext.Provider>
    )
}

export const useConfraternization = () => useContext(ConfraternizationContext);