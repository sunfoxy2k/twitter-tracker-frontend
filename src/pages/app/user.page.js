import Widget from "../../modules/UI_Component/Widget"

const UserPage = () => {
    return (
        <div>
            <Widget>

                <h1>User Info</h1>
                <div>
                    <div>
                        <label htmlFor=""><h2>Telegram Account: </h2></label>
                        <input type="text" label=""/>
                        <button>Submit</button>
                    </div>
                    <div>
                        <div></div>
                        <button>Deactivate Account</button>
                    </div>
                </div>
            </Widget>
        </div>
    )
}

export default UserPage