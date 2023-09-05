import Herder from "../header/header"
import css from "./error.module.css"
import { Link } from "react-router-dom"



function Error() {
    const handleReload = () => {
        window.location.reload()
    }
    return (
        <div>
            <div className={css.wrapper}>
                <h1>Что-то пошло не так!</h1>
                <h2>Пожалуйста перезагрузите или попробуцте позже</h2>
                <div className={css.actions}>
                    <Link to='/'><button>Home</button></Link>
                    <button onClick={handleReload}>Reload</button>
                </div>
            </div>

        </div>
    )
}

export default Error