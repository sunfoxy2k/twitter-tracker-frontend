import Loading from '@/modules/UI_Component/Loading'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Auth } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { login } from '@/store/auth.reducer'
import { usePostUserMutation } from './api'

const LoginPage = () => {
    const dispatch = useDispatch()
    const [postUser, postUserResult] = usePostUserMutation('');

    function loginHandler(user) {
        if (user && user.username) {
            const loginAction = login(user.username)
            dispatch(loginAction)

            Auth.currentUserInfo()
                .then(session => session.attributes.email)
                .then(email => {
                    if (email) {
                        postUser({
                            appEmail: email
                        })
                    }
                })
        }
    }

    function loginErrorHandler(e) {
        console.error('Unexpected Error')
        console.error(e)
    }

    useEffect(() => {
        Auth.currentUserInfo()
            .then(loginHandler)
            .catch(loginErrorHandler)
    }, [])

    return (
        <Loading />
    )
}

export default withAuthenticator(LoginPage)