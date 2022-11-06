
import { Auth } from "aws-amplify";
import { setUp } from "../store/currentUserReducer";

async function getAuthUser(dispatch) {
    const user = await Auth.currentUserInfo();
    if (user) {
        const setUpAction = setUp(user.attributes.email);
        dispatch(setUpAction);
    }
}

export { getAuthUser }