import Cards from "../../components/cards/cards"
import Title from "../../components/title/title"
import Header from "../../components/header/header"
import css from "./ads.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import Preloader from "../../components/preloader/preloader"


const Ads = () => {
    const url = 'https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1'
    const [ads, setAds] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {setAds(data)})
            .finally(() => {setLoading(false)})
    }, [])

    const onDelete = (id) => {
        const conf = window.confirm('Вы уверены что хотите удалить обьявление ? Если удалите то данные навсегда будут стерты!')
        if(conf === true){
            fetch(`https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  console.log('Успешно удалено');
                })
                .catch((error) => {
                  console.error('Ошибка при удалении:', error);
                })   
                window.location.reload();
                alert('Вы успешно удалили обьявление')
        }else{
            alert('Вы отменили удаление')
        }
        console.log(id)
    };

    if(isLoading){
        return <Preloader/>
    }
    return (
        <div>
            <Header/>
            <div className={css.ads}>
                <Title title="Мои обьявления"/> <Link to="/maker"><button className={css.button}>Добавить</button></Link>
            </div>
            <div className={css.assembly}>
                {
                    ads.map((el, index) => (
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