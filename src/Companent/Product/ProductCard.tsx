import React, {useState} from 'react';
import {AiFillHeart} from "react-icons/ai";
import {AdtooBasketSuccess, Favorites} from "../../Redux/Action/Action";
import {useAppDispatch} from "../../Hook/UseAppDispatch";
import {FaBlackTie} from "react-icons/fa";
import {useGlobalContext} from "../../UseConect";
import {useAppSelector} from "../../Hook/useAppSelector";

const ProductCard = ({el}: any) => {
    const {favorite,value} = useAppSelector(state => state.shop)
    const dispatch = useAppDispatch()
    const [likeess, setLikes] = useState(false)
    const [increses, setIncrese] = useState(false)
    const favorites = (el: any) => {
        dispatch(Favorites(el))
        setIncrese(!increses)
    }
    const handleLikes = (el: any) => {
        dispatch(Favorites(el))
        setLikes(true)
        setTimeout(() => setLikes(false), 1000)
    }
    const [q, setG] = useState(1)
    const sos = () => {
        if (q === q) {
            setG(q + 1)
        } else {
            setG(0)
        }
    }
    const {copy} = useGlobalContext()
    const {setCopy} = useGlobalContext()
    const fount = (el: any) => favorite.some(some => some.id === el.id)
    return (
        <>
            {
                el.title.includes(value) &&
                <div style={{position: "relative"}}>
                    <div className='product--block'>
                        <img onDoubleClick={() => handleLikes(el)} src={el.image} alt="img"/>
                        {
                            likeess ? <AiFillHeart style={{
                                zIndex: '9',
                                position: 'absolute',
                                fontSize: '30px',
                                color: 'red',
                                top: "100px"
                            }}/> : ''
                        }
                        <h1>{el.title}</h1>
                        <p style={{color: 'red'}}>{copy}</p>
                        <div className='product--block__btn'>
                            <button onClick={() => dispatch(AdtooBasketSuccess(el))}
                                    className='product--block__btn--1'> basket
                            </button>
                            <button onClick={() => `${favorites(el)}` && `${sos()}` && setCopy}
                                    className='product--block__btn--2'><FaBlackTie style={{color: fount(el) ? "red" : ""}}/>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ProductCard;