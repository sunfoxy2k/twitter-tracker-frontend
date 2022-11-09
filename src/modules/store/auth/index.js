
import { Auth } from "aws-amplify";
import { login, logout as logoutAction } from "./reducer";
import { persistor } from "../index";

async function getAuthUser(dispatch) {
    const user = await Auth.currentUserInfo();
    if (user) {
        const setUpAction = login(user.username);
        dispatch(setUpAction);
    }
}

async function logout(dispatch) {
    await dispatch(logoutAction())
    await Auth.signOut()
    persistor.purge()
}

export { getAuthUser, logout }