
import { Auth } from "aws-amplify";
import { login, logout as logoutAction } from "./reducer";

async function getAuthUser(dispatch) {
    const user = await Auth.currentUserInfo();
    if (user) {
        const setUpAction = login(user.username);
        dispatch(setUpAction);
    }
}

async function logout(dispatch) {
    dispatch(logoutAction())
    Auth.signOut()
}

export { getAuthUser, logout }