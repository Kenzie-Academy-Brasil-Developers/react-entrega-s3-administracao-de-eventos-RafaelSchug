import MainContainer from "../../components/MainContainer";
import DrinkCard from "../../components/DrinkCard";
import { useWedding } from "../../providers/wedding";
import Header from "../../components/Header";
import {FaMinusSquare} from 'react-icons/fa';
import Wedding_bg from '../../assets/imgs/wedding_bg.svg';

const Wedding = () => {

    const {weddingList, removeFromWeddingList} = useWedding();

    return (
        <>
            <Header selected='wedding'></Header>
            <MainContainer>
                {weddingList.length > 0 ? (
                        weddingList.map((item, index)=>{
                            return (
                                <DrinkCard key={index}>
                                    <h4>{item.name}</h4>
                                    <img src={item.image_url} alt={item.name} />
                                    <p>Quantidade: {item.quantity}</p>
                                    <button onClick={()=> removeFromWeddingList(item)}><FaMinusSquare/>Remover</button>
                        
                                </DrinkCard>
                            )
                        })
                ) : (
                    <div className='placeholder'>
                        <h4>Nenhum ítem adicionado</h4>
                        <img src={Wedding_bg} alt="" />
                    </div>
                )}
            </MainContainer>
        </>
    )
}

export default Wedding;