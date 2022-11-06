import React, { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";

import { getAuthUser } from "../modules/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const LoginPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        getAuthUser(dispatch);
        router.replace('/app')
    }, [])

    return (
        <div></div>
    )
}

export default withAuthenticator(LoginPage)