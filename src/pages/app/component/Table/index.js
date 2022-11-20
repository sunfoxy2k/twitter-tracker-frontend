
import Avatar from '@/modules/UI_Component/Avatar';
import style from './table.module.css'
import Link from 'next/link'
import { formatDuration } from './time';
import { useDeleteVictimMutation } from '@/api/index';
import { useEffect } from 'react';

export const TrackingTable = ({ data, className }) => {

    const headers = [
        "",
        "Twitter User",
        "Number of Following",
        "lastUpdateTime",
        "addedTime",
        ""].map((e, idx) => <th className={(idx==3 ||idx == 4) && style.hidden_mobile } key={idx}>{e}</th>);


    const rowID = data.allIds

    const rowsData = rowID.map(id => data.byId[id])

    const rows = rowsData.map((prop, idx) => <TrackingUserItem  {...prop} key={idx} />)

    return (
        <BaseTable headers={headers} rows={rows} className={className} />
    )
}

export const FollowingTable = ({ data, className }) => {
    const headers = ["", "Twitter User", "lastUpdateTime"].map((e, idx) => <th key={idx}>{e}</th>)

    const rowID = data.allIds

    const rowsData = rowID.map(id => data.byId[id])

    const rows = rowsData.map((prop, idx) => <FollowingUserItem  {...prop} key={idx} />)

    return (
        <BaseTable headers={headers} rows={rows} className={className} />
    )
}

const BaseTable = ({ headers, rows, className }) => {
    return (
        <table className={`${style.table} ${className}`} >
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
    const [deleteVictim, apiResult] = useDeleteVictimMutation();

    const {
        data,
        isSuccess,
    } = apiResult

    useEffect(() => {
        console.log(data)
    }, [isSuccess])

    const onClick = () => {
        if (confirm(`Do you want to untrack user "${user_name}"`) == true) {
            deleteVictim(user_name)
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
            <td className={style.hidden_mobile}>{formatDuration(createTime)}</td>
            <td className={style.hidden_mobile}> {formatDuration(updateTime)}</td>
            <td><UntrackButton user_name={userName} /></td>
        </tr>
    )
}

const FollowingUserItem = ({ userName, pictureProfileUrl, updateTime, profileUrl }) => {
    return (
        <tr>
            <td><Avatar src={pictureProfileUrl} /> </td>
            <td><a href={profileUrl} target="_blank" rel="noopener noreferrer">{userName}</a> </td>
            <td>{formatDuration(updateTime)}</td>
        </tr>
    )
}