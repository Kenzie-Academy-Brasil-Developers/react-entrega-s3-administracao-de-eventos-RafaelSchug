import { createContext, useContext } from "react";
import { useState } from "react";

export const WeedingContext = createContext();

export const WeedingProvider = ({children}) => {

    const [weddingList, setWeddingList] = useState([])

    const addToWeddingList = (item) => {
        const isItemIncluded = weddingList.some(product => product.id === item.id);

        if(!isItemIncluded) {
            setWeddingList([...weddingList, {...item, quantity: 1}])
        } else {
            const newList = weddingList.map(product => product.id === item.id ? {...product, quantity: product.quantity + 1} : product)
            setWeddingList(newList)
        }
    }

    const removeFromWeddingList = (item) => {
        const filteredList = weddingList.map(product => product.id === item.id ? {...product, quantity: product.quantity -1} : product ).filter(product => product.quantity !== 0);
        setWeddingList(filteredList);
    }
    
    return (
        <WeedingContext.Provider value={{weddingList, addToWeddingList, removeFromWeddingList}}>
            {children}
        </WeedingContext.Provider>
    )
}

export const useWedding = () => useContext(WeedingContext);

