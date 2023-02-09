import Widget from "@/modules/UI_Component/Widget"
import { useGetUserQuery } from "../api"
import { useSelector } from 'react-redux';
import "./style/subscription-page.module.css";

import SubscriptionInfoCard from './component/Subscription/SubscriptionInfoCard';
import AppStyle from './style/app-page.module.css'
import { IoReload } from 'react-icons/io5';
import UserSubscriptionInfo from './component/Subscription/UserSubscriptionInfo';

const SubscriptionPlans = () => {
    const subscriptionInfos = {
        standard: {
            name: 'Standard',
            price: 10,
            duration: '1 month',
            description: 'Standard plan',
            maxTracker: 20,
        },
        premium: {
            name: 'Premium',
            price: 20,
            duration: '1 month',
            description: 'Premium plan',
            maxTracker: 50,
        }
    }
    return (
        <div>
            <h1 className='text-center mb-32 text-4xl text-gray-900'>Subscription Plans</h1>
            <div className='grid grid-cols-4 gap-4'>
                <div />
                <SubscriptionInfoCard {...subscriptionInfos.standard} />
                <SubscriptionInfoCard {...subscriptionInfos.premium} />
                <div />
            </div>
        </div>
    )
}

const SubscriptionPage = () => {
    // const userName = useSelector(state => state.auth.userName)

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch,
    } = useGetUserQuery()
    console.log({isSuccess, data})
    const currentSubscription = {
        plan: data?.subscriptionPlan,
        start: data?.subscriptionStartTime,
        end: data?.subscriptionEndTime,
        isCancelled: data?.isCancelled,
    }
    currentSubscription.isExpired = currentSubscription.end && (currentSubscription.end < Date.now()) ? false : true
    function refetchData() {
        refetch()
    }
    return (
        <div>
            <Widget>
                <div className={AppStyle.header}>
                    <button onClick={refetchData} className="alter"> <IoReload /> </button>
                </div>
                {
                    currentSubscription.isExpired
                        ? <SubscriptionPlans />
                        : <UserSubscriptionInfo {...currentSubscription} refetch={refetch} />
                }
            </Widget>
        </div>
    )
}

export default SubscriptionPage