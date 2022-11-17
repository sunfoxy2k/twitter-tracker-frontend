import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const modalSlice = createSlice({
    name : 'modal',
    initialState,
    reducers : {
        closeModal : (state, action) => {
            state = null
        },
        openModal : (state, {payload}) => {
            state = payload
        }
    }
})

const { actions, reducer} = modalSlice;

export const {closeModal , openModal} = actions;

export default reducer;