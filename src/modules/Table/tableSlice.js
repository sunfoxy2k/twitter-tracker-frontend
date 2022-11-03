import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import build from "next/dist/build";

export const trackerAPI = createApi({
    reducerPath: 'api',
    baseQuery : fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT}),
    endpoints : ((builder) =>  {
        query : (name) => ``
    })
})

export const {use}