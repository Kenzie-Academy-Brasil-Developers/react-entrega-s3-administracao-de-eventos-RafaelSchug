import { createContext, useContext, useState, useEffect  } from "react";
import { toast } from 'react-toastify';


export const WeedingContext = createContext();

export const WeedingProvider = ({children}) => {

    const [weddingList, setWeddingList] = useState(JSON.parse(localStorage.getItem('@wedding_list')) || [])

    const addToWeddingList = (item) => {
        const isItemIncluded = weddingList.some(product => product.id === item.id);

        if(!isItemIncluded) {
            setWeddingList([...weddingList, {...item, quantity: 1}])
        } else {
            const newList = weddingList.map(product => product.id === item.id ? {...product, quantity: product.quantity + 1} : product)
            setWeddingList(newList)
        }

        toast.success(`[${item.name}] adicionado à Wedding`, {autoClose: 2000})
    }

    const removeFromWeddingList = (item) => {
        const filteredList = weddingList.map(product => product.id === item.id ? {...product, quantity: product.quantity -1} : product ).filter(product => product.quantity !== 0);
        setWeddingList(filteredList);
    }

    useEffect(()=> {
        weddingList.length > 0 ? localStorage.setItem('@wedding_list', JSON.stringify(weddingList)) : localStorage.removeItem('@wedding_list');
    }, [weddingList])
    
    return (
        <WeedingContext.Provider value={{weddingList, addToWeddingList, removeFromWeddingList}}>
            {children}
        </WeedingContext.Provider>
    )
}

export const useWedding = () => useContext(WeedingContext);

