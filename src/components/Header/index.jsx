import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header style={{display: 'flex', gap:'10px', justifyContent:'center'}}>
            <Link to='/'>Home</Link>
            <Link to='/confraternization'>Confraternization</Link>
            <Link to='/graduation'>Graduation</Link>
            <Link to='/wedding'>Wedding</Link>
        </header>
    )
}

export default Header;