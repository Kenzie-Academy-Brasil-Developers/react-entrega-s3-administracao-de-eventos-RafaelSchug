import { useHistory } from "react-router-dom"
import { Container } from "./style";
import homeIcon from '../../assets/imgs/home.png';
import confratIcon from '../../assets/imgs/confraternization.png'
import graduationIcon from '../../assets/imgs/graduation.png'
import weddingIcon from '../../assets/imgs/wedding.png'

const Header = ({selected}) => {


    const history = useHistory();

    const handleRoute = (path) => {
        history.push(path)
    }


    return(
        <Container >
            <ul>
                <li onClick={() => handleRoute('/')} className={selected === 'home' ? 'selected' : ''}>
                    <img src={homeIcon} alt="" /><span>Home</span>
                </li>
                <li onClick={() => handleRoute('/confraternization')}  className={selected === 'confraternization' ? 'selected' : ''}>
                    <img src={confratIcon} alt="" /><span>Confraternization</span>
                </li>
                <li onClick={() => handleRoute('/graduation')}  className={selected === 'graduation' ? 'selected' : ''}>
                    <img src={graduationIcon} alt="" /><span>Graduation</span>
                </li>
                <li onClick={() => handleRoute('/wedding')}  className={selected === 'wedding' ? 'selected' : ''}>
                    <img src={weddingIcon} alt="" /><span>Wedding</span>
                </li>
            </ul>
            
        </Container>
    )
}

export default Header;