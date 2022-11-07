import { useRouter } from "next/router";
import Widget from "../../modules/UI_Component/Widget";
import { useListFollowingQuery, useListVictimQuery } from "../../modules/api";
import { FollowingTable } from "../../modules/Table";
import { useSelector } from "react-redux";

const TrackingPage = () => {
    const router = useRouter()
    const {userName: twitterTrackingUser } = router.query
    const currentUser = useSelector(state => state.auth.userName) 
    
    const {
        data : twitterUserData,
    } = useListVictimQuery(currentUser, {skip : !!!currentUser})

    const shouldQueryFollowing = twitterUserData && twitterUserData.allIds.includes(twitterTrackingUser)

    const {
        data,
        isLoading, 
        isSuccess,
        isError
    } = useListFollowingQuery(twitterTrackingUser, {skip : !!!shouldQueryFollowing})

    // const {profileUrl} = !!twitterUserData ? twitterUserData.byId[twitterTrackingUser] : 'https://twitter.com/home'

    return (
        <div>
            <div>
                <h3>Current Following User : </h3>
                <a  target="_blank" rel="noopener noreferrer">{twitterTrackingUser}</a>
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