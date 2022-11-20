
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API_LIST_VICTIM = "`/list/victim`";
const API_LIST_FOLLOWING = "`/list/following/${id}`";
const API_VICTIM_ENDPOINT = "`/victim/${id}`";
const API_USER_ENDPOINT = "`/user/${id}`";

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
            query: (id) => eval(API_LIST_FOLLOWING)
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
                return {
                    url: eval(API_VICTIM_ENDPOINT),
                    method: 'DELETE'
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
    })
})

export const { useListVictimQuery, useListFollowingQuery, useAddVictimMutation, useUpdateUserMutation, useDeleteVictimMutation
} = trackerAPI