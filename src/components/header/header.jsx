import { useDispatch, useSelector } from 'react-redux'
import css from './header.module.css'
import { Link } from "react-router-dom"
import { decremented, incremented , redirect, derict } from '../../pages/redux'
import { useState } from 'react'


const Herder = () => {
    const value = useSelector((state) => state.main.value)
    const dispatch = useDispatch()
    const issAuth = useSelector((state) => state.auth.isAuth)
    const handlePlus = () => {
        dispatch(incremented())
        dispatch(redirect())
        setValue(value)
    }
    const handleMinus = () => {
        dispatch(decremented())
        dispatch(derict())
        setValue(value)
    }
    const [sValue, setValue] = useState(value)
    return(
        <div className={css.herder}>
            <Link to ="/"><h1>LOGO</h1></Link>
            <button onClick={handlePlus}>Plus</button>
            {sValue}
            <button onClick={handleMinus}>Minus</button>
            <div>
                <Link to="/">О нас</Link>
                <Link to="/ads">Контакты</Link>
                {
                    issAuth == 'true' || issAuth == true
                    ?
                    <Link to="/ads">Кабинет</Link>
                    :
                    <Link to="/login">Войти</Link>
                }   
            </div>
        </div>
    )
}

export default Herder


