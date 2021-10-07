import api from "../../services/api";
import { useEffect, useState } from "react";
import { useWedding } from "../../providers/wedding";
import { useGraduation } from "../../providers/graduation";
import { useConfraternization } from "../../providers/confraternization";
import MainContainer from "../../components/MainContainer";
import DrinkCard from "../../components/DrinkCard";
import Header from "../../components/Header";
import {SiAddthis} from 'react-icons/si';
import { useSearch } from "../../providers/search";
import Search from "../../components/Search";


const Home = () => {

    const [drinks, setDrinks] = useState(JSON.parse(localStorage.getItem('@drinks_list')) || [])
    const {filteredItems, setFilteredItems} = useSearch([]);


    useEffect(()=> {
        if(!localStorage.getItem('@drinks_list')){
            api.get()
            .then(res => {
                const arrayOfDrinks = res.data;
                setDrinks(arrayOfDrinks);
                console.log(arrayOfDrinks);
                localStorage.setItem('@drinks_list', JSON.stringify(arrayOfDrinks));
            })
            .catch(err => console.log(err));
        } 

    }, [])

    useEffect(()=> {
        if(filteredItems.length > 0){
            setDrinks(filteredItems);
        } 
    }, [filteredItems])

    useEffect(()=> {
        return () => {
            setFilteredItems([]);
        }
    }, [setFilteredItems])

    const {addToWeddingList} = useWedding();
    const {addToGraduationList} = useGraduation();
    const {addToConfraternizationList} = useConfraternization();

    return (
        <>
        <Header selected='home'></Header>
        <MainContainer>
            <Search></Search>
            {drinks.map((item, index)=> {
                return (
                    <DrinkCard key={index}>
                        <h4>{item.name}</h4>
                        <img src={item.image_url} alt={item.name} />
                        <p>First brewed in: {item.first_brewed}</p>
                        <p>Volume: {item.volume.value}L</p>
                        <div className='add-to__container'>
                            <button onClick={() => addToWeddingList(item)}><SiAddthis/> Wedding</button>
                            <button onClick={() => addToGraduationList(item)}><SiAddthis/>  Graduation</button>
                            <button onClick={() => addToConfraternizationList(item)}><SiAddthis/> Confraternization</button>
                        </div>
                    </DrinkCard>
                )
            })}
        </MainContainer>
        </>
    )
}

export default Home;