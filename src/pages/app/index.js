import Widget from '../../modules/UI_Component/Widget'
import { TrackingTable, FollowingTable } from '../../modules/Table';
import { useListVictimQuery } from '../../modules/api';
import { useRouter } from 'next/router';

const App = () => {
    const router = useRouter();
    const {type, } = router.query;

    const {
        data,
        isLoading, 
        isSuccess,
        isError
    } = useListVictimQuery('meomeo')



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