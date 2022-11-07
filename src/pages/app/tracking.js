import { useRouter } from "next/router";
import Widget from "../../modules/UI_Component/Widget";
import { useListFollowingQuery } from "../../modules/api";
import { FollowingTable } from "../../modules/Table";

const TrackingPage = () => {
    const router = useRouter()
    const {userName} = router.query
    
    const {
        data,
        isLoading, 
        isSuccess,
        isError
    } = useListFollowingQuery(userName)

    return (
        <div>
            <h1>Current Tracking</h1>
            <Widget>
                {
                    isLoading ? 'Is Loading' : isSuccess && data ? <FollowingTable data={data} /> : 'Data is not Available'
                }
            </Widget>
        </div>
    )
}

export default TrackingPage;