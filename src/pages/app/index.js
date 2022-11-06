import Widget from '../../modules/UI_Component/Widget'
import { TrackingTable, FollowingTable } from '../../modules/Table';
import { useListFollowingQuery, useListVictimQuery } from '../../modules/api';
import { useRouter } from 'next/router';

const App = () => {
    const router = useRouter();
    
    const query = router.query.type == 'following' ? useListFollowingQuery : useListVictimQuery

    let user_id;

    if (router.query.type != 'following') {
        // user_id = 
    }

    const {
        data,
        isLoading, 
        isSuccess,
        isError
    } = query('meomeo')



    let content;

    if (isLoading) {
        content = 'Is Loading'
    } else if (isSuccess) {
        
        content = <TrackingTable victims={data}  />
    }

    return (
        <div>
            <h1>List Current Tracking User</h1>
            <Widget>
                {content}
            </Widget>
        </div>
    )
}

export default App;