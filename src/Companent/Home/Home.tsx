import React, {useState} from 'react';
import {fetchingToDo} from "../../Redux/ReducerSlice/ProductSlice";
import {useAppSelector} from "../../Hook/useAppSelector";
import {useAppDispatch} from "../../Hook/UseAppDispatch";

const Home = () => {
    const {todo} = useAppSelector(state => state.shop)

    const [value, setValue] = useState<string>('')
    const [img, setImg] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [cost, setCost] = useState(true)
    const dispatch = useAppDispatch()
    console.log(value, img, price)
    const HandleForm = (e: React.FormEvent) => {
        if (e.target) {
            e.preventDefault()
            const newToDo = {
                id: new Date().toISOString(),
                title: value,
                price: price,
                img: img,
            }
            dispatch(fetchingToDo(newToDo))
            setValue("")
            setImg("")
            setCost(true)
        } else {
            setCost(false)
        }

    }
    const [values, setValues] = useState<string>('')
    // let theBigDay = new Date('July 1, 1999');
    // let sameAsBigDay = new Date();
    // sameAsBigDay.setTime(theBigDay.getTime());
    return (
        <div id='home'>
            <div className="container">
                <div className="home">
                    <div className="home--left">
                        <form className='home--left__inputs' onSubmit={HandleForm}>
                            <div className='home--left__inputs--pink'>
                                {/*<h1>{theBigDay.getHours()}</h1>*/}
                                <input onChange={(e: any) => setValue(e.target.value)} placeholder='name'
                                       type="search"/>
                                <input onChange={(e: any) => setImg(e.target.value)} type="search" placeholder='img'/>
                                <input onChange={(e: any) => setPrice(e.target.value)} type="number"
                                       placeholder='price'/>
                                <button onClick={() => dispatch(fetchingToDo)}>Add</button>

                            </div>
                        </form>
                    </div>
                    <div className="home--right">
                        {
                            todo.map(el => (
                                <div><img src={el.img} alt="img"/></div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;