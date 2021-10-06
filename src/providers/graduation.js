import { createContext, useContext, useState } from "react";


export const GraduationContext = createContext();

export const GraduationProvider = ({children}) => {

    const [graduationList, setGraduationList] = useState([]);

    const addToGraduationList = (item) => {
        setGraduationList([...graduationList, item]);
    }

    const removeFromGraduationList = (item) => {
        console.log('removing from graduation list');
    }
    
    return (
        <GraduationContext.Provider value={{graduationList, addToGraduationList, removeFromGraduationList}}>
            {children}
        </GraduationContext.Provider>
    )
}

export const useGraduation = () => useContext(GraduationContext);
