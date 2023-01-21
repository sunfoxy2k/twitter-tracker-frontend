
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API_LIST_VICTIM = "`/list/victims`";
const API_LIST_FOLLOWING = "`/list/following/${id}`";
const API_VICTIM_ENDPOINT = "`/victim/${id}`";
const API_USER_ENDPOINT = "`/user/${id}`";
const NEW_API_USER_ENDPOINT = "`/user`";
const API_CREATE_SUBSCRIPTION_ENDPOINT = "`/subscription/create`";
const reducerPath = 'api'

export const trackerAPI = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT,
        prepareHeaders : (headers, {getState}) => {
            const jwt = getState().jwt

            if (jwt) {
              headers.set('authorization', jwt)
            }
        
            return headers
        }
    }),
    endpoints: (builder) => ({
        listVictim: builder.query({
            query: (id) => eval(API_LIST_VICTIM),
        }),
        listFollowing: builder.query({
            query: (id) => {
                id = encodeURIComponent(id)
                return eval(API_LIST_FOLLOWING)
            }
        }),
        addVictim: builder.mutation({
            query(id) {
                return {
                    url: eval(API_VICTIM_ENDPOINT),
                    method: 'PUT',
                }
            }
        }),
        deleteVictim: builder.mutation({
            query(id) {
                id = encodeURIComponent(id)
                return {
                    url: eval(API_VICTIM_ENDPOINT),
                    method: 'DELETE'
                }
            }
        }),
        postUser: builder.mutation({
            query(data) {
                return {
                    method: "POST",
                    url: eval(NEW_API_USER_ENDPOINT),
                    body: data
                }
            }
        }),
        getUser: builder.query({
            query: (id) => eval(API_USER_ENDPOINT)
        }),
        deactivateUser: builder.mutation({
            query(id) {
                return {
                    url: eval(API_USER_ENDPOINT),
                    method: "DELETE"
                }
            }
        }),
        updateUser: builder.mutation({
            query(data) {
                const { id, ...body } = data;
                return {
                    url: eval(API_USER_ENDPOINT),
                    method: "POST",
                    body
                }
            }
        }),
        createSubscription: builder.mutation({
            query(data) {
                return {
                    url: eval(API_CREATE_SUBSCRIPTION_ENDPOINT),
                    method: "POST",
                    body: data
                }
            }
        }),
    })
})

export const { 
    useListVictimQuery, 
    useListFollowingQuery, 
    useAddVictimMutation, 
    useUpdateUserMutation, 
    useDeleteVictimMutation,
    useGetUserQuery,
    usePostUserMutation,
} = trackerAPI