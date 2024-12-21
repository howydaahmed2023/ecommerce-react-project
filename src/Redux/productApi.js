import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes:['products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags:['products']
    }), 
    getCategories: builder.query({
      query: () => "products/categories",
      providesTags:['products']
    }), 
    
     
    
      
   
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery,useGetCategoriesQuery,
} = productApi