import React, {useEffect, useState} from 'react';
import {fetchingBasket, fetchingFavorite} from "../../Redux/ReducerSlice/ProductSlice";
import {useAppSelector} from "../../Hook/useAppSelector";
import {useAppDispatch} from "../../Hook/UseAppDispatch";
import {FavoriteDelete, getProduct} from "../../Redux/Action/Action";
import {AiFillHeart} from "react-icons/ai";
import Useconect from "../../UseConect/useconect";
const FavoriteCard = ({el}:any) => {
    const baskets = (el:any)=> {

        dispatch(fetchingBasket(el))
    }
    const {favorite} = useAppSelector(state => state.shop)
    console.log(favorite)
    const dispatch =useAppDispatch()

    const favorites = (el:any)=> {
        dispatch(FavoriteDelete(el))
    }
      const [pinch,setPinch] =useState(+1)

    useEffect(()=> {
        dispatch(getProduct())
    },[])
    console.log('favorite')
    return (
        <div >
            <div className='product--block'>
                   <h1 style={{color:'wheat'}}>{el.id}  < AiFillHeart className='product--block__heart' onClick={()=>favorites(el)} style={{color:'red',
                       transition:'1.3',
                       margin:'0  10px',
                       transform:'scale(2)' }} /></h1>
                <img src={el.image} alt=""/>
                <h1>{el.title}</h1>
                <div className='product--block__btn'>
                    <button  onClick={()=>baskets(el)}  className='product--block__btn--1'> basket</button>
                    {/*<button onClick={()=> favorites(el)} className='product--block__btn--2'>Delete</button>*/}
                </div>
            </div>

           <Useconect/>
        </div>
    );
};

export default FavoriteCard;