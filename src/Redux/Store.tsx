import React from 'react';
import {combineReducers, configureStore} from "@reduxjs/toolkit";
  import getProduct from '../Redux/ReducerSlice/ProductSlice'
export const rootReducer = combineReducers({
    shop: getProduct
})
 export const getUp = ()=> {
       return configureStore({
             reducer:rootReducer
       })
 }
 export type AppStore = ReturnType<typeof rootReducer>
type Upstore = ReturnType<typeof getUp>
export type AppDispatch = Upstore['dispatch']