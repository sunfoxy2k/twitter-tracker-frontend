import Widget from "@/modules/UI_Component/Widget"
import { useGetUserQuery } from "../api"
import { useSelector } from 'react-redux';
import "./style/subscription-page.module.css";
import { useCreateSubscriptionMutation, useCancelSubscriptionMutation } from "../api";

const UserSubscriptionInfo = ({ plan, start, end, refetch, isCancelled }) => {
    const [cancelSubscription, resultCancelSubscription] = useCancelSubscriptionMutation();
    return (
        <div>
            <h3>Current Subscription</h3>
            <p>{plan}</p>
            <p>{start}</p>
            <p>{end}</p>
            <p>Is Cancelled: {isCancelled ? 'Yes' : 'No'}</p>
            {
                isCancelled ?
                    <div />
                : <button onClick={cancelSubscription}>Cancel Subscription</button>
            }
            is
        </div>
    )
}

const SubscriptionInfoCard = ({ name, price, duration, description, maxTracker }) => {
    const [createSubscription, resultCreateSubscription] = useCreateSubscriptionMutation();


    function createPaymentSession() {
        createSubscription({
            plan: name
        })
    }

    if (resultCreateSubscription.isSuccess) {
        window.location.href = resultCreateSubscription.data.url
    }

    return (
        <button onClick={createPaymentSession}>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{duration}</p>
            <p>{description}</p>
            <p>{maxTracker}</p>
        </button>
    )
}

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
            <h3>Subscription Plans</h3>
            <SubscriptionInfoCard {...subscriptionInfos.standard}/>
            <SubscriptionInfoCard {...subscriptionInfos.premium}/>
        </div>
    )
}

const SubscriptionPage = () => {
    const userName = useSelector(state => state.auth.userName)

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch,
    } = useGetUserQuery()

    const currentSubscription = {
        plan: data?.subscriptionPlan,
        start: data?.subscriptionStartTime,
        end: data?.subscriptionEndTime,
        isCancelled: data?.isCancelled,
    }
    currentSubscription.isExpired = currentSubscription.end ? new Date(currentSubscription.end) < new Date() : false

    return (
        <div>
            <Widget>
                {
                    currentSubscription.start
                        ? <UserSubscriptionInfo {...currentSubscription} refetch={refetch} />
                        : <SubscriptionPlans />
                }
            </Widget>
        </div>
    )
}

export default SubscriptionPage