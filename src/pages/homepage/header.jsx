import { Link } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import './header.css'
const Header = () => {
    return (
        <div>
            <div className="herder">
                <Link to="/"><h1>LOGO</h1></Link>
                <Link to="/login">Войти</Link>
            </div>
            <Footer/>
        </div>
    )
}
export default Header