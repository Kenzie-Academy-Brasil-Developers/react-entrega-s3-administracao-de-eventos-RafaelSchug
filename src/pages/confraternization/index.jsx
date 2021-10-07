import DrinkCard from '../../components/DrinkCard';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import { useConfraternization } from '../../providers/confraternization';
import {FaMinusSquare} from 'react-icons/fa'
import ConfratBackground from '../../assets/imgs/confrat_bg.svg';

const Confraternization = () => {

    const {confraternizationList, removeFromConfraternizationList} = useConfraternization();

    return (
        <>
            <Header selected='confraternization'></Header>
            <MainContainer>
                {confraternizationList.length > 0 ? (
                    confraternizationList.map((item, index)=>{
                        return (
                            <DrinkCard key={index}>
                                <h4>{item.name}</h4>
                                <img src={item.image_url} alt={item.name} />
                                <p>First Brewed in: {item.first_brewed}</p>
                                <p>Volume: {item.volume.value}L</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={()=> removeFromConfraternizationList(item)}><FaMinusSquare/>Remove</button>
                    
                            </DrinkCard>
                        )
                    })
                ) : (
                    <div className='placeholder'>
                        <h4>This list looks empty</h4>
                        <img src={ConfratBackground} alt="" />
                    </div>
                )}


            </MainContainer>
        </>
    )
}

export default Confraternization;