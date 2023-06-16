import React from 'react';
import {useAppSelector} from "../../Hook/useAppSelector";
import {useAppDispatch} from "../../Hook/UseAppDispatch";
import { fetchingDeleteToDo} from "../../Redux/ReducerSlice/ProductSlice";
 interface clock {
     id:number
 }
const Doto=() => {
    const {todo}=useAppSelector(state => state.shop)
      const dispatch = useAppDispatch()
      const deletes = (el:any)=> {
        dispatch(fetchingDeleteToDo(el))
      }
    console.log(todo)
    return (
        <div id='todo'>
            <div className="container">
                <div className="todo">
                    {
                        todo.map(el=> (
                            <div className='todo--desert'>
                                {
                                    el.img ? <img src={el.img} alt="img"/> : <h1>''</h1>
                                }
                                <div className='todo--desert__prices'>
                                    <h1>{el.title}</h1>
                                     <h2>{el.price}</h2>
                                    <button onClick={()=> deletes(el)}>Add</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Doto;