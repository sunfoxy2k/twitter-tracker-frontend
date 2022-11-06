import { useRouter } from "next/router"

const TwitterTrackingPage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div> 
            {id}
        </div>
    )
}

export default TwitterTrackingPage