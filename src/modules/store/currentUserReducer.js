import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email : ''
}

const {actions, reducer} = createSlice({
    name : 'currentUser',
    initialState,
    reducers : {
        setUp : (state, action) => {
            const {payload} = action
            state.email = payload
        },
        reset : (state, actions) => {
            return initialState
        }
    }
})

export default reducer;

export const {setUp, reset} = actions