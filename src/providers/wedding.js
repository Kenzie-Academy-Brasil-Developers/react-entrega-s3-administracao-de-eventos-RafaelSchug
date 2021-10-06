import { createContext, useContext } from "react";
import { useState } from "react";

export const WeedingContext = createContext();

export const WeedingProvider = ({children}) => {

    const [weddingList, setWeddingList] = useState([])

    const addToWeddingList = (item) => {
        setWeddingList([...weddingList, item]);
    }

    const removeFromWeddingList = (item) => {
        const filteredList = weddingList.filter(wedList => wedList.id !== item.id);
        setWeddingList(filteredList);
    }
    
    return (
        <WeedingContext.Provider value={{weddingList, addToWeddingList, removeFromWeddingList}}>
            {children}
        </WeedingContext.Provider>
    )
}

export const useWedding = () => useContext(WeedingContext);

