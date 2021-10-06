import MainContainer from "../../components/MainContainer";
import DrinkCard from "../../components/DrinkCard";
import Header from "../../components/Header";
import { useWedding } from "../../providers/wedding";

const Wedding = () => {

    const {weddingList, removeFromWeddingList} = useWedding();

    return (
        <>
            <Header></Header>
            <div>Wedding</div>
            <div>Wedding List:</div>
            <MainContainer>
                {weddingList.map((item, index) => {
                    return (
                        <DrinkCard key={index}>
                            <h4>{item.name}</h4>
                            <img src={item.image_url} alt={item.name} />
                            <p>Quantidade: {item.quantity}</p>
                            <button onClick={()=> removeFromWeddingList(item)}>Remover</button>
                        </DrinkCard>
                    )
                })}
            </MainContainer>
        </>
    )
}

export default Wedding;