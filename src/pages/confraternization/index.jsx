import DrinkCard from '../../components/DrinkCard';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import { useConfraternization } from '../../providers/confraternization';

const Confraternization = () => {

    const {confraternizationList, removeFromConfraternizationList} = useConfraternization();

    return (
        <>
            <Header></Header>
            <div>Confraternization</div>
            <div>Confraternization List:</div>
            <MainContainer>
                {confraternizationList.map((item, index)=>{
                    return (
                        <DrinkCard key={index}>
                            <h4>{item.name}</h4>
                            <img src={item.image_url} alt={item.name} />
                            <p>Quantidade: {item.quantity}</p>
                            <button onClick={() => removeFromConfraternizationList(item)}>Remover</button>
                        </DrinkCard>
                    )
                })}
            </MainContainer>
        </>
    )
}

export default Confraternization;