import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  tagTypes:['users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
      providesTags:['users']
    }), 
    addNewUser:builder.mutation({
      query: (user)=>({
       url: "users/add",
       method:"POST",
       body:{user}
      }) ,
      invalidatesTags:['users']
     }), 
     loginUser:builder.mutation({
      query: ({username,password})=>({
       url: "user/login",
       method:"POST",
       body:{username,password}
      }) ,
     
     }), 
     getSingleUser:builder.query({
      query:(id)=>'user1/1',
      providesTags:['users']
     })
   
     
   
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useAddNewUserMutation,useGetAllUsersQuery ,useLoginUserMutation,useGetSingleUserQuery} = usersApi