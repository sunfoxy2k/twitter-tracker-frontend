import {combineReducers} from "@reduxjs/toolkit";
import UI_reducer from "../UI_Component/reducer";
import { trackerAPI } from "../api";
import auth from '../auth/reducer'

const reducer = combineReducers({
    ui: UI_reducer,
    auth,    
    [trackerAPI.reducerPath] : trackerAPI.reducer
});

export default reducer;