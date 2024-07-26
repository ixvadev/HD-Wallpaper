import React, { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card";


const App = () => {
  
  const [card,setCard] = useState([])

  function addToCard(item){
    setCard([...card,item])
  }

  return (
    <div>
      <Header length={card.length}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCard ={addToCard}/>} />
        <Route path="/card" element={<Card card={card}/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
