import { createContext, useContext } from "react";
import { useState } from "react";

export const WeedingContext = createContext();

export const WeedingProvider = ({children}) => {

    const [weddingList, setWeddingList] = useState([])

    const addToWeddingList = (item) => {
        setWeddingList([...weddingList, item]);
        console.log("adding to wedding list");
    }

    const removeFromWeddingList = (item) => {
        // const newList = weddingList.filter(listItem => listItem.id !== item.id);
        // setWeddingList(newList);

        console.log('removing from wedding list')
    }
    
    return (
        <WeedingContext.Provider value={{weddingList, addToWeddingList, removeFromWeddingList}}>
            {children}
        </WeedingContext.Provider>
    )
}

export const useWedding = () => useContext(WeedingContext);

