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
            <div>
                <h3>Current Following User : </h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">{userName}</a>
            </div>
            <Widget>
                {
                    isLoading ? 'Is Loading' : isSuccess && data ? <FollowingTable data={data} /> : 'Data is not Available'
                }
            </Widget>
        </div>
    )
}

export default TrackingPage;