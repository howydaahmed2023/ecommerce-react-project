import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import {  productApi } from './Redux/productApi'
import { dummyApi } from './Redux/dummyApi'
import { usersApi } from './Redux/userDummyApi'
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
    [dummyApi.reducerPath]: dummyApi.reducer,
    
    [usersApi.reducerPath]: usersApi.reducer,



  
  
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware,dummyApi.middleware,usersApi.middleware),
 
})


setupListeners(store.dispatch)