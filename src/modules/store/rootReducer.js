import {combineReducers} from "@reduxjs/toolkit";
import UI_reducer from "../UI_Component/reducer";

const reducer = combineReducers({
    ui: UI_reducer
});

export default reducer;