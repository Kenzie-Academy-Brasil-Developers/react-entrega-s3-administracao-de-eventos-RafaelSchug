import api from "../../services/api";
import { useEffect, useState } from "react";

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
    

    return (
        <div>
            {drinks.map((item, index)=> {
                return (
                    <div key={index}>
                        <h4>{item.name}</h4>
                        <img src={item.image_url} alt={item.name} style={{height: '100px'}} />
                        <p>Fabricação: {item.first_brewed}</p>
                        <p>Litros: {item.volume.value}L</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;