import DrinkCard from "../../components/DrinkCard";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { useGraduation } from "../../providers/graduation";
import {FaMinusSquare} from 'react-icons/fa';
import Graduation_bg from '../../assets/imgs/grad_bg.svg';

const Graduation = () => {

    const {graduationList, removeFromGraduationList} = useGraduation();

    return (
        <>
            <Header selected='graduation'></Header>
            <MainContainer>
                {graduationList.length > 0 ? (
                        graduationList.map((item, index)=>{
                            return (
                                <DrinkCard key={index}>
                                    <h4>{item.name}</h4>
                                    <img src={item.image_url} alt={item.name} />
                                    <p>Fabricação: {item.first_brewed}</p>
                                    <p>Litros: {item.volume.value}L</p>
                                    <p>Quantidade: {item.quantity}</p>
                                    <button onClick={()=> removeFromGraduationList(item)}><FaMinusSquare/>Remover</button>
                        
                                </DrinkCard>
                            )
                        })
                ) : (
                    <div className='placeholder'>
                        <h4>Nenhum ítem adicionado</h4>
                        <img src={Graduation_bg} alt="" />
                    </div>
                )}
            </MainContainer>
        </>
    )
}

export default Graduation;