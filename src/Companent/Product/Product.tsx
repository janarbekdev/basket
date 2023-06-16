import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../Hook/UseAppDispatch";
import {useAppSelector} from "../../Hook/useAppSelector";
import { getProduct} from "../../Redux/Action/Action";
import ProductCard from "./ProductCard";

const Product = (el: any) => {
    const {product, favorite} = useAppSelector(state => state.shop)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    console.log(product)

    return (
        <div id='product'>
            <div className="container">
                <div className="product">
                    {
                        product.map(el => <ProductCard el={el}/>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Product;