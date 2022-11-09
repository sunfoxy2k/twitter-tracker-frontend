import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin : false,
    userName : ''
}

const {actions, reducer} = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, action) => {
            const {payload} = action
            state.isLogin = true  
            state.userName = payload
        },
        logout : (state, actions) => {
            return initialState
        }
    }
})

export default reducer;

export const {login, logout} = actions