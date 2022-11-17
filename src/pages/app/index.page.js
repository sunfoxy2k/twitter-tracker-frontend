import Widget from '../../modules/UI_Component/Widget'
import { TrackingTable } from './component/Table'
import { useListVictimQuery } from '../api';
import { useSelector } from 'react-redux';
import AppStyle from './style/index.module.css'
import { IoReload } from 'react-icons/io5';
import { useAddVictimMutation } from '../api';
import { useEffect, useState } from 'react';


const AddVictimForm = () => {
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

    return (
        <form className={AppStyle.form} onSubmit={handleSubmit}>
            <label htmlFor="add-tracker"><h3>Adding Twitter to track:</h3> </label>
            <span>
                <span>https://twitter.com/</span>
                <input type="text" id="add-tracker" placeholder='elonmusk' name='victim' value={user} onChange={e => setUser(e.target.value)} />
            </span>
            <button type="submit">Submit</button>
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

    function refetchData ()  {
        refetch()
    }


    return (
        <div>
            <Widget>
                <div className={AppStyle.header}>
                    <AddVictimForm />
                    <button onClick={refetchData} className="alter"> <IoReload /> </button>
                </div>
                {
                    isLoading ? 'Is Loading' : isSuccess && data && <TrackingTable data={data} className={AppStyle.table} />
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