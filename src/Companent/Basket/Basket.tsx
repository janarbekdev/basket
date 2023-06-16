import React from 'react';
import {useAppSelector} from "../../Hook/useAppSelector";
import {fetchingDeleteBasket, fetchingFavorite} from "../../Redux/ReducerSlice/ProductSlice";
import {useAppDispatch} from "../../Hook/UseAppDispatch";
import {DeleteBasket} from "../../Redux/Action/Action";

const Basket = () => {
    const {basket, product} = useAppSelector(state => state.shop)
    const dispatch = useAppDispatch()
    const favorite = (el: any) => {
        dispatch(fetchingFavorite(el))
    }
    const deleteBasket = (el: any) => {
        dispatch(DeleteBasket(el))
    }

    return (
        <div id='basket'>
            <div className="container">
                <div className="basket">
                    <div className="basket--block">
                        {
                            basket.map(el => (
                                <div className='basket--block__pink'>
                                    <img src={el.image} alt="img"/>
                                    <h1>{el.title}</h1>
                                    <button onClick={() => favorite(el)}>{el.price}</button>
                                    <button onClick={() => deleteBasket(el)} className='basket--block__pink--btn'>
                                        Delete
                                    </button>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Basket;