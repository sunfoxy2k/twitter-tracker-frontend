import { useRouter } from "next/router";
import Widget from "../../modules/UI_Component/Widget";
import { useListFollowingQuery, useListVictimQuery } from "../api";
import { FollowingTable } from "./component/Table";
import { useSelector } from "react-redux";
import TrackingPageStyle from "./style/tracking-page.module.css";
import Avatar from '@/modules/UI_Component/Avatar'
import Link from "next/link";
import {IoArrowBackCircle} from 'react-icons/io5'

const defaultProfile = {
    profileUrl: 'https://twitter.com/home',
    pictureProfileUrl: ''
}

const TrackingPage = () => {
    const router = useRouter()
    const { userName: twitterTrackingUser } = router.query
    const currentUser = useSelector(state => state.auth.userName)

    const {
        data: twitterUserData,
    } = useListVictimQuery(currentUser, { skip: !!!currentUser })

    const shouldQueryFollowing = !!twitterUserData && twitterUserData.allIds.includes(twitterTrackingUser)

    const {
        data,
        isLoading,
        isSuccess,
        isError
    } = useListFollowingQuery(twitterTrackingUser, { skip: !!!shouldQueryFollowing })


    const { profileUrl, pictureProfileUrl } = shouldQueryFollowing ? twitterUserData.byId[twitterTrackingUser] : defaultProfile

    return (
        <div>
            <Widget>
                <div className={TrackingPageStyle.info}>
                    <h3>Current Following User : </h3>
                    <Avatar src={pictureProfileUrl}  />
                    <a target="_blank" rel="noopener noreferrer" href={profileUrl}>{twitterTrackingUser}</a>
                    <Link href='/app' className={TrackingPageStyle.right} ><IoArrowBackCircle/> Back to List</Link>
                </div>
                {
                    isLoading ? 'Is Loading' : isSuccess && data ? <FollowingTable data={data} className={TrackingPageStyle.table} /> : 'Data is not Available'
                }
            </Widget>
        </div>
    )
}

export default TrackingPage;