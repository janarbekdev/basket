import React from 'react';
import {Ibasket, Ifavorite, Iinput, Iproduct} from "../../Type/interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const task: any = localStorage.getItem('basket')
const favoriteTask: any = localStorage.getItem('favorite')

export interface productI {
    product: Iproduct[]
    basket: any[]
    favorite: any[]
    todo: Iinput[]
    value: string
}

export const initialState: productI = {
    product: [],
    basket: JSON.parse(task) || [],
    favorite: JSON.parse(favoriteTask) || [],
    todo: [],
    value: ""
}
export const getProduct = createSlice({
        name: 'product',
        initialState,
        reducers: {
            fetchingProduct(state, action: PayloadAction<any>) {
                state.product = action.payload
            },
            fetchingBasket(state, action: PayloadAction<any>) {
                const foundBasket = state.basket.find(el => el.id === action.payload.id)
                if (foundBasket) {
                    state.basket = state.basket.map(el => el.id === foundBasket.id ? {
                        ...el,
                        quantity: el.quantity + 1
                    } : el)
                } else {
                    state.basket = [...state.basket, {...action.payload, quantity: 1}]
                }
            },
            fetchingDeleteBasket(state, action: PayloadAction<any>) {
                state.basket = state.basket.filter(el => el.id !== action.payload.id)
            },
            fetchingFavorite(state, action: PayloadAction<any>) {
                const stuffed = state.favorite.find(el => el.id === action.payload.id)
                if (stuffed) {
                    state.favorite = state.favorite.filter(el => el.id !== action.payload.id)
                } else {

                    return {...state, favorite: [...state.favorite, action.payload]}
                }
            },
            fetchingToDo(state, action: PayloadAction<Iinput>) {
                state.todo.push(action.payload)
            },
            fethcinLike(state, action: PayloadAction<any>) {
                const likes = state.favorite.find(el => el.id === action.payload.id)
                if (likes) {
                    state.favorite = state.favorite.filter(el => el.id !== likes.id)
                } else {
                    state.favorite = [...state.favorite, {...action.payload}]

                }
            },
            fetchingDeleteToDo(state, action: PayloadAction<any>) {
                state.todo = state.todo.filter((el: any) => el === action.payload.id)
            },
            getValue(state,{payload}: PayloadAction<string>) {
                state.value = payload
            }
        }

    }
)
export default getProduct.reducer

export const {
    fetchingProduct,
    fetchingBasket,
    fetchingDeleteToDo,
    fetchingDeleteBasket,
    fetchingFavorite,
    fetchingToDo,
    getValue
} = getProduct.actions