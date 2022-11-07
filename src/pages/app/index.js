import Widget from '../../modules/UI_Component/Widget'
import { TrackingTable, FollowingTable } from '../../modules/Table';
import { useListFollowingQuery, useListVictimQuery } from '../../modules/api';
import { useRouter } from 'next/router';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../modules/auth/reducer';
import { Auth } from 'aws-amplify';
import { getAuthUser } from '../../modules/auth';

const AuthApp = () => {
    const dispatch = useDispatch()
    const userName = useSelector(state => state.auth.userName)

    useEffect(() => {
        if (!!!userName) {
            getAuthUser(dispatch)
        }
    }, [])

    return <App />
}



const App = () => {
    const userName = useSelector(state => state.auth.userName)

    const {
        data,
        isLoading, 
        isSuccess,
        isError
    } = useListVictimQuery(userName, {
        skip : !!!userName
    })

    return (
        <div>
            <h1>List Current Tracking User</h1>
            <Widget>
                {
                    isLoading ? 'Is Loading' : isSuccess && <TrackingTable data={data} />
                }
            </Widget>
        </div>
    )
}

export default App;