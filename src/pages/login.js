import React, { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from 'next/router'
const LoginPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.replace('/app')
    }, [])

    return (
        <div></div>
    )
}

export default withAuthenticator(LoginPage)