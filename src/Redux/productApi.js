import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["products"],
    }),
    getCategories: builder.query({
      query: () => "products/categories",
      providesTags: ["products"],
    }),
    getProductByCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["products"],
    }),
    getAllCarts: builder.query({
      query: () => "carts",
    }),

    addToCart: builder.mutation({
      query: (product) => ({
        url: "carts",
        method: "POST",
        body: {
          userId: 5,
          date: "2020-02-03",
          product: [
            { productId: 5, quantity: 1 },
            { productId: 1, quantity: 5 },
          ],
        },
      }),
    }),
getUserCart: builder.query({
  query: () => "carts/user/2",
})
    ,
    getSingleCart: builder.query({
      query: (id) => "carts/5",
    }),
    deleteFromCart: builder.mutation({
      query: (id) => ({
        url:"carts/6",
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSingleProductQuery,
  useAddToCartMutation,
  useDeleteFromCartMutation,
  useGetAllCartsQuery,
  useGetProductByCategoryQuery,
  useGetSingleCartQuery,
  useGetUserCartQuery,
} = productApi;
