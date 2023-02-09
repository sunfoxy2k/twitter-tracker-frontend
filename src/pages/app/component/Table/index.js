
import Avatar from '@/modules/UI_Component/Avatar';
import style from './table.module.css'
import Link from 'next/link'
import { formatDuration } from './time';
import { useDeleteVictimMutation } from '@/api/index';
import { useEffect } from 'react';

export const TrackingTable = ({ data, className, refetchVictims }) => {

    const headers = [
        "",
        "Twitter User",
        "Number of Following",
        "Update Time",
        "addedTime",
        ""].map((e, idx) => <th className={(idx==3 ||idx == 4) && style.hidden_mobile } key={idx}>{e}</th>);


    const rowID = data.allIds

    const rowsData = rowID.map(id => data.byId[id])

    const rows = rowsData.map((prop, idx) => <TrackingUserItem  {...prop} key={idx} refetchVictims={refetchVictims} />)

    return (
        <BaseTable headers={headers} rows={rows} className={className} />
    )
}

export const FollowingTable = ({ data, className, refetchVictims }) => {
    const headers = ["", "Twitter User", "Update Time"].map((e, idx) => <th key={idx}>{e}</th>)

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

const UntrackButton = ({ id, userName, refetchVictims }) => {
    const [deleteVictim, apiResult] = useDeleteVictimMutation();

    const {
        data,
        isSuccess,
        isLoading,
    } = apiResult

    useEffect(() => {
        if (isSuccess) {
            refetchVictims()
        }
    }, [isSuccess])

    const onClick = () => {
        if (confirm(`Do you want to untrack user "${userName}"`) == true) {
            deleteVictim(id)
        }
    }

    return (
        // <button className='button' onClick={onClick}>Untrack User</button>
        <>
        { isLoading 
            ? <button disabled className='button grey' onClick={onClick}>Procesing...</button> 
            : <button className='button' onClick={onClick}>Untrack User</button>
        }
        </>
    )
}

const TrackingUserItem = ({ userName, pictureProfileUrl, totalFollowing, createTime, updateTime, id, refetchVictims }) => {

    return (
        <tr>
            <td><Avatar src={pictureProfileUrl} /> </td>
            <td> <Link href={`/app/tracking?key=${encodeURIComponent(id)}`}>{userName}</Link></td>
            <td>{totalFollowing}</td>
            <td className={style.hidden_mobile}>{formatDuration(createTime)}</td>
            <td className={style.hidden_mobile}> {formatDuration(updateTime)}</td>
            <td><UntrackButton id={id} userName={userName} refetchVictims={refetchVictims} /></td>
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