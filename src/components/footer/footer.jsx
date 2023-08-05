import { useEffect, useState } from "react"
import Cards from "../cards/cards"
import Title from "../title/title"
import "./footer.css"
import img2 from "./image2.png"
import Preloader from "../preloader/preloader"



const Footer = () => {
    const url = 'https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1'
    const [cards, setCards] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setCards(data)
            setLoading(false)
        }
        fetchData()
    }, [])
    const onDelete = (id) => {
        let conf = window.confirm('Вы уверены что хотите удалить обьявление ? Если удалите то данные навсегда будут стерты!')
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
    
    return (
        <div>
            {
                isLoading
                ?
                <Preloader />
                :
                <div>
                    <div className="ads">
                        <Title title="Последние обьяления"/>
                        <div className="assembly">
                            {
                                cards.map((el, index) => (
                                    <Cards 
                                    key={el.id}
                                    {...el}
                                    onDelete={onDelete}
                                    
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="info">
                        <Title title="О нас"/>
                        <div className="abtus">
                            <img src={img2} alt="" />
                            <div>
                                <h1>Кто мы?</h1>
                                <p>Президентская кампания Бориса Ельцина на выборах 1996 года началась де-юре 15 февраля 1996 года, когда действовавший президент Российской Федерации объявил о своём решении баллотироваться на второй президентский срок. Несмотря на свой возраст (ему было 65 лет на момент избрания), серьёзные проблемы со здоровьем и низкий предвыборный рейтинг, Ельцин решил принять участие в Президентская кампания Бориса Ельцина на выборах 1996 года началась де-юре 15 февраля 1996 года, когда действовавший президент Российской Федерации объявил о своём решении баллотироваться</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="footer1"><h1>Footer</h1></div>
        </div>
    )
}
 
export default Footer