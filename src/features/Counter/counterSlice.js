import { createSlice } from "@reduxjs/toolkit";

const counterSilce = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase(state, action){
            return state + 1
        },
        decrease(state, action){
            return state - 1
        },
        reset(){
            return 0
        }
    }
})

const {actions, reducer} = counterSilce
export const {increase, decrease, reset} = actions
export default reducer