
import Avatar from '../UI_Component/Avatar'
import TableStyle from './table.module.css'

export const TrackingTable = ({ tracking_data, }) => {

    const  headers = ["", "Twitter User", "Number of Following", "Remove Track"];

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

const TrackingUserItem = ({ user_name, pictureProfileUrl, total_following }) => {

    return (
        <tr>
            <td><Avatar src={pictureProfileUrl} /> </td>
            <td>{user_name}</td>
            <td>{total_following}</td>
            <td><button>X</button> </td>
        </tr>
    )
}