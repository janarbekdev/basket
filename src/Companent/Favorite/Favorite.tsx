import React, {useEffect} from 'react';
import {useAppSelector} from "../../Hook/useAppSelector";
import FavoriteCard from "./FavoriteCard";
const Favorite = () => {
    const {favorite} = useAppSelector(state => state.shop)


    return (
        <div id='product'>
            <div className="container">
                <div className="product">
                    {
                        favorite.map(el=> (
                            <FavoriteCard el={el} />
                        ))
                    }
                </div>
            </div>

        </div>

    );
};

export default Favorite;