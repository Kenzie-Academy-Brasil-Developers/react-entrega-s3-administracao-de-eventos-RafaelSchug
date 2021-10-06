import { createContext, useContext, useState } from "react";


export const GraduationContext = createContext();

export const GraduationProvider = ({children}) => {

    const [graduationList, setGraduationList] = useState([]);

    const addToGraduationList = (item) => {
        setGraduationList([...graduationList, item]);
    }

    const removeFromGraduationList = (item) => {
        const filteredList = graduationList.filter(gradList => gradList.id !== item.id);
        setGraduationList(filteredList);
    }
    
    return (
        <GraduationContext.Provider value={{graduationList, addToGraduationList, removeFromGraduationList}}>
            {children}
        </GraduationContext.Provider>
    )
}

export const useGraduation = () => useContext(GraduationContext);
