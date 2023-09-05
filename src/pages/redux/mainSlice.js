import { createSlice } from "@reduxjs/toolkit"
import { createHouses, deleteHouses, fetchHouses } from "./AsuncThunk"



export const mainSlice = createSlice({
    name:'main',
    initialState:{
        value:1000,
        isLoading: true,
        houses : [],
        statusOfCReatingHouse: 'idle'
    },
    reducers: {
        incremented: (state) => {
            state.value +=10
        },
        decremented: state => {
            state.value -= 10
        },
        setStatusOfFulfiledHouses: (state) => {
            state.statusOfCReatingHouse = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHouses.fulfilled, (state, action) => {
            state.houses = action.payload
            state.isLoading = false
        })
        builder.addCase(deleteHouses.fulfilled, (state, action) => {
            state.houses = state.houses.filter((item) => item.id !== action.payload.data.id)
        })
        builder.addCase(createHouses.pending, (state, action) => {
            state.statusOfCReatingHouse = 'loading'
        })

        builder.addCase(createHouses.fulfilled, (state, action) => {
            state.houses.push(action.payload.data)
            state.statusOfCReatingHouse = 'success'
        })  
        builder.addCase(createHouses.rejected, (state, action) => {
            state.statusOfCReatingHouse = 'error'
        })
    }
})

export const {incremented, decremented,setStatusOfFulfiledHouses } = mainSlice.actions