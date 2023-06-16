import React from 'react';
import './App.scss';
import Header from "./Companent/Header/Header";
import {Route, Routes} from "react-router-dom";
import Product from "./Companent/Product/Product";
import Basket from "./Companent/Basket/Basket";
import Favorite from "./Companent/Favorite/Favorite";
import Home from "./Companent/Home/Home";
import Doto from "./Companent/Doto/Doto";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/todo'} element={<Doto/>}/>
        <Route path={'/product'} element={<Product/>} />
        <Route path={'/basket'} element={<Basket/>} />
        <Route path={'/favorite'} element={<Favorite/>} />
      </Routes>
    </div>
  );
}

export default App;
