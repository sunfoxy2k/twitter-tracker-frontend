import React, { useState, useEffect } from "react";
import Widget from "@/modules/UI_Component/Widget"
// import { TelegramBotQr } from './asset/TelegramBotQr'
import { usePutTelegramChatIdMutation, useGetUserQuery } from '../api'
const UserPage = () => {
    const [telegramChatId, setTelegramChatId] = useState('')
    const [putTelegramChatId, resultPutTelegramChatId] = usePutTelegramChatIdMutation()

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch,
    } = useGetUserQuery()
    console.log({ isSuccess, data, isError, error })

    useEffect(() => {
        if (isSuccess) {
            setTelegramChatId(data?.telegramChatId || '')
        }
    }, [isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault()
        putTelegramChatId({
            telegramChatId: telegramChatId
        })
    }

    useEffect(() => {
        if (resultPutTelegramChatId.isSuccess) {
            refetch()
        }
    }, [resultPutTelegramChatId.isSuccess])

    return (
        <div>
            <Widget>

                <h1 className="h1 text-center font-bold">User Info</h1>
                <div>
                    <h2 className="mb-2">Username: <b>{data?.appUsername|| ''}</b></h2>
                    <h2 className="mb-3">Email: <b>{data?.appEmail || ''}</b></h2>
                    <div>
                        <img src="https://i.imgur.com/f1Bx8Ax.png" alt="Telegram Bot QR Code" />
                        <h2>Telegram Account:
                            <input value={telegramChatId} onChange={(e) => setTelegramChatId(e.target.value)} type="text" label="" className="border-2 ml-2 mr-4" />
                            <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </h2>

                    </div>
                    <div>
                        <div></div>
                        {/* <button>Deactivate Account</button> */}
                    </div>
                </div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">How to Receive update via Telegram:</h2>
                <ol className="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 mb-2">
                    <li>
                        Scan QR Code or search for <b>@twitter_track_following_bot</b> on Telegram
                    </li>
                    <li>
                        Press <b>Start</b> button or <b>Send Message</b> to start the bot
                    </li>
                    <li>
                        Copy Telegram Id return by the bot and paste it in the input box above to link your account
                    </li>
                </ol>
                
                <p>If you lost your Telegram Id, you can always get it by sending <b>/start</b> to the bot</p>
            </Widget>
        </div>
    )
}

export default UserPage