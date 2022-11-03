
import Avatar from '../UI_Component/Avatar'
import TableStyle from './table.module.css'
import { formatDuration } from './time';

export const TrackingTable = ({ tracking_data, }) => {

    const  headers = ["", "Twitter User","Number of Following","lastUpdateTime", "addedTime" ,""];

    return (
        <table className={TableStyle.table} >
            <thead>
                <tr>
                    {headers.map((e, idx) => <th key={idx}>{e}</th>)}
                </tr>
            </thead>
            <tbody>
                {tracking_data.map((props, idx) => <TrackingUserItem {...props} key={idx}/>)}
            </tbody>
        </table>
    )
}

const UntrackButton = ({user_name}) => {
    const onClick = () => {
        if (confirm (`Do you want to untrack user "${user_name}"`) == true) {
            console.log('meo meo')
        }
    }

    return (
        <button className='button' onClick={onClick}>Untrack User</button>
    )
}

const TrackingUserItem = ({ user_name, pictureProfileUrl, total_following,createTime,updateTime }) => {

    return (
        <tr>
            <td><Avatar src={pictureProfileUrl} /> </td>
            <td>{user_name}</td>
            <td>{total_following}</td>
            <td>{formatDuration(createTime)}</td>
            <td>{formatDuration(updateTime)}</td>
            <td><UntrackButton user_name={user_name} /></td>
        </tr>
    )
}