import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


function ProtectorRoute({children}) {
    const isAuth = useSelector( (state) => state.auth.isAuth)
    if(!isAuth) {
        return <Navigate to='/login'/>
    }
    return children
}

export default ProtectorRoute