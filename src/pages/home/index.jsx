import api from "../../services/api";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useWedding } from "../../providers/wedding";
import { useGraduation } from "../../providers/graduation";
import { useConfraternization } from "../../providers/confraternization";


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
        <Header></Header>
        <div>Home</div>
        <div>
            {drinks.map((item, index)=> {
                return (
                    <div key={index}>
                        <h4>{item.name}</h4>
                        <img src={item.image_url} alt={item.name} style={{height: '100px'}} />
                        <p>Fabricação: {item.first_brewed}</p>
                        <p>Litros: {item.volume.value}L</p>
                        <button onClick={() => addToWeddingList(item)}>Add to Wedding List</button>
                        <button onClick={() => addToGraduationList(item)}>Add to Graduation List</button>
                        <button onClick={() => addToConfraternizationList(item)}>Add to Confraternization List</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Home;