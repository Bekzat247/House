import { useEffect, useState } from 'react';
import Herder from '../../components/header/header'
import Title from '../../components/title/title'
import css from './detail.module.css'
import { Link, useLocation } from 'react-router-dom'

function Detail(props) 
    {const location = useLocation();
    const info = location.state.id
    const url = 'https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1/' + info
    const [comp, setComp] = useState([])
    useEffect(() => {
      const fetchData = async () => {
          const res = await fetch(url)
          const data = await res.json()
          setComp(data)
      }
      fetchData()
  }, [])

  console.log(comp);

  return (
    <div >
        <Herder />
        <div className={css.wrapper}>
            <Link to='/'>GO BACK</Link>
            <div>
              <div className={css.left_div}>
                  <img src={comp.image}/>
                  <div className= {css.slider}></div>
              </div>
              <div className={css.right_div}>
                <Title title="Продаю дом 5км в Нарыне"/>
                <Title title={'Цена:' + info + '$'}/>
                <Title title={comp.desc}/>
              </div>
            </div>
            <button>Позвонить</button>
        </div>
    </div>
  )
}

export default Detail