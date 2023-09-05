
import "./login.css"
import Title from "../../components/title/title"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { redirect as LoginRedux} from "../redux"



const Login = () => {
    const [value, setValue] = useState('')
    const [pswrdValue, setpswrdValue] = useState('')
    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()

        if(value && pswrdValue === 'admin'){
            dispatch(LoginRedux())         
        }else{
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
