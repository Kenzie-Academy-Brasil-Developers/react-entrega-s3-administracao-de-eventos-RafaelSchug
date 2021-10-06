import api from "../../services/api";
import { useEffect, useState } from "react";
import { useWedding } from "../../providers/wedding";
import { useGraduation } from "../../providers/graduation";
import { useConfraternization } from "../../providers/confraternization";
import MainContainer from "../../components/MainContainer";
import DrinkCard from "../../components/DrinkCard";
import Header from "../../components/Header";


const Home = () => {

    const [drinks, setDrinks] = useState([])


    useEffect(()=> {
        api.get()
            .then(res => {
                const arrayOfDrinks = res.data;
                setDrinks(arrayOfDrinks);
                console.log(arrayOfDrinks);
            })
            .catch(err => console.log(err));
    }, [])

    const {addToWeddingList} = useWedding();
    const {addToGraduationList} = useGraduation();
    const {addToConfraternizationList} = useConfraternization();

    return (
        <>
        <Header selected='home'></Header>
        <MainContainer>
            {drinks.map((item, index)=> {
                return (
                    <DrinkCard key={index}>
                        <h4>{item.name}</h4>
                        <img src={item.image_url} alt={item.name} />
                        <p>Fabricação: {item.first_brewed}</p>
                        <p>Litros: {item.volume.value}L</p>
                        <div className='add-to__container'>
                            <button onClick={() => addToConfraternizationList(item)}>Add to Confraternization List</button>
                            <button onClick={() => addToGraduationList(item)}>Add to Graduation List</button>
                            <button onClick={() => addToWeddingList(item)}>Add to Wedding List</button>
                        </div>
                    </DrinkCard>
                )
            })}
        </MainContainer>
        </>
    )
}

export default Home;