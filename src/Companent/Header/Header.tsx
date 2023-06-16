import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../Hook/useAppSelector";
import {useAppDispatch} from "../../Hook/UseAppDispatch";
import {getValueREC} from "../../Redux/Action/Action";

const Header = () => {
    const {basket,value} = useAppSelector(s => s.shop)
    const dispatch = useAppDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(getValueREC(e.target.value))

    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                        <div className="header--products">
                            <Link to={'/'}>
                                <a href="#"> Home</a>
                            </Link>
                            <Link to={'/todo'}>
                                <a href="#"> ToDo</a>
                            </Link>  <Link to={'/product'}>
                                <a href="#"> Product</a>
                            </Link>
                            <Link to={'/basket'}>
                                <a href="#"> Basket</a>
                                {basket.length !== 0 ? basket.length : null}
                            </Link>
                            <Link to={'/favorite'}>
                                <a href="#"> Favorite</a>
                            </Link>
                        </div>
                      <div className="header--baskets">
                          <input onChange={handleChange} type="text"/>
                            <button>Add</button>

                      </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;