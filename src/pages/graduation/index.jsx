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
                                    <p>First brewed in: {item.first_brewed}</p>
                                    <p>Volume: {item.volume.value}L</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={()=> removeFromGraduationList(item)}><FaMinusSquare/>Remove</button>
                        
                                </DrinkCard>
                            )
                        })
                ) : (
                    <div className='placeholder'>
                        <h4>This list looks empty</h4>
                        <img src={Graduation_bg} alt="" />
                    </div>
                )}
            </MainContainer>
        </>
    )
}

export default Graduation;