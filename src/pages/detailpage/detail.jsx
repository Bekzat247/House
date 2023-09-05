import { useEffect, useState } from 'react';
import Herder from '../../components/header/header'
import Title from '../../components/title/title'
import css from './detail.module.css'
import { Link, useParams } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Preloader from '../../components/preloader/preloader';
import Error from '../../components/error/error';
import Api from '../../Api/Api';




function Detail() {

  const [comp, setComp] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const params = useParams()

  useEffect(() => {
    const fetchData = () => {
      Api.getHouseById(params.id)
        .then(resp => {
          setComp(resp.data)
          console.log(resp.data);
        })
        .finally(setLoading(false))
        .catch((e) => setError(e))
    } 
    fetchData()
  }, [])


  
  if (isLoading) {
    return <Preloader />
  }
  if (error){
    return <Error />
  }
  return (
    <div >
      <div className={css.wrapper}>
        <Link to='/'>GO BACK</Link>
        <div>
          <div className={css.left_div}>
            <Carousel showIndicators={false} showStatus={false} infiniteLoop={true}>
              <div>
                <img src={comp.image} />
              </div>
              <div>
                <img src={comp.image} />
              </div>
              <div>
                <img src={comp.image} />
              </div>
            </Carousel>
          </div>
          <div className={css.right_div}>
            <Title title={comp.title} />
            <Title title={'Цена:' + comp.price + '$'} />
            <p>{comp.desc}</p>
          </div>
        </div>
        <button>Позвонить</button>
      </div>
    </div>
  )
}

export default Detail