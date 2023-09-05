import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { mainSlice } from './mainSlice'
import { authSlice } from './authSlice'





const reducers = combineReducers({
    main : mainSlice.reducer,
    auth : authSlice.reducer,
})

export const {incremented, decremented, setHouses} = mainSlice.actions
export const {redirect, derict} = authSlice.actions  

export const store = configureStore({
    reducer: reducers,
});

store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem('isAuth', state.auth.isAuth)
})