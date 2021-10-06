import MainContainer from "../../components/MainContainer";
import DrinkCard from "../../components/DrinkCard";
import { useWedding } from "../../providers/wedding";
import Header from "../../components/Header";

const Wedding = () => {

    const {weddingList, removeFromWeddingList} = useWedding();

    return (
        <>
            <Header selected='wedding'></Header>
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