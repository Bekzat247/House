import Cards from "../../components/cards/cards"
import Title from "../../components/title/title"
import css from "./ads.module.css"
import { Link } from "react-router-dom"
import Preloader from "../../components/preloader/preloader"
import { useDispatch, useSelector } from "react-redux"
import { derict } from "../redux"
import axios from "axios"




const Ads = () => {
    const dispatch = useDispatch()
    const {isLoading, houses: cards} = useSelector((state) => state.main)

    const handlelogout = () => {
        dispatch(derict())
    }
    const onDelete = (id) => {
        const conf = window.confirm('Вы уверены что хотите удалить обьявление ? Если удалите то данные навсегда будут стерты!')
        if(conf === true){
            axios.delete(`https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1/${id}`)
            // fetch(`https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1/${id}`, {
            //     method: 'DELETE',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            // })
            //     .then((response) => {
            //       if (!response.ok) {
            //         throw new Error('Network response was not ok');
            //       }
            //       console.log('Успешно удалено');
            //     })
            //     .catch((error) => {
            //       console.error('Ошибка при удалении:', error);
            //     })   
                window.location.reload();
                alert('Вы успешно удалили обьявление')
        }else{
            alert('Вы отменили удаление')
        }
    };

    if(isLoading){
        return <Preloader/>
    }
    return (
        <div>
            <div className={css.ads}>
                <Title title="Мои обьявления"/> <Link to="/maker"><button className={css.button}>Добавить</button></Link>
                <button onClick={handlelogout} className={css.button}>LOGOUT</button>
            </div>
            <div className={css.assembly}>
                {
                    cards.map((el) => (
                        <Cards 
                        key={el.id}
                        {...el}
                        onDelete={onDelete}
                        isAdmin={true}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Ads