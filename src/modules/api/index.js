
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const trackerAPI = createApi({
    reducerPath: 'api',
    baseQuery : fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT}),
    endpoints : (builder) => ({
        listVictim : builder.query({
            query : (name) => eval(process.env.NEXT_PUBLIC_LIST_TWITTER),
        }),
        listFollowing: builder.query({
            query : (name) => eval(process.env.NEXT_PUBLIC_LIST_FOLLOWING)
        })
    })
})

export const { useListVictimQuery, useListFollowingQuery} = trackerAPI