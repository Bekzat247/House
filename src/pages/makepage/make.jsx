
import Title from "../../components/title/title"
import { useNavigate } from "react-router-dom"
import css from "./make.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setStatusOfFulfiledHouses } from "../redux/mainSlice"
import { createHouses } from "../redux/AsuncThunk"


const Maker = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [number, setNumber] = useState('')
    const [isSending, setSending] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {statusOfCReatingHouse} = useSelector((state) => state.main)
    useEffect(() => {
        if(statusOfCReatingHouse === 'success'){
            navigate('/ads')
            dispatch(setStatusOfFulfiledHouses())
        }else if(statusOfCReatingHouse ==='error'){
            alert('При выполнении заппоса произошла ошибка. Пожалуйста повторите запрос')
            setSending(false)
            dispatch(setStatusOfFulfiledHouses())
        }
    }, [statusOfCReatingHouse])

    const handleSave = async (e) => {
        e.preventDefault()
        setSending(true)
        console.log(name);
        console.log(image);
        console.log(desc);
        console.log(number);
        const data = {
            title: name, 
            price: number, 
            image: image,
            desc: desc,
        }
        
        dispatch(createHouses   (data))
        // try {
            // const res = await fetch('https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1', {
            //     method: 'POST',
            //     body: JSON.stringify(data),
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // })
            // if(res.status === 201){
            //     alert('Поздровляю, вы успешно создали обьявление')
            //     navigate('/ads')
            // }else{
            //     throw new Error()
            // }
        // } catch (error) {
        //     alert('При выполнении заппоса произошла ошибка. Пожалуйста повторите запрос')
        //     setSending(false)
        // }    
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleImageChange = (e) => {
        setImage(e.target.value)
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }
    return (
        <div>
            <Title title="Создать обьявление"/>
            <form className={css.form} onSubmit={handleSave}>
                <label>
                    <p>Название</p>
                    <input 
                        onChange={handleNameChange}
                        required 
                        type="text" 
                        name="name" 
                        value={name}
                    />
                </label>
                <label>
                    <p>Description</p>
                    <p className="infoP">The description will be included on the item's detail page underneath its image.</p>
                    <textarea 
                        type="text"
                        placeholder="Description"
                        onChange={handleDescChange} 
                        value={desc}
                    />
                </label>
                <label>
                    <p>Картинка</p>
                    <input 
                        required 
                        type="url" 
                        name="image" 
                        placeholder="Картинка" 
                        onChange={handleImageChange} 
                        value={image}
                    />
                </label>
                <label>
                    <p>Цена</p>
                    <p>This link will be hidden from public.</p>
                    <input 
                        required 
                        type="number" 
                        name="price" 
                        onChange={handleNumberChange} 
                        value={number}
                    />
                </label>
                <label className="lebelbtn">
                    <button disabled={isSending}>Save</button>
                </label>
            </form>
            <div className={css.footer}></div>
        </div>
    )
}

export default Maker