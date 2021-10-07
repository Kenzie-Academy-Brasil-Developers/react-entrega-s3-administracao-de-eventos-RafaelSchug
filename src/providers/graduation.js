import { createContext, useContext, useEffect, useState } from "react";


export const GraduationContext = createContext();

export const GraduationProvider = ({children}) => {

    const [graduationList, setGraduationList] = useState(JSON.parse(localStorage.getItem('@graduation_list')) || []);

    const addToGraduationList = (item) => {
       
        const isItemIncluded = graduationList.some(product => product.id === item.id);

        if(!isItemIncluded) {
            setGraduationList([...graduationList, {...item, quantity: 1}])
        } else {
            const newList = graduationList.map(product => product.id === item.id ? {...product, quantity: product.quantity + 1} : product)
            setGraduationList(newList)
        }
    }

    const removeFromGraduationList = (item) => {
        const filteredList = graduationList.map(product => product.id === item.id ? {...product, quantity: product.quantity -1} : product ).filter(product => product.quantity !== 0);
        setGraduationList(filteredList);
    }

    useEffect(()=> {
        graduationList.length > 0 ? localStorage.setItem('@graduation_list', JSON.stringify(graduationList)) : localStorage.removeItem('@graduation_list');
    }, [graduationList])
    
    return (
        <GraduationContext.Provider value={{graduationList, addToGraduationList, removeFromGraduationList}}>
            {children}
        </GraduationContext.Provider>
    )
}

export const useGraduation = () => useContext(GraduationContext);
