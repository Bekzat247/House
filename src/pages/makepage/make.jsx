import Herder from "../../components/header/header"
import Title from "../../components/title/title"
import { useNavigate } from "react-router-dom"
import css from "./make.module.css"
import { useState } from "react"


const Maker = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [number, setNumber] = useState('')
    const [isSending, setSending] = useState(false)
    const navigate = useNavigate()

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
        try {
            const res = await fetch('https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if(res.status === 201){
                alert('Поздровляю, вы успешно создали обьявление')
                navigate('/ads')
            }else{
                throw new Error()
            }
        } catch (error) {
            alert('При выполнении заппоса произошла ошибка. Пожалуйста повторите запрос')
            setSending(false)
        }    
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
            <Herder/>
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
                    {/* <div><Link className={css.a}>Close</Link><Link><button>Save</button></Link></div> */}
                </label>
            </form>
            <div className={css.footer}></div>
        </div>
    )
}

export default Maker