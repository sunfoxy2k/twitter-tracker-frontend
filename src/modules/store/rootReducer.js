import {combineReducers} from "@reduxjs/toolkit";
import UI_reducer from "../UI_Component/reducer";
import { trackerAPI } from "./api";
import auth from './auth/reducer'
import {logout} from './auth/reducer'

const appReducer = combineReducers({
    ui: UI_reducer,
    auth,    
    [trackerAPI.reducerPath] : trackerAPI.reducer
});

const rootReducer = (state, action) => {
    if (logout.match(action)) {
        state = {};
    }

    return appReducer(state, action)
}

export default rootReducer;