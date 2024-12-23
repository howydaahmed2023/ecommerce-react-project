import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  tagTypes:['products'],
  endpoints: (builder) => ({
    getDummyProducts: builder.query({
        query: () => "products",
        providesTags:['products']
      }), 
      getCategories: builder.query({
        query: () => "products/categories",
        providesTags:['products']
      }), 
      getProductByCategory: builder.query({
        query: (cat) => "products/category/jewelery",
        providesTags:['products']
      }), 
      searchProduct: builder.mutation({
       query:({query})=>({
        //url:  `products/search?q=${query}`,
        url:  "products/search?q=phone",
        method:"get"
        }),
        invalidatesTags:['products']
       }),
      

      getProductById: builder.query({
        query: (id) =>`products/${id}`,
        providesTags:['products']
      }),
     
      createProduct:builder.mutation({
       query: (product)=>({
        url: "products/add",
        method:"POST",
        body:{product}
       }) ,
       invalidatesTags:['products']
      }), 
      updateProduct:builder.mutation({
        query: (product)=>({
         url: `products/${product.id}`,
         method:"PUT",
         body:{product}
        }) ,
        invalidatesTags:['products']
       }), 
       deleteProduct:builder.mutation({
        query: (id)=>({
         url: `products/${id}`,
         method:"DELETE",
       
        }) ,
        invalidatesTags:['products']
       }), 
       sortProducts:builder.mutation({
        query: (sortCriteria)=>({
         url: 'products?sortBy=title',
         method:"get",
       
        }) ,
        invalidatesTags:['products']
       })
   
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDummyProductsQuery,useSearchProductMutation
  
} = dummyApi