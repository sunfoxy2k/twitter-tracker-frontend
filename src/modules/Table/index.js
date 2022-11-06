
import Avatar from '../UI_Component/Avatar'
import TableStyle from './table.module.css'
import Link from 'next/link'
import { formatDuration } from './time';

export const TrackingTable = ({ victims }) => {

    const headers = ["", "Twitter User", "Number of Following", "lastUpdateTime", "addedTime", ""].
        map((e, idx) => <th key={idx}>{e}</th>);


    const rows = victims.map((prop, idx) => <TrackingUserItem  {...prop} key={idx} />)

    return (
        <BaseTable headers={headers} rows={rows} />
    )
}

export const FollowingTable = ({following}) => {
    const headers = ["", "Twitter User", "lastUpdateTime"].map((e, idx) => <th key={idx}>{e}</th>)

    const rows = following.map((prop, idx) => <FollowingUserItem {...prop} key={idx} />)

    return (
        <BaseTable header={headers} rows={rows} />
    )
}

const BaseTable = ({headers, rows}) => {
    return (
        <table className={TableStyle.table} >
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

const UntrackButton = ({ user_name }) => {
    const onClick = () => {
        if (confirm(`Do you want to untrack user "${user_name}"`) == true) {
            console.log('meo meo')
        }
    }

    return (
        <button className='button' onClick={onClick}>Untrack User</button>
    )
}

const TrackingUserItem = ({ user_name, pictureProfileUrl, total_following, createTime, updateTime }) => {

    return (
        <tr>
            <td><Avatar src={pictureProfileUrl} /> </td>
            <td> <Link href={`/app/tracking/${user_name}`}>{user_name}</Link></td>
            <td>{total_following}</td>
            <td>{formatDuration(createTime)}</td>
            <td>{formatDuration(updateTime)}</td>
            <td><UntrackButton user_name={user_name} /></td>
        </tr>
    )
}

const FollowingUserItem = ({user_name, pictureProfileUrl, updateTime}) => {
    return (
        <tr>
            <td><Avatar src={pictureProfileUrl} /> </td>
            <td>{user_name}</td>
            <td>{formatDuration(updateTime)}</td>
        </tr>
    )
}