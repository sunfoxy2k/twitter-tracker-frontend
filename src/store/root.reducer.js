import {combineReducers} from "@reduxjs/toolkit";
import UI_reducer from "@/modules/UI_Component/reducer";
import { trackerAPI } from "@/api/index";
import auth, {reducerForJWT} from './auth.reducer'
import {logout as logoutAction} from './auth.reducer'

const appReducer = combineReducers({
    ui: UI_reducer,
    auth,
    jwt : reducerForJWT,
    [trackerAPI.reducerPath] : trackerAPI.reducer
});

const rootReducer = (state, action) => {
    if (logoutAction.match(action)) {
        state = {};
    }

    return appReducer(state, action)
}

export default rootReducer;