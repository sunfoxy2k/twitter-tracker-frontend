
import Avatar from '../../../modules/UI_Component/Avatar';
import TableStyle from './table.module.css'
import Link from 'next/link'
import { formatDuration } from './time';

export const TrackingTable = ({ data, className }) => {

    const headers = ["", "Twitter User", "Number of Following", "lastUpdateTime", "addedTime", ""].
        map((e, idx) => <th key={idx}>{e}</th>);


    const rowID = data.allIds

    const rowsData = rowID.map(id => data.byId[id])

    const rows = rowsData.map((prop, idx) => <TrackingUserItem  {...prop} key={idx} />)

    return (
        <BaseTable headers={headers} rows={rows} className={className} />
    )
}

export const FollowingTable = ({data, className}) => {
    const headers = ["", "Twitter User", "lastUpdateTime"].map((e, idx) => <th key={idx}>{e}</th>)

    const rowID = data.allIds

    const rowsData = rowID.map(id => data.byId[id])

    const rows = rowsData.map((prop, idx) => <FollowingUserItem  {...prop} key={idx} />)

    return (
        <BaseTable headers={headers} rows={rows} className={className} />
    )
}

const BaseTable = ({headers, rows, className}) => {
    return (
        <table className={`${TableStyle.table} ${className}`} >
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

const TrackingUserItem = ({ userName, pictureProfileUrl, totalFollowing, createTime, updateTime, id }) => {

    return (
        <tr>
            <td><Avatar src={pictureProfileUrl} /> </td>
            <td> <Link href={`/app/tracking?userName=${id}`}>{userName}</Link></td>
            <td>{totalFollowing}</td>
            <td>{formatDuration(createTime)}</td>
            <td>{formatDuration(updateTime)}</td>
            <td><UntrackButton user_name={userName} /></td>
        </tr>
    )
}

const FollowingUserItem = ({userName, pictureProfileUrl, updateTime, profileUrl}) => {
    return (
        <tr>
            <td><Avatar src={pictureProfileUrl} /> </td>
            <td><a href={profileUrl} target="_blank" rel="noopener noreferrer">{userName}</a> </td>
            <td>{formatDuration(updateTime)}</td>
        </tr>
    )
}