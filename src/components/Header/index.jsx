import { Link } from "react-router-dom"
import { Container } from "./style";

const Header = () => {
    return(
        <Container >
            <Link to='/'>Home</Link>
            <Link to='/confraternization'>Confraternization</Link>
            <Link to='/graduation'>Graduation</Link>
            <Link to='/wedding'>Wedding</Link>
        </Container>
    )
}

export default Header;