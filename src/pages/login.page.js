import { useRouter } from "next/router";
import { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../modules/store/authReducer";
import { Auth } from "aws-amplify";


const LoginPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.auth.isLogin)


    useEffect(() => {
        async function setUpAuthUser() {
            const user = await Auth.currentUserInfo();
            if (user && user.username) {
                const setUpAction = login(user.username);
                dispatch(setUpAction);
                router.back()
            }
        }

        if (isLogin) {
            router.back()
        } else {
            setUpAuthUser()
        }
    }, [isLogin])

    return (
        <div>Loading...</div>
    )
}

export default withAuthenticator(LoginPage);