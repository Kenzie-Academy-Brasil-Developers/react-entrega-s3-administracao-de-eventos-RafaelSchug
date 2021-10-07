import { Container } from "./style";
import { useState } from "react";
import { useSearch } from "../../providers/search";
import {FaWindowClose} from 'react-icons/fa';

const Search = () => {

    const {filterList} = useSearch();
    const [input, setInput] = useState('');

    const handleChange = e => {
        filterList(e.target.value); setInput(e.target.value)
    }

    const handleClear = () => {
        setInput('');
        filterList('');
    }
    
    return (
        <Container>
            <div className='input_content'>
                <input type="text" placeholder='Search drink' value={input} onChange={handleChange}/>
                {input.length > 0 && <FaWindowClose onClick={handleClear}/>}
            </div>
        </Container>
    )
}

export default Search;