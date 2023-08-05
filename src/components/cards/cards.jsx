
import { useNavigate } from "react-router-dom"
import css from "./cads.module.css"


const Cards = (props) => {
    const navigate = useNavigate()
    const handleDelete = () => {
        props.onDelete(props.id)
    }
    // let a = props.id
    const handleDetail = () => {
        navigate(('/detail/'+ props.id), { state: { id: props.id }})
    }
    return(
        <div className={css.box}>
            <div className={css.imgWrapper}>
                <img src={props.image} alt="img" />
            </div>
            <div className={css.div1}>
                <p>{props.title}</p>
                <p>{props.price}$</p>
                {
                    props.isAdmin
                    ?
                    <button onClick={handleDelete}>Удалить</button>
                    : 
                    <button onClick={handleDetail}>Подробнее</button>

                }
                {/* <button>{props.title}</button>
                <button onClick={handleDelete}>Удалить</button> */}
            </div>
        </div>
    )
}

export default Cards