import { createSlice } from "@reduxjs/toolkit"


const issAuth = localStorage.getItem('isAuth')
export const authSlice = createSlice({
    name:'auth',
    
    initialState:{
        isAuth: issAuth ,
    },  
    reducers:{
        redirect: (state) => {
            state.isAuth = true
        },
        derict: (state) => {
            state.isAuth = null
        }
    }
})

export const {redirect, derict} = authSlice.actions  
