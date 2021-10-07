import { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({children}) => {
    
    const [confraternizationList, setConfraternizationList] = useState(JSON.parse(localStorage.getItem('@confraternization_list')) || []);

    const addToConfraternizationList = (item) => {
        const isItemIncluded = confraternizationList.some(product => product.id === item.id);

        if(!isItemIncluded) {
            setConfraternizationList([...confraternizationList, {...item, quantity: 1}])
        } else {
            const newList = confraternizationList.map(product => product.id === item.id ? {...product, quantity: product.quantity + 1} : product)
            setConfraternizationList(newList)
        }

        toast.success(`[${item.name}] adicionado à Confraternization`, {autoClose: 2000})
        
    }

    const removeFromConfraternizationList = (item) => {
        const filteredList = confraternizationList.map(product => product.id === item.id ? {...product, quantity: product.quantity -1} : product ).filter(product => product.quantity !== 0);
        setConfraternizationList(filteredList);
    }

    useEffect(()=> {
        confraternizationList.length > 0 ? localStorage.setItem('@confraternization_list', JSON.stringify(confraternizationList)) : localStorage.removeItem('@confraternization_list');
    }, [confraternizationList])

    return (
        <ConfraternizationContext.Provider value={{confraternizationList, addToConfraternizationList, removeFromConfraternizationList}}>
            {children}
        </ConfraternizationContext.Provider>
    )
}

export const useConfraternization = () => useContext(ConfraternizationContext);