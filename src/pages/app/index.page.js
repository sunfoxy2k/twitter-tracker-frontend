import Widget from '@/modules/UI_Component/Widget'
import { TrackingTable } from './component/Table'
import { useListVictimQuery } from '@/api/index';
import { useSelector } from 'react-redux';
import AppStyle from './style/app-page.module.css'
import { IoReload } from 'react-icons/io5';
import { useAddVictimMutation } from '../api';
import { useEffect, useState } from 'react';


const AddVictimForm = ({ refetchVictims }) => {
    const [addVictim, result] = useAddVictimMutation('');

    const {
        data,
        isLoading,
        isSuccess,
    } = result

    const [user, setUser] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        addVictim(user);
    }

    useEffect(() => {
        if (isSuccess) {
            refetchVictims()
        }
    },
        [isSuccess]
    )

    return (
        <form className={AppStyle.form} onSubmit={handleSubmit}>
            <label htmlFor="add-tracker"><h3>Adding Twitter to track:</h3> </label>
            <span>
                <span>https://twitter.com/</span>
                <input className='border-2' type="text" id="add-tracker" placeholder='elonmusk' name='victim' value={user} onChange={e => setUser(e.target.value)} />
            </span>
            {isLoading ?
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="submit" disabled>Adding...</button>
                : <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="submit">Submit</button>}
        </form>
    )
}

const App = () => {
    const userName = useSelector(state => state.auth.userName)

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch,
        error
    } = useListVictimQuery(userName, {
        skip: !!!userName
    })

    function refetchData() {
        refetch()
    }


    return (
        <div>
            <Widget>
                <div className={AppStyle.header}>
                    <AddVictimForm refetchVictims={refetch} />
                    <button onClick={refetchData} className="alter"> <IoReload /> </button>
                </div>
                {
                    isLoading ? 'Is Loading' : isSuccess && data && <TrackingTable data={data} className={AppStyle.table} refetchVictims={refetch} />
                }
                <div className={AppStyle.info}>
                    <h3>Current Number Tracking:</h3>
                    <div>{data && data.allIds.length}</div>
                </div>
            </Widget>
        </div>
    )
}

export default App;