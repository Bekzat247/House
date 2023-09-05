
import { useNavigate } from "react-router-dom"
import css from "./cads.module.css"
import { useDispatch } from "react-redux";
import { deleteHouses } from "../../pages/redux/AsuncThunk";


const Cards = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onDelete = (id) => {
        let conf = window.confirm('Вы уверены что хотите удалить обьявление ? Если удалите то данные навсегда будут стерты!')
        if(conf === true){
            // fetch(`https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1/${id}`, {
            //     method: 'DELETE',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            // })
            dispatch(deleteHouses(props.id))
            // Api.deleteHouse(props.id)
                // .then((response) => {
                //   if (!response.ok) {
                //     throw new Error('Network response was not ok');
                //   }
                //   console.log('Успешно удалено');
                // })
                // .catch((error) => {
                //   console.error('Ошибка при удалении:', error);
                // })   
                // window.location.reload();
                // alert('Вы успешно удалили обьявление')
        }else{
            alert('Вы отменили удаление')
        }
        console.log(id)
    };


    const handleDetail = () => {
        navigate(('/detail/'+ props.id))
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
                    <button onClick={onDelete}>Удалить</button>
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