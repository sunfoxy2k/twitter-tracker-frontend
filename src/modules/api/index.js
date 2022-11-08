
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trackerAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT }),
    endpoints: (builder) => ({
        listVictim: builder.query({
            query: (id) => eval(process.env.NEXT_PUBLIC_API_LIST_VICTIM),
        }),
        listFollowing: builder.query({
            query: (id) => eval(process.env.NEXT_PUBLIC_API_LIST_FOLLOWING)
        }),
        addVictim: builder.mutation({
            query(id) {
                return {
                    url: eval(process.env.NEXT_PUBLIC_API_VICTIM_ENDPOINT),
                    method: 'PUT',
                }
            }
        }),
        deleteVictim: builder.mutation({
            query(id) {
                return {
                    url: eval(process.env.NEXT_PUBLIC_API_VICTIM_ENDPOINT),
                    method: 'DELETE'
                }
            }
        }),
        getUser : builder.query({
           query : (id) => eval(process.env.NEXT_PUBLIC_API_USER_ENDPOINT)
        }),
        deactivateUser: builder.mutation({
            query(id) {
                return {
                    url: eval(process.env.NEXT_PUBLIC_API_USER_ENDPOINT),
                    method: "DELETE"
                }
            }
        }),
        updateUser: builder.mutation({
            query(data) {
                const { id, ...body } = data;
                return {
                    url: eval(process.env.NEXT_PUBLIC_API_USER_ENDPOINT),
                    method: "POST",
                    body
                }
            }
        }),
    })
})

export const { useListVictimQuery, useListFollowingQuery } = trackerAPI