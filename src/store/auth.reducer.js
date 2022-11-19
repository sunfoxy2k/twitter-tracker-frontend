import { combineReducers, createSlice } from "@reduxjs/toolkit";

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


const {actions : actionsForJWT , reducer : reducerForJWT} = createSlice({
    name : 'jwt',
    initialState: '',
    reducers : {
        setup : (state, action ) => {
            const {payload} =action
            return payload
        },
        reset : (state, action) => {
            return ''
        }
    }
})

export default reducer;
export {reducerForJWT};

export const {login, logout} = actions
export const {setup, reset} = actionsForJWT