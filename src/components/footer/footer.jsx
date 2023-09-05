import { useEffect, useState } from "react"
import Cards from "../cards/cards"
import Title from "../title/title"
import "./footer.css"
import img2 from "./image2.png"
import Preloader from "../preloader/preloader"
import { useSelector } from "react-redux"
import Api from "../../Api/Api"


 
const Footer = () => {
    const {isLoading, houses: cards} = useSelector((state) => state.main)
    console.log(cards);    
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