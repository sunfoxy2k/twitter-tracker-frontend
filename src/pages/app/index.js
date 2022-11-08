import Widget from '../../modules/UI_Component/Widget'
import { TrackingTable } from '../../modules/Table';
import { useListVictimQuery } from '../../modules/api';
import { useSelector } from 'react-redux';
import AppStyle from '../../styles/pages/app/index.module.css'
import { IoReload } from 'react-icons/io5'

const App = () => {
    const userName = useSelector(state => state.auth.userName)

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useListVictimQuery(userName, {
        skip: !!!userName
    })

    const refetchData = () => {
        refetch()
    }

    return (
        <div>
            <Widget>
                <div className={AppStyle.header}>
                    <form className={AppStyle.form}>
                        <label htmlFor="add-tracker"><h3>Adding Twitter to track:</h3> </label>
                        <span>
                            <span>https://twitter.com/</span>
                            <input type="text" id="add-tracker" placeholder='elonmusk' />
                        </span>
                        <button type="submit">Submit</button>
                    </form>
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