import { useState, useEffect } from 'react'
import Widget from '../../modules/UI_Component/Widget'
import { TrackingTable } from '../../modules/Table';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/result`).then(res => res.json())
            .then(data => setData(data))
    })

    return (
        <div>
            <h1>Scrape List</h1>
            <Widget>
                <TrackingTable tracking_data={data} />
            </Widget>
        </div>
    )
}

export default App;