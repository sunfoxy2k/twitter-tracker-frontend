import { useRouter } from "next/router";
import { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from '../modules/store/auth';

const LoginPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.auth.isLogin)

    useEffect(() => {
        getAuthUser(dispatch)
    }, [])

    useEffect(() => {
        if (isLogin) {
            router.back()
        }
    }, [isLogin])

    return (
        <div>Loading...</div>
    )
}

export default withAuthenticator (LoginPage);