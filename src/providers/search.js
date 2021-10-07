import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {

    const [filteredItems, setFilteredItems] = useState([]);


    const filterList = (string) => {
        const list = JSON.parse(localStorage.getItem('@drinks_list'));
        const filteredList = list.filter(item => item.name.toLowerCase().includes(string.toLowerCase()));
        setFilteredItems(filteredList);
    }

    return (
        <SearchContext.Provider value={{filteredItems, setFilteredItems, filterList}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext);