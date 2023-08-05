
import "./login.css"
import Title from "../../components/title/title"
import Herder from "../../components/header/header"
import { useNavigate } from "react-router-dom"
import { useState } from "react"



const Login = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const [pswrdValue, setpswrdValue] = useState('')
    const submit = (e) => {
        e.preventDefault()
        // console.log(e.target.value);
        console.log(value);
        console.log(pswrdValue);
        {value && pswrdValue == 'admin'
        ?
        navigate('/ads')
        :
            alert('Login or password is incorrect')
        }
        setValue('')
        setpswrdValue('')
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handlepswrdChange = (e) => {
        setpswrdValue(e.target.value)
    }
    return(
        <div>
            <Herder/>
            <Title title="Войти"/>
            <form onSubmit={submit}>
                <label>
                    <p>Login</p>
                    <input type="text" placeholder="login" name="text" onChange={handleChange} value={value}/>
                </label>
                <label>
                    <p>password</p>
                    <input type="password" placeholder="password" name="password" onChange={handlepswrdChange} value={pswrdValue}/>
                </label>
                <label className="btn">
                    <button>Войти</button>
                </label>
            </form>
            <div className="footer"></div>

        </div>
    )
}

export default Login
