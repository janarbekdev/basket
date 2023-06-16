import React from 'react';
import {AppDispatch} from "../Store";
import axios from "axios";
import {
    fetchingBasket,
    fetchingDeleteBasket,
    fetchingFavorite,
    fetchingProduct,
    getValue
} from "../ReducerSlice/ProductSlice";

export const getProduct = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const responsive = await axios.get(`https://fakestoreapi.com/products`)
            dispatch(fetchingProduct(responsive.data))
        } catch (e) {
            // console.log(e)
        }
    }
}


export const AdtooBasketSuccess = (bas: any) => async (dispatch: AppDispatch) => {
    const baskets: any = localStorage.getItem("basket")
    let task = JSON.parse(baskets) || []
    const found = task.find((el: any) => el.id === bas.id)
    if (found) {
        task = task.map((el: any) => el.id === found.id ? {...el, quantity: el.quantity + 1} : el)
    } else {
        task = [...task, {...bas}]
    }
    localStorage.setItem("basket", JSON.stringify(task))
    dispatch(fetchingBasket(bas))
}
export const DeleteBasket = (bos: any) => async (dispatch: AppDispatch) => {
    const deleteBas: any = localStorage.getItem('basket')
    let deleteFound = JSON.parse(deleteBas) || []
    deleteFound = deleteFound.filter((el: any) => el.id !== bos.id)
    localStorage.setItem('basket', JSON.stringify(deleteFound))
    dispatch(fetchingDeleteBasket(bos))
}
export const Favorites = (chew: any) => async (dispatch: AppDispatch) => {
    const press: any = localStorage.getItem('favorite')
    let favoriteTask = JSON.parse(press) || []
    let painFull = favoriteTask.find((el: any) => el.id === chew.id)
    if (painFull) {
        favoriteTask = favoriteTask.filter((el: any) => el.id === painFull.id)
    } else {
        favoriteTask = [...favoriteTask, {...chew}];
    }
    localStorage.setItem('favorite', JSON.stringify(favoriteTask))
    dispatch(fetchingFavorite(chew))
}
export const FavoriteDelete = (above: any) => async (dispatch: AppDispatch) => {
    const FavoriteDeletes: any = localStorage.getItem('favorite')
    let dead = JSON.parse(FavoriteDeletes) || []
    const row = dead.filter((el: any) => el.id !== above.id)
    localStorage.setItem('favorite', JSON.stringify(row))
    dispatch(fetchingFavorite(above))
}

export const getValueREC = (value: any) => (dispatch: AppDispatch) => {
    dispatch(getValue(value))
}