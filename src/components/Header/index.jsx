import { useHistory } from "react-router-dom"
import { Container } from "./style";
import homeIcon from '../../assets/imgs/home.png';
import confratIcon from '../../assets/imgs/confraternization.png'
import graduationIcon from '../../assets/imgs/graduation.png'
import weddingIcon from '../../assets/imgs/wedding.png'
import { useWedding } from "../../providers/wedding";
import { useConfraternization } from "../../providers/confraternization";
import { useGraduation } from "../../providers/graduation";

const Header = ({selected}) => {


    const history = useHistory();

    const handleRoute = (path) => {
        history.push(path)
    }

    const {confraternizationList} = useConfraternization();
    const {graduationList} = useGraduation();
    const {weddingList} = useWedding();

    const confraternizationTotalItens = confraternizationList.reduce((acc, item) => acc + item.quantity, 0);
    const graduationTotalItens = graduationList.reduce((acc, item) => acc + item.quantity, 0);
    const weddingTotalItens = weddingList.reduce((acc, item) => acc + item.quantity, 0);
    
    return(
        <Container >
            <ul>
                <li onClick={() => handleRoute('/')} className={selected === 'home' ? 'selected' : ''}>
                    <img src={homeIcon} alt="" /><span>Home</span>
                </li>
                <li onClick={() => handleRoute('/confraternization')}  className={selected === 'confraternization' ? 'selected' : ''}>
                    <div className='list_counter'>{confraternizationTotalItens}</div>
                    <img src={confratIcon} alt="" /><span>Confraternization</span>
                </li>
                <li onClick={() => handleRoute('/graduation')}  className={selected === 'graduation' ? 'selected' : ''}>
                    <div className='list_counter'>{graduationTotalItens}</div>
                    <img src={graduationIcon} alt="" /><span>Graduation</span>
                </li>
                <li onClick={() => handleRoute('/wedding')}  className={selected === 'wedding' ? 'selected' : ''}>
                    <div className='list_counter'>{weddingTotalItens}</div>
                    <img src={weddingIcon} alt="" /><span>Wedding</span>
                </li>
            </ul>
            
        </Container>
    )
}

export default Header;