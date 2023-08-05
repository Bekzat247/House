import css from './header.module.css'
import { Link } from "react-router-dom"


const Herder = () => {
    return(
        <div className={css.herder}>
            <Link to ="/"><h1>LOGO</h1></Link>
            <div>
                <Link to="/">О нас</Link>
                <Link to="/ads">Контакты</Link>
                <Link to="/login">Войти</Link>
            </div>
        </div>
    )
}

export default Herder


