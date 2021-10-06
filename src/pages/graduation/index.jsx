import DrinkCard from "../../components/DrinkCard";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { useGraduation } from "../../providers/graduation";

const Graduation = () => {

    const {graduationList, removeFromGraduationList} = useGraduation();

    return (
        <>
            <Header selected='graduation'></Header>
            <MainContainer>
                {graduationList.map((item, index) => {
                    return (
                        <DrinkCard key={index}>
                            <h4>{item.name}</h4>
                            <img src={item.image_url} alt={item.name} />
                            <p>Quantidade: {item.quantity}</p>
                            <button onClick={() => removeFromGraduationList(item)}>Remover</button>
                        </DrinkCard>
                    )
                })}
            </MainContainer>
        </>
    )
}

export default Graduation;