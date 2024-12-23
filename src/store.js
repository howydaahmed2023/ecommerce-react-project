import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import {  productApi } from './Redux/productApi'
import { dummyApi } from './Redux/dummyApi'
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
    [dummyApi.reducerPath]: dummyApi.reducer,

  
  
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware,dummyApi.middleware),
 
})


setupListeners(store.dispatch)